/**
 * GolfGang Cloud Functions for Push Notifications
 * Using Firebase Functions v2 syntax
 */

const {onDocumentCreated, onDocumentUpdated} = require("firebase-functions/v2/firestore");
const {onSchedule} = require("firebase-functions/v2/scheduler");
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
 * Send notification to multiple tokens
 * @param {Array} tokens - Array of FCM tokens
 * @param {Object} notification - Notification object with title and body
 * @param {Object} data - Additional data to send
 * @return {Promise<void>}
 */
async function sendNotification(tokens, notification, data) {
    if (!tokens.length) {
        console.log("No tokens to send to");
        return;
    }

    const message = {
        notification: {
            title: notification.title,
            body: notification.body,
        },
        data: Object.assign({}, data, {
            click_action: "FLUTTER_NOTIFICATION_CLICK",
        }),
        tokens: tokens,
        webpush: {
            notification: {
                icon: "/logo192.png",
                badge: "/logo192.png",
                vibrate: [200, 100, 200],
                requireInteraction: true,
            },
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
        }
    } catch (error) {
        console.error("Error sending notifications:", error);
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

// 2. Notify when event is booked OR when someone joins
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

    // Check if someone new joined
    const beforeResponses = beforeData.responses || {};
    const afterResponses = afterData.responses || {};

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