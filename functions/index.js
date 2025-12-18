/**
 * GolfGang Cloud Functions for Push Notifications
 * Using Firebase Functions v2 syntax
 */

const {onDocumentCreated, onDocumentUpdated} = require("firebase-functions/v2/firestore");
const {onSchedule} = require("firebase-functions/v2/scheduler");
const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {getMessaging} = require("firebase-admin/messaging");

initializeApp();

const db = getFirestore();
const messaging = getMessaging();

// Fun notification messages with emojis
const NOTIFICATION_MESSAGES = {
    eventBooked: {
        title: "✅ Round Confirmed!",
        bodyTemplate: "⛳ {eventTitle} is locked in! Time to hit the links 🏌️",
    },
    newEvent: {
        title: "🏌️ New Round Alert!",
        bodyTemplate: "{eventTitle} - Are you in? Tap to RSVP 👆",
    },
    playerJoined: {
        title: "👋 New Player!",
        bodyTemplate: "{playerName} just joined {eventTitle}!",
    },
    rsvpReminder: {
        title: "⏰ RSVP Reminder",
        bodyTemplate: "Don't forget to respond to {eventTitle}!",
    },
    adminRsvp: {
        title: "📋 New RSVP",
        bodyTemplate: "{playerName} responded '{status}' to {eventTitle}",
    },
};

/**
 * Get FCM tokens for a list of user IDs
 * @param {Array} userIds - Array of user IDs
 * @return {Promise<Array>} Array of FCM tokens
 */
async function getTokensForUsers(userIds) {
    const tokens = [];

    for (const userId of userIds) {
        try {
            const userDoc = await db.collection("users").doc(userId).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                if (userData.fcmTokens && userData.notificationsEnabled) {
                    tokens.push(...userData.fcmTokens);
                }
            }
        } catch (error) {
            console.error("Error getting tokens for user " + userId, error);
        }
    }

    return [...new Set(tokens)];
}

/**
 * Get FCM tokens for all admin users
 * @return {Promise<Array>} Array of FCM tokens
 */
async function getAdminTokens() {
    const snapshot = await db.collection("users")
        .where("isAdmin", "==", true)
        .where("notificationsEnabled", "==", true)
        .get();

    const tokens = [];
    snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.fcmTokens) {
            tokens.push(...data.fcmTokens);
        }
    });

    return [...new Set(tokens)];
}

/**
 * Send notification to multiple tokens
 * Uses data-only message to let service worker handle display (prevents duplicates)
 * @param {Array} tokens - Array of FCM tokens
 * @param {Object} notification - Notification object with title and body
 * @param {Object} data - Additional data to send
 * @return {Promise<Object>}
 */
async function sendNotification(tokens, notification, data) {
    if (!tokens.length) {
        console.log("No tokens to send to");
        return { successCount: 0, failureCount: 0 };
    }

    // Use data-only message - the service worker will handle displaying the notification
    // This prevents duplicate notifications from both FCM and our service worker
    const message = {
        data: {
            title: notification.title,
            body: notification.body,
            eventId: data.eventId || '',
            type: data.type || '',
            click_action: "FLUTTER_NOTIFICATION_CLICK",
        },
        tokens: tokens,
        // Only include webpush for web-specific settings, but NOT notification payload
        webpush: {
            fcmOptions: {
                link: data.eventId ? "/event/" + data.eventId : "/",
            },
        },
    };

    try {
        const response = await messaging.sendEachForMulticast(message);
        console.log("Sent " + response.successCount + " notifications");

        if (response.failureCount > 0) {
            console.log("Failed: " + response.failureCount + " notifications");
            // Log individual failures for debugging
            response.responses.forEach((resp, idx) => {
                if (!resp.success) {
                    console.error("Failed to send to token " + idx + ":", resp.error);
                }
            });
        }
        
        return { successCount: response.successCount, failureCount: response.failureCount };
    } catch (error) {
        console.error("Error sending notifications:", error);
        return { successCount: 0, failureCount: tokens.length };
    }
}

// 1. Notify when new event is created
exports.onEventCreated = onDocumentCreated("events/{eventId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }

    const eventData = snapshot.data();
    const eventId = event.params.eventId;

    console.log("New event created: " + eventId);

    const usersSnapshot = await db.collection("users")
        .where("notificationsEnabled", "==", true)
        .get();

    const tokens = [];
    usersSnapshot.forEach(function(doc) {
        const userData = doc.data();
        if (userData.fcmTokens) {
            tokens.push(...userData.fcmTokens);
        }
    });

    if (tokens.length === 0) return;

    const msg = NOTIFICATION_MESSAGES.newEvent;
    const title = eventData.title || "New golf round";

    await sendNotification(
        [...new Set(tokens)],
        {
            title: msg.title,
            body: msg.bodyTemplate.replace("{eventTitle}", title),
        },
        {eventId: eventId, type: "new_event"},
    );
});

// 2. Notify when event is booked OR when someone joins OR notify admins on RSVP
exports.onEventUpdated = onDocumentUpdated("events/{eventId}", async (event) => {
    const beforeData = event.data.before.data();
    const afterData = event.data.after.data();
    const eventId = event.params.eventId;

    // Check if event was just marked as booked
    if (!beforeData.booked && afterData.booked) {
        console.log("Event " + eventId + " was booked!");

        const responses = afterData.responses || {};
        const attendingUserIds = Object.entries(responses)
            .filter(function(entry) {
                return entry[1] === "available";
            })
            .map(function(entry) {
                return entry[0];
            });

        if (attendingUserIds.length > 0) {
            const tokens = await getTokensForUsers(attendingUserIds);
            const msg = NOTIFICATION_MESSAGES.eventBooked;
            const title = afterData.title || "Golf round";

            await sendNotification(
                tokens,
                {
                    title: msg.title,
                    body: msg.bodyTemplate.replace("{eventTitle}", title),
                },
                {eventId: eventId, type: "event_booked"},
            );
        }
        return;
    }

    // Get responses for comparison
    const beforeResponses = beforeData.responses || {};
    const afterResponses = afterData.responses || {};

    // Notify admins of any RSVP change
    const rsvpChanges = Object.entries(afterResponses).filter(([uid, newStatus]) => {
        return beforeResponses[uid] !== newStatus;
    });

    for (const [playerId, newStatus] of rsvpChanges) {
        if (!newStatus) continue;

        const playerDoc = await db.collection("users").doc(playerId).get();
        let playerName = "Someone";
        if (playerDoc.exists) {
            const pData = playerDoc.data();
            if (pData.username) {
                playerName = pData.username;
            } else if (pData.email) {
                playerName = pData.email.split("@")[0];
            }
        }

        const adminTokens = await getAdminTokens();
        if (adminTokens.length === 0) continue;

        const msg = NOTIFICATION_MESSAGES.adminRsvp;
        const eventTitle = afterData.title || "the round";
        const statusText = newStatus === "available" ? "available ✅" : 
                           newStatus === "unavailable" ? "unavailable ❌" : newStatus;

        await sendNotification(
            adminTokens,
            {
                title: msg.title,
                body: msg.bodyTemplate
                    .replace("{playerName}", playerName)
                    .replace("{status}", statusText)
                    .replace("{eventTitle}", eventTitle),
            },
            { eventId: eventId, type: "admin_rsvp" }
        );
    }

    // Check if someone new joined (marked as available)
    const newAvailable = Object.entries(afterResponses)
        .filter(function(entry) {
            const uid = entry[0];
            const status = entry[1];
            return status === "available" && beforeResponses[uid] !== "available";
        })
        .map(function(entry) {
            return entry[0];
        });

    if (newAvailable.length === 0) return;

    for (const newPlayerId of newAvailable) {
        const playerDoc = await db.collection("users").doc(newPlayerId).get();
        let playerName = "Someone";
        if (playerDoc.exists) {
            const pData = playerDoc.data();
            if (pData.username) {
                playerName = pData.username;
            } else if (pData.email) {
                playerName = pData.email.split("@")[0];
            }
        }

        console.log(playerName + " joined event " + eventId);

        const otherAttendees = Object.entries(afterResponses)
            .filter(function(entry) {
                return entry[1] === "available" && entry[0] !== newPlayerId;
            })
            .map(function(entry) {
                return entry[0];
            });

        if (otherAttendees.length === 0) continue;

        const tokens = await getTokensForUsers(otherAttendees);
        const msg = NOTIFICATION_MESSAGES.playerJoined;
        const eventTitle = afterData.title || "the round";

        await sendNotification(
            tokens,
            {
                title: msg.title,
                body: msg.bodyTemplate
                    .replace("{playerName}", playerName)
                    .replace("{eventTitle}", eventTitle),
            },
            {eventId: eventId, type: "player_joined"},
        );
    }
});

// 3. Daily RSVP reminder (runs at 9am Sydney time)
exports.sendRsvpReminders = onSchedule({
    schedule: "every day 09:00",
    timeZone: "Australia/Sydney",
}, async () => {
    console.log("Running daily RSVP reminder check");

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const eventsSnapshot = await db.collection("events")
        .where("booked", "==", false)
        .where("rsvpDeadline", ">=", now)
        .where("rsvpDeadline", "<=", tomorrow)
        .get();

    for (const eventDoc of eventsSnapshot.docs) {
        const eventData = eventDoc.data();
        const eventId = eventDoc.id;

        const allUsersSnapshot = await db.collection("users")
            .where("notificationsEnabled", "==", true)
            .get();

        const responses = eventData.responses || {};
        const nonResponders = [];

        allUsersSnapshot.forEach(function(userDoc) {
            if (!responses[userDoc.id]) {
                const userData = userDoc.data();
                if (userData.fcmTokens) {
                    nonResponders.push(...userData.fcmTokens);
                }
            }
        });

        if (nonResponders.length === 0) continue;

        const msg = NOTIFICATION_MESSAGES.rsvpReminder;
        const title = eventData.title || "the golf round";

        await sendNotification(
            [...new Set(nonResponders)],
            {
                title: msg.title,
                body: msg.bodyTemplate.replace("{eventTitle}", title),
            },
            {eventId: eventId, type: "rsvp_reminder"},
        );
    }
});

// 4. Manual RSVP reminder trigger (callable by admins)
exports.triggerRsvpReminder = onCall(async (request) => {
    // Optional: Check if user is authenticated
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Must be logged in to send reminders');
    }

    const eventId = request.data.eventId;
    
    if (!eventId) {
        throw new HttpsError('invalid-argument', 'Event ID is required');
    }

    console.log("Manual RSVP reminder triggered for event: " + eventId);

    const eventDoc = await db.collection("events").doc(eventId).get();
    
    if (!eventDoc.exists) {
        throw new HttpsError('not-found', 'Event not found');
    }

    const eventData = eventDoc.data();
    
    // Don't send reminders for booked events
    if (eventData.booked) {
        throw new HttpsError('failed-precondition', 'Cannot send reminders for booked events');
    }

    const responses = eventData.responses || {};

    // Get all users who haven't responded
    const allUsersSnapshot = await db.collection("users")
        .where("notificationsEnabled", "==", true)
        .get();

    const nonResponderTokens = [];
    const nonResponderCount = { total: 0, withTokens: 0 };

    allUsersSnapshot.forEach((userDoc) => {
        // User hasn't responded (no entry in responses)
        if (!responses[userDoc.id]) {
            nonResponderCount.total++;
            const userData = userDoc.data();
            if (userData.fcmTokens && userData.fcmTokens.length > 0) {
                nonResponderTokens.push(...userData.fcmTokens);
                nonResponderCount.withTokens++;
            }
        }
    });

    if (nonResponderTokens.length === 0) {
        return { 
            success: true, 
            message: "No users to notify (everyone has responded or notifications disabled)",
            usersNotified: 0
        };
    }

    const uniqueTokens = [...new Set(nonResponderTokens)];
    const msg = NOTIFICATION_MESSAGES.rsvpReminder;
    const title = eventData.title || "the golf round";

    const result = await sendNotification(
        uniqueTokens,
        {
            title: msg.title,
            body: msg.bodyTemplate.replace("{eventTitle}", title),
        },
        { eventId: eventId, type: "rsvp_reminder_manual" }
    );

    console.log(`Sent ${result.successCount} reminders for event ${eventId}`);

    return { 
        success: true, 
        message: `Sent reminders to ${result.successCount} user(s)`,
        usersNotified: result.successCount,
        usersFailed: result.failureCount
    };
});

// 5. Automatically delete past events (runs daily at midnight Sydney time)
exports.cleanupPastEvents = onSchedule({
    schedule: "every day 00:00",
    timeZone: "Australia/Sydney",
}, async () => {
    console.log("Running past events cleanup");

    // Delete events older than 7 days - change this number to keep events longer/shorter
    const DAYS_TO_KEEP = 1;
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - DAYS_TO_KEEP);
    cutoffDate.setHours(0, 0, 0, 0);

    try {
        const pastEventsSnapshot = await db.collection("events")
            .where("date", "<", cutoffDate)
            .get();

        if (pastEventsSnapshot.empty) {
            console.log("No past events to delete");
            return;
        }

        const batch = db.batch();
        let deleteCount = 0;

        pastEventsSnapshot.forEach((doc) => {
            console.log(`Deleting event: ${doc.id} - ${doc.data().title}`);
            batch.delete(doc.ref);
            deleteCount++;
        });

        await batch.commit();
        console.log(`Successfully deleted ${deleteCount} past events`);

    } catch (error) {
        console.error("Error cleaning up past events:", error);
        throw error;
    }
});
exports.generateWeekendPoll = onSchedule("0 8 * * 1", async (event) => {
    console.log("Running weekly weekend poll generation...");

    try {
        // Load settings
        const settingsDoc = await db.collection("settings").doc("general").get();
        const settings = settingsDoc.exists ? settingsDoc.data() : {};
        
        // Check if polls are enabled
        if (settings.pollSettings?.weekendPollEnabled === false) {
            console.log("Weekend polls are disabled");
            return;
        }

        // Calculate the target weekend (12 days from now = next Sat/Sun after this coming weekend)
        const now = new Date();
        const targetDate = new Date(now);
        targetDate.setDate(targetDate.getDate() + 12);
        
        // Find the Saturday of that weekend
        const dayOfWeek = targetDate.getDay();
        const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
        const saturday = new Date(targetDate);
        saturday.setDate(saturday.getDate() + daysUntilSaturday);
        saturday.setHours(0, 0, 0, 0);

        // Check if poll already exists for this weekend
        const pollId = `poll_weekend_${saturday.toISOString().split("T")[0]}`;
        const existingPoll = await db.collection("polls").doc(pollId).get();
        
        if (existingPoll.exists) {
            console.log(`Poll already exists for ${saturday.toISOString().split("T")[0]}`);
            return;
        }

        // Calculate deadline (Friday before the weekend at midnight)
        const deadline = new Date(saturday);
        deadline.setDate(deadline.getDate() - 1); // Friday
        deadline.setHours(23, 59, 59, 999);

        // Create the poll
        await db.collection("polls").doc(pollId).set({
            type: "weekend",
            title: `Weekend of ${saturday.toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`,
            weekendOf: saturday,
            deadline: deadline,
            status: "open",
            votes: {},
            createdAt: new Date(),
        });

        console.log(`Created poll ${pollId} for weekend of ${saturday.toISOString().split("T")[0]}`);

        // Send notification to all users
        const usersSnapshot = await db.collection("users")
            .where("notificationsEnabled", "==", true)
            .get();

        const tokens = [];
        usersSnapshot.forEach((userDoc) => {
            const userData = userDoc.data();
            if (userData.fcmTokens) {
                tokens.push(...userData.fcmTokens);
            }
        });

        if (tokens.length > 0) {
            await sendNotification(
                [...new Set(tokens)],
                {
                    title: "🗳️ Weekend Poll is Open!",
                    body: `Vote for the weekend of ${saturday.toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`,
                },
                { type: "poll_open", pollId: pollId }
            );
        }

    } catch (error) {
        console.error("Error generating weekend poll:", error);
    }
});

/**
 * Runs daily at midnight to close expired polls
 */
exports.closeExpiredPolls = onSchedule("0 0 * * *", async (event) => {
    console.log("Checking for expired polls...");

    try {
        const now = new Date();
        const pollsSnapshot = await db.collection("polls")
            .where("status", "==", "open")
            .get();

        let closedCount = 0;

        for (const pollDoc of pollsSnapshot.docs) {
            const poll = pollDoc.data();
            const deadline = poll.deadline?.toDate ? poll.deadline.toDate() : new Date(poll.deadline);
            
            if (deadline < now) {
                await pollDoc.ref.update({ status: "closed" });
                closedCount++;
                console.log(`Closed poll ${pollDoc.id}`);

                // Notify admins that poll is ready for review
                const adminTokens = await getAdminTokens();
                if (adminTokens.length > 0) {
                    await sendNotification(
                        adminTokens,
                        {
                            title: "📊 Poll Closed - Ready to Review",
                            body: `${poll.title} voting has ended. Tap to create the event.`,
                        },
                        { type: "poll_closed", pollId: pollDoc.id }
                    );
                }
            }
        }

        console.log(`Closed ${closedCount} polls`);
    } catch (error) {
        console.error("Error closing expired polls:", error);
    }
});

/**
 * Clean up old weekday proposals (past dates)
 */
exports.cleanupWeekdayProposals = onSchedule("0 1 * * *", async (event) => {
    console.log("Cleaning up old weekday proposals...");

    try {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const proposalsSnapshot = await db.collection("weekdayProposals")
            .where("status", "==", "open")
            .get();

        let deletedCount = 0;

        for (const proposalDoc of proposalsSnapshot.docs) {
            const proposal = proposalDoc.data();
            const proposalDate = proposal.date?.toDate ? proposal.date.toDate() : new Date(proposal.date);
            
            // Delete proposals more than 1 day old
            const oneDayAgo = new Date(now);
            oneDayAgo.setDate(oneDayAgo.getDate() - 1);
            
            if (proposalDate < oneDayAgo) {
                await proposalDoc.ref.delete();
                deletedCount++;
                console.log(`Deleted old proposal ${proposalDoc.id}`);
            }
        }

        console.log(`Cleaned up ${deletedCount} old proposals`);
    } catch (error) {
        console.error("Error cleaning up proposals:", error);
    }
});

/**
 * Send poll reminder (runs Friday morning for weekend polls)
 */
exports.sendPollReminder = onSchedule("0 9 * * 5", async (event) => {
    console.log("Sending poll reminders...");

    try {
        const now = new Date();
        
        // Find open polls closing today
        const pollsSnapshot = await db.collection("polls")
            .where("status", "==", "open")
            .get();

        for (const pollDoc of pollsSnapshot.docs) {
            const poll = pollDoc.data();
            const deadline = poll.deadline?.toDate ? poll.deadline.toDate() : new Date(poll.deadline);
            
            // Check if deadline is today
            if (deadline.toDateString() === now.toDateString()) {
                const votes = poll.votes || {};
                const voterIds = Object.keys(votes);

                // Get users who haven't voted
                const allUsersSnapshot = await db.collection("users")
                    .where("notificationsEnabled", "==", true)
                    .get();

                const nonVoterTokens = [];
                allUsersSnapshot.forEach((userDoc) => {
                    if (!voterIds.includes(userDoc.id)) {
                        const userData = userDoc.data();
                        if (userData.fcmTokens) {
                            nonVoterTokens.push(...userData.fcmTokens);
                        }
                    }
                });

                if (nonVoterTokens.length > 0) {
                    await sendNotification(
                        [...new Set(nonVoterTokens)],
                        {
                            title: "⏰ Last Chance to Vote!",
                            body: `${poll.title} poll closes tonight. Don't miss out!`,
                        },
                        { type: "poll_reminder", pollId: pollDoc.id }
                    );
                    console.log(`Sent reminder for poll ${pollDoc.id}`);
                }
            }
        }
    } catch (error) {
        console.error("Error sending poll reminders:", error);
    }
});

/**
 * Manual trigger to create a weekend poll (callable by admins)
 */
exports.createWeekendPoll = onCall(async (request) => {
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Must be logged in');
    }

    const { weekendDate } = request.data;
    
    if (!weekendDate) {
        throw new HttpsError('invalid-argument', 'Weekend date is required');
    }

    try {
        const saturday = new Date(weekendDate);
        saturday.setHours(0, 0, 0, 0);

        // Check if poll already exists
        const pollId = `poll_weekend_${saturday.toISOString().split("T")[0]}`;
        const existingPoll = await db.collection("polls").doc(pollId).get();
        
        if (existingPoll.exists) {
            throw new HttpsError('already-exists', 'Poll already exists for this weekend');
        }

        // Calculate deadline (Friday before the weekend at midnight)
        const deadline = new Date(saturday);
        deadline.setDate(deadline.getDate() - 1);
        deadline.setHours(23, 59, 59, 999);

        await db.collection("polls").doc(pollId).set({
            type: "weekend",
            title: `Weekend of ${saturday.toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`,
            weekendOf: saturday,
            deadline: deadline,
            status: "open",
            votes: {},
            createdAt: new Date(),
            createdBy: request.auth.uid,
        });

        return { success: true, pollId };
    } catch (error) {
        console.error("Error creating poll:", error);
        throw new HttpsError('internal', error.message);
    }
});
