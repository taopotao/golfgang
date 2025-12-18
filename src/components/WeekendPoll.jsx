import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import CountdownTimer from "./CountdownTimer";
import CourseSelector from "./CourseSelector";

// Option button component for single-select options
function OptionButton({ label, selected, onClick, icon, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        flex: 1,
        minWidth: 80,
        padding: "12px 8px",
        borderRadius: 10,
        border: `2px solid ${selected ? "var(--color-primary)" : "var(--color-border)"}`,
        background: selected ? "var(--color-primary-soft)" : "var(--color-surface)",
        color: selected ? "var(--color-primary)" : "var(--color-text)",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {icon && <span style={{ fontSize: 20 }}>{icon}</span>}
      <span style={{ fontSize: 12, fontWeight: 500 }}>{label}</span>
    </button>
  );
}

// Results bar for showing vote tallies
function ResultsBar({ label, votes, total, icon }) {
  const percentage = total > 0 ? (votes / total) * 100 : 0;
  
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
          {icon} {label}
        </span>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{votes}</span>
      </div>
      <div style={{ 
        height: 6, 
        background: "var(--color-bg-tertiary)", 
        borderRadius: 3,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${percentage}%`,
          background: "var(--color-primary)",
          borderRadius: 3,
          transition: "width 0.3s ease",
        }} />
      </div>
    </div>
  );
}

export default function WeekendPoll({ poll, onVoteSubmit }) {
  const { user } = useAuth();
  const [votes, setVotes] = useState({
    day: null,
    time: null,
    transport: null,
    format: null,
    course: null,
  });
  const [saving, setSaving] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [favouriteCourses, setFavouriteCourses] = useState([]);

  // Load user's existing vote and favourite courses
  useEffect(() => {
    if (poll?.votes && user?.uid) {
      const existingVote = poll.votes[user.uid];
      if (existingVote) {
        setVotes(existingVote);
        setHasVoted(true);
      }
    }
    
    // Load favourite courses from settings
    async function loadCourses() {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
        }
      } catch (err) {
        console.error("Error loading favourite courses:", err);
      }
    }
    loadCourses();
  }, [poll, user]);

  const isPollClosed = poll?.deadline?.toDate() < new Date();
  const totalVoters = Object.keys(poll?.votes || {}).length;

  // Calculate vote tallies
  const tallies = {
    day: { saturday: 0, sunday: 0, either: 0 },
    time: { am: 0, pm: 0, either: 0 },
    transport: { cart: 0, walk: 0, either: 0 },
    format: { scramble: 0, stroke: 0, either: 0 },
    course: {},
  };

  Object.values(poll?.votes || {}).forEach((vote) => {
    if (vote.day) tallies.day[vote.day]++;
    if (vote.time) tallies.time[vote.time]++;
    if (vote.transport) tallies.transport[vote.transport]++;
    if (vote.format) tallies.format[vote.format]++;
    if (vote.course) {
      tallies.course[vote.course] = (tallies.course[vote.course] || 0) + 1;
    }
  });

  const handleVoteChange = (category, value) => {
    if (isPollClosed) return;
    hapticFeedback("light");
    setVotes((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const handleRandomCourse = () => {
    if (favouriteCourses.length === 0) {
      showToast("No favourite courses configured");
      return;
    }
    hapticFeedback("medium");
    const randomIndex = Math.floor(Math.random() * favouriteCourses.length);
    setVotes((prev) => ({
      ...prev,
      course: favouriteCourses[randomIndex].name,
    }));
  };

  const handleSubmitVote = async () => {
    if (!user) {
      showToast("Please log in to vote");
      return;
    }

    // Validate at least one selection
    const hasSelection = Object.values(votes).some((v) => v !== null);
    if (!hasSelection) {
      showToast("Please make at least one selection");
      return;
    }

    setSaving(true);
    hapticFeedback("medium");

    try {
      const pollRef = doc(db, "polls", poll.id);
      await updateDoc(pollRef, {
        [`votes.${user.uid}`]: votes,
      });

      setHasVoted(true);
      showToast("Vote submitted!");
      if (onVoteSubmit) onVoteSubmit();
    } catch (err) {
      console.error("Error submitting vote:", err);
      showToast("Failed to submit vote");
    } finally {
      setSaving(false);
    }
  };

  const formatWeekendDate = () => {
    if (!poll?.weekendOf) return "";
    const date = poll.weekendOf.toDate();
    const satDate = new Date(date);
    const sunDate = new Date(date);
    sunDate.setDate(sunDate.getDate() + 1);
    
    return `${satDate.toLocaleDateString("en-AU", { weekday: "short", day: "numeric" })} - ${sunDate.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}`;
  };

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 24 }}>🗳️</span>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              Weekend of {formatWeekendDate()}
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
              {totalVoters} {totalVoters === 1 ? "response" : "responses"}
            </p>
          </div>
        </div>
        
        {/* Countdown */}
        {!isPollClosed ? (
          <CountdownTimer deadline={poll?.deadline?.toDate()} />
        ) : (
          <div style={{
            padding: "8px 12px",
            background: "var(--color-bg-tertiary)",
            borderRadius: 8,
            fontSize: 13,
            color: "var(--color-text-secondary)",
          }}>
            Poll closed
          </div>
        )}
      </div>

      {/* Show results toggle for people who've voted */}
      {hasVoted && !isPollClosed && (
        <button
          onClick={() => setShowResults(!showResults)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: 16,
            background: "var(--color-bg-secondary)",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 13,
            color: "var(--color-text-secondary)",
          }}
        >
          {showResults ? "Hide results" : "Show current results"}
        </button>
      )}

      {/* Voting form or Results */}
      {(showResults || isPollClosed) ? (
        // Results view
        <div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>DAY</div>
            <ResultsBar label="Saturday" votes={tallies.day.saturday} total={totalVoters} icon="📅" />
            <ResultsBar label="Sunday" votes={tallies.day.sunday} total={totalVoters} icon="📅" />
            <ResultsBar label="Either" votes={tallies.day.either} total={totalVoters} icon="🤷" />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>TIME</div>
            <ResultsBar label="AM" votes={tallies.time.am} total={totalVoters} icon="🌅" />
            <ResultsBar label="PM" votes={tallies.time.pm} total={totalVoters} icon="🌇" />
            <ResultsBar label="Either" votes={tallies.time.either} total={totalVoters} icon="🤷" />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>TRANSPORT</div>
            <ResultsBar label="Cart" votes={tallies.transport.cart} total={totalVoters} icon="🛺" />
            <ResultsBar label="Walk" votes={tallies.transport.walk} total={totalVoters} icon="🚶" />
            <ResultsBar label="Either" votes={tallies.transport.either} total={totalVoters} icon="🤷" />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>FORMAT</div>
            <ResultsBar label="Scramble" votes={tallies.format.scramble} total={totalVoters} icon="👥" />
            <ResultsBar label="Stroke" votes={tallies.format.stroke} total={totalVoters} icon="🏌️" />
            <ResultsBar label="Either" votes={tallies.format.either} total={totalVoters} icon="🤷" />
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>COURSE</div>
            {Object.entries(tallies.course)
              .sort((a, b) => b[1] - a[1])
              .map(([course, count]) => (
                <ResultsBar key={course} label={course} votes={count} total={totalVoters} icon="⛳" />
              ))}
            {Object.keys(tallies.course).length === 0 && (
              <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>No course votes yet</p>
            )}
          </div>

          {!isPollClosed && (
            <button
              onClick={() => setShowResults(false)}
              className="btn btn-secondary"
              style={{ width: "100%", marginTop: 16 }}
            >
              Edit my vote
            </button>
          )}
        </div>
      ) : (
        // Voting form
        <div>
          {/* Day */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>DAY</div>
            <div style={{ display: "flex", gap: 8 }}>
              <OptionButton
                label="Saturday"
                icon="📅"
                selected={votes.day === "saturday"}
                onClick={() => handleVoteChange("day", "saturday")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Sunday"
                icon="📅"
                selected={votes.day === "sunday"}
                onClick={() => handleVoteChange("day", "sunday")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Either"
                icon="🤷"
                selected={votes.day === "either"}
                onClick={() => handleVoteChange("day", "either")}
                disabled={isPollClosed}
              />
            </div>
          </div>

          {/* Time */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>TIME</div>
            <div style={{ display: "flex", gap: 8 }}>
              <OptionButton
                label="AM"
                icon="🌅"
                selected={votes.time === "am"}
                onClick={() => handleVoteChange("time", "am")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="PM"
                icon="🌇"
                selected={votes.time === "pm"}
                onClick={() => handleVoteChange("time", "pm")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Either"
                icon="🤷"
                selected={votes.time === "either"}
                onClick={() => handleVoteChange("time", "either")}
                disabled={isPollClosed}
              />
            </div>
          </div>

          {/* Transport */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>TRANSPORT</div>
            <div style={{ display: "flex", gap: 8 }}>
              <OptionButton
                label="Cart"
                icon="🛺"
                selected={votes.transport === "cart"}
                onClick={() => handleVoteChange("transport", "cart")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Walk"
                icon="🚶"
                selected={votes.transport === "walk"}
                onClick={() => handleVoteChange("transport", "walk")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Either"
                icon="🤷"
                selected={votes.transport === "either"}
                onClick={() => handleVoteChange("transport", "either")}
                disabled={isPollClosed}
              />
            </div>
          </div>

          {/* Format */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>FORMAT</div>
            <div style={{ display: "flex", gap: 8 }}>
              <OptionButton
                label="Scramble"
                icon="👥"
                selected={votes.format === "scramble"}
                onClick={() => handleVoteChange("format", "scramble")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Stroke"
                icon="🏌️"
                selected={votes.format === "stroke"}
                onClick={() => handleVoteChange("format", "stroke")}
                disabled={isPollClosed}
              />
              <OptionButton
                label="Either"
                icon="🤷"
                selected={votes.format === "either"}
                onClick={() => handleVoteChange("format", "either")}
                disabled={isPollClosed}
              />
            </div>
          </div>

          {/* Course */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-text-secondary)" }}>COURSE</div>
            <CourseSelector
              value={votes.course}
              onChange={(course) => setVotes((prev) => ({ ...prev, course }))}
              favouriteCourses={favouriteCourses}
              onRandom={handleRandomCourse}
              disabled={isPollClosed}
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmitVote}
            disabled={saving || isPollClosed}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {saving ? "Submitting..." : hasVoted ? "Update Vote" : "Submit Vote"}
          </button>
        </div>
      )}
    </div>
  );
}
