// Add these to your existing functions/index.js

// ============================================
// WEEKEND POLL AUTO-GENERATION
// ============================================

/**
 * Runs every Monday at 8am to generate weekend polls
 * Poll is created 12 days before the weekend (Monday for the following Sat/Sun)
 * Poll closes on Friday at midnight (8 days before weekend)
 */
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
