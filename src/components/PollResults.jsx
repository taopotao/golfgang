import { useState } from "react";
import { doc, updateDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";

export default function PollResults({ poll, allUsers = [], onConverted }) {
  const { isAdmin } = useAuth();
  const [converting, setConverting] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (!isAdmin) return null;

  const votes = poll.votes || {};
  const totalVoters = Object.keys(votes).length;

  // Calculate tallies
  const tallies = {
    day: { saturday: 0, sunday: 0, either: 0 },
    time: { am: 0, pm: 0, either: 0 },
    transport: { cart: 0, walk: 0, either: 0 },
    format: { scramble: 0, stroke: 0, either: 0 },
    course: {},
  };

  Object.values(votes).forEach((vote) => {
    if (vote.day) tallies.day[vote.day]++;
    if (vote.time) tallies.time[vote.time]++;
    if (vote.transport) tallies.transport[vote.transport]++;
    if (vote.format) tallies.format[vote.format]++;
    if (vote.course) {
      tallies.course[vote.course] = (tallies.course[vote.course] || 0) + 1;
    }
  });

  // Determine winners (including "either" votes)
  const getWinner = (tally, options) => {
    let maxVotes = 0;
    let winner = null;
    
    options.forEach((opt) => {
      const directVotes = tally[opt] || 0;
      const eitherVotes = tally.either || 0;
      const totalForOption = directVotes + eitherVotes;
      
      if (totalForOption > maxVotes) {
        maxVotes = totalForOption;
        winner = opt;
      }
    });
    
    return { winner, votes: maxVotes };
  };

  const dayWinner = getWinner(tallies.day, ["saturday", "sunday"]);
  const timeWinner = getWinner(tallies.time, ["am", "pm"]);
  const transportWinner = getWinner(tallies.transport, ["cart", "walk"]);
  const formatWinner = getWinner(tallies.format, ["scramble", "stroke"]);
  
  // Course winner (most votes)
  const courseWinner = Object.entries(tallies.course)
    .sort((a, b) => b[1] - a[1])[0] || [null, 0];

  // Get voters who are available for the winning combo
  const availableVoters = Object.entries(votes)
    .filter(([uid, vote]) => {
      const dayMatch = vote.day === dayWinner.winner || vote.day === "either";
      const timeMatch = vote.time === timeWinner.winner || vote.time === "either";
      return dayMatch && timeMatch;
    })
    .map(([uid]) => uid);

  const formatWeekendDate = () => {
    if (!poll?.weekendOf) return "";
    const date = poll.weekendOf.toDate();
    return date.toLocaleDateString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const handleCreateEvent = async () => {
    if (!dayWinner.winner || !timeWinner.winner) {
      showToast("Not enough votes to determine day/time");
      return;
    }

    setConverting(true);
    hapticFeedback("medium");

    try {
      // Calculate the event date
      const weekendDate = poll.weekendOf.toDate();
      const eventDate = new Date(weekendDate);
      
      if (dayWinner.winner === "sunday") {
        eventDate.setDate(eventDate.getDate() + 1);
      }

      // Set time
      const teeTime = timeWinner.winner === "am" ? "07:00" : "13:00";

      // Build responses object from voters
      const responses = {};
      availableVoters.forEach((uid) => {
        responses[uid] = {
          status: "available",
          updatedAt: new Date().toISOString(),
        };
      });

      // Create the event
      const eventRef = await addDoc(collection(db, "events"), {
        title: `Weekend Golf - ${formatWeekendDate()}`,
        date: Timestamp.fromDate(eventDate),
        tee: teeTime,
        courseName: courseWinner[0] || "TBD",
        transport: transportWinner.winner,
        format: formatWinner.winner,
        booked: false,
        responses,
        createdAt: Timestamp.now(),
        createdFromPoll: poll.id,
        notes: `Created from weekend poll. ${transportWinner.winner === "cart" ? "Cart" : "Walking"}. ${formatWinner.winner === "scramble" ? "Scramble" : "Stroke play"}.`,
      });

      // Mark poll as converted
      await updateDoc(doc(db, "polls", poll.id), {
        status: "converted",
        convertedEventId: eventRef.id,
      });

      showToast("Event created!");
      if (onConverted) onConverted();
    } catch (err) {
      console.error("Error creating event:", err);
      showToast("Failed to create event");
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: 16 }}>
      {/* Header */}
      <div 
        onClick={() => setExpanded(!expanded)}
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          cursor: "pointer",
          marginBottom: expanded ? 16 : 0,
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>
            Weekend of {formatWeekendDate()}
          </h4>
          <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>
            {totalVoters} {totalVoters === 1 ? "vote" : "votes"} • Poll closed
          </p>
        </div>
        <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
          {expanded ? "▲" : "▼"}
        </span>
      </div>

      {expanded && (
        <>
          {/* Winning combo */}
          <div style={{
            padding: 12,
            background: "var(--color-success-soft)",
            borderRadius: 10,
            marginBottom: 16,
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-success)", marginBottom: 8 }}>
              WINNING COMBO
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ padding: "4px 10px", background: "white", borderRadius: 6, fontSize: 13 }}>
                📅 {dayWinner.winner === "saturday" ? "Saturday" : "Sunday"}
              </span>
              <span style={{ padding: "4px 10px", background: "white", borderRadius: 6, fontSize: 13 }}>
                🕐 {timeWinner.winner === "am" ? "AM" : "PM"}
              </span>
              <span style={{ padding: "4px 10px", background: "white", borderRadius: 6, fontSize: 13 }}>
                {transportWinner.winner === "cart" ? "🛺 Cart" : "🚶 Walk"}
              </span>
              <span style={{ padding: "4px 10px", background: "white", borderRadius: 6, fontSize: 13 }}>
                {formatWinner.winner === "scramble" ? "👥 Scramble" : "🏌️ Stroke"}
              </span>
              {courseWinner[0] && (
                <span style={{ padding: "4px 10px", background: "white", borderRadius: 6, fontSize: 13 }}>
                  ⛳ {courseWinner[0]}
                </span>
              )}
            </div>
          </div>

          {/* Available players */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8 }}>
              AVAILABLE ({availableVoters.length})
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {availableVoters.map((uid) => {
                const userData = allUsers.find((u) => u.id === uid);
                const name = userData?.username || userData?.email?.split("@")[0] || "User";
                return (
                  <div
                    key={uid}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      background: "var(--color-bg-secondary)",
                      borderRadius: 20,
                      fontSize: 12,
                    }}
                  >
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      ...getAvatarStyle(name),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 600,
                    }}>
                      {getInitials(name)}
                    </div>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vote breakdown */}
          <details style={{ marginBottom: 16 }}>
            <summary style={{ 
              cursor: "pointer", 
              fontSize: 13, 
              color: "var(--color-text-secondary)",
              marginBottom: 8,
            }}>
              View full breakdown
            </summary>
            <div style={{ 
              padding: 12, 
              background: "var(--color-bg-secondary)", 
              borderRadius: 8,
              fontSize: 13,
            }}>
              <div style={{ marginBottom: 8 }}>
                <strong>Day:</strong> Sat {tallies.day.saturday} • Sun {tallies.day.sunday} • Either {tallies.day.either}
              </div>
              <div style={{ marginBottom: 8 }}>
                <strong>Time:</strong> AM {tallies.time.am} • PM {tallies.time.pm} • Either {tallies.time.either}
              </div>
              <div style={{ marginBottom: 8 }}>
                <strong>Transport:</strong> Cart {tallies.transport.cart} • Walk {tallies.transport.walk} • Either {tallies.transport.either}
              </div>
              <div style={{ marginBottom: 8 }}>
                <strong>Format:</strong> Scramble {tallies.format.scramble} • Stroke {tallies.format.stroke} • Either {tallies.format.either}
              </div>
              <div>
                <strong>Courses:</strong>{" "}
                {Object.entries(tallies.course).map(([course, count]) => (
                  <span key={course}>{course} ({count}) </span>
                ))}
              </div>
            </div>
          </details>

          {/* Create event button */}
          <button
            onClick={handleCreateEvent}
            disabled={converting || availableVoters.length === 0}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {converting ? "Creating..." : `Create Event (${availableVoters.length} players)`}
          </button>
        </>
      )}
    </div>
  );
}
