import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";
import CountdownTimer from "./CountdownTimer";
import CourseSelector from "./CourseSelector";

// Compact option button
function OptionButton({ label, selected, onClick, icon, disabled, small }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        flex: 1,
        padding: small ? "8px 4px" : "10px 6px",
        borderRadius: 8,
        border: `2px solid ${selected ? "var(--color-primary)" : "var(--color-border)"}`,
        background: selected ? "var(--color-primary-soft)" : "var(--color-surface)",
        color: selected ? "var(--color-primary)" : "var(--color-text)",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        opacity: disabled ? 0.6 : 1,
        fontSize: small ? 10 : 11,
      }}
    >
      {icon && <span style={{ fontSize: small ? 14 : 16 }}>{icon}</span>}
      <span style={{ fontWeight: 500 }}>{label}</span>
    </button>
  );
}

export default function WeekendPoll({ poll, onVoteSubmit, allUsers = [] }) {
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
  const [expanded, setExpanded] = useState(false);
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [users, setUsers] = useState(allUsers);

  // Load user's existing vote, favourite courses, and users
  useEffect(() => {
    if (poll?.votes && user?.uid) {
      const existingVote = poll.votes[user.uid];
      if (existingVote) {
        setVotes(existingVote);
        setHasVoted(true);
      }
    }
    
    async function loadData() {
      try {
        // Load favourite courses
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
        }
        
        // Load users if not provided
        if (allUsers.length === 0) {
          const usersSnap = await getDocs(collection(db, "users"));
          setUsers(usersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        }
      } catch (err) {
        console.error("Error loading data:", err);
      }
    }
    loadData();
  }, [poll, user, allUsers]);

  const isPollClosed = poll?.deadline?.toDate() < new Date();
  const voterIds = Object.keys(poll?.votes || {});
  const totalVoters = voterIds.length;

  // Get voter names
  const getVoterName = (uid) => {
    const u = users.find(u => u.id === uid);
    return u?.username || u?.email?.split("@")[0] || "User";
  };

  // Calculate tallies for preferences summary
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

  // Get top course
  const topCourse = Object.entries(tallies.course)
    .sort((a, b) => b[1] - a[1])[0];

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
      setExpanded(false);
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
    return `${satDate.toLocaleDateString("en-AU", { day: "numeric" })}-${sunDate.toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`;
  };

  // Get individual voter's preferences
  const getVoterPrefs = (uid) => {
    const vote = poll?.votes?.[uid];
    if (!vote) return null;
    return vote;
  };

  return (
    <div 
      style={{ 
        padding: expanded ? 18 : 16,
        borderRadius: 16,
        background: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
        border: "1px solid #fde047",
        boxShadow: "0 2px 8px rgba(250, 204, 21, 0.15)",
        cursor: expanded ? "default" : "pointer",
        transition: "all 0.2s ease",
      }}
      onClick={() => !expanded && setExpanded(true)}
    >
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "flex-start",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            flexShrink: 0,
          }}>
            🗳️
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, color: "#854d0e", marginBottom: 4 }}>
              Who's in for {formatWeekendDate()}?
            </div>
            {expanded && (
              <div style={{ fontSize: 13, color: "#a16207" }}>
                Pick your day, time & course
              </div>
            )}
          </div>
        </div>
        
        {expanded && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "none",
              background: "white",
              cursor: "pointer",
              fontSize: 13,
              color: "#854d0e",
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            ✕ Close
          </button>
        )}
      </div>

      {/* Collapsed: countdown + avatars + vote button */}
      {!expanded && (
        <div style={{ marginTop: 14 }}>
          {/* Countdown timer */}
          <div style={{ marginBottom: 14 }}>
            <CountdownTimer deadline={poll?.deadline?.toDate()} />
          </div>
          
          {/* Avatars and vote button row */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            gap: 12,
          }}>
            {/* Left side: avatars or prompt */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {totalVoters > 0 ? (
                <>
                  {voterIds.slice(0, 4).map((uid, idx) => {
                    const name = getVoterName(uid);
                    return (
                      <div
                        key={uid}
                        title={name}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          ...getAvatarStyle(name, 32),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 600,
                          border: "2px solid #fef9c3",
                          marginLeft: idx > 0 ? -10 : 0,
                        }}
                      >
                        {getInitials(name)}
                      </div>
                    );
                  })}
                  <span style={{ 
                    fontSize: 13, 
                    color: "#a16207",
                    marginLeft: 4,
                    fontWeight: 500,
                  }}>
                    {totalVoters} voted
                  </span>
                </>
              ) : (
                <span style={{ fontSize: 13, color: "#a16207" }}>
                  Be the first to vote!
                </span>
              )}
            </div>

            {/* Right side: Vote button */}
            <button
              style={{
                padding: "10px 20px",
                borderRadius: 10,
                border: "none",
                background: "#854d0e",
                color: "white",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 2px 8px rgba(133, 77, 14, 0.3)",
              }}
            >
              {hasVoted ? "Update vote" : "Vote now"}
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* Expanded voting form */}
      {expanded && (
        <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 16 }}>
          {/* Responders list with individual preferences */}
          {totalVoters > 0 && (
            <div style={{ 
              marginBottom: 16, 
              padding: 12, 
              background: "white", 
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 11, color: "#a16207", marginBottom: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Responded ({totalVoters})
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {voterIds.map((uid) => {
                  const name = getVoterName(uid);
                  const isYou = uid === user?.uid;
                  const voterPrefs = getVoterPrefs(uid);
                  
                  return (
                    <div
                      key={uid}
                      style={{
                        padding: "8px 12px",
                        background: isYou ? "#fef08a" : "#fefce8",
                        borderRadius: 10,
                        border: isYou ? "1px solid #facc15" : "1px solid #fde68a",
                      }}
                    >
                      {/* Name row */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: voterPrefs ? 6 : 0,
                      }}>
                        <div style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          ...getAvatarStyle(name, 24),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 10,
                          fontWeight: 600,
                        }}>
                          {getInitials(name)}
                        </div>
                        <span style={{ color: "#854d0e", fontWeight: 600, fontSize: 13 }}>
                          {isYou ? "You" : name}
                        </span>
                      </div>
                      
                      {/* Preferences row */}
                      {voterPrefs && (
                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                          marginLeft: 32,
                          fontSize: 11,
                          color: "#a16207",
                        }}>
                          {voterPrefs.day && (
                            <span style={{ padding: "2px 6px", background: "white", borderRadius: 4 }}>
                              📅 {voterPrefs.day === "saturday" ? "Sat" : voterPrefs.day === "sunday" ? "Sun" : "Either"}
                            </span>
                          )}
                          {voterPrefs.time && (
                            <span style={{ padding: "2px 6px", background: "white", borderRadius: 4 }}>
                              🕐 {voterPrefs.time === "am" ? "AM" : voterPrefs.time === "pm" ? "PM" : "Either"}
                            </span>
                          )}
                          {voterPrefs.transport && (
                            <span style={{ padding: "2px 6px", background: "white", borderRadius: 4 }}>
                              {voterPrefs.transport === "cart" ? "🛺 Cart" : voterPrefs.transport === "walk" ? "🚶 Walk" : "Either"}
                            </span>
                          )}
                          {voterPrefs.format && (
                            <span style={{ padding: "2px 6px", background: "white", borderRadius: 4 }}>
                              {voterPrefs.format === "scramble" ? "👥 Scramble" : voterPrefs.format === "stroke" ? "🏌️ Stroke" : "Either"}
                            </span>
                          )}
                          {voterPrefs.course && (
                            <span style={{ padding: "2px 6px", background: "white", borderRadius: 4 }}>
                              ⛳ {voterPrefs.course}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Voting options - 2 column grid */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: 12, 
            marginBottom: 12,
            background: "white",
            padding: 14,
            borderRadius: 12,
          }}>
            {/* Day */}
            <div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 6 }}>DAY</div>
              <div style={{ display: "flex", gap: 4 }}>
                <OptionButton label="Sat" icon="📅" selected={votes.day === "saturday"} onClick={() => handleVoteChange("day", "saturday")} disabled={isPollClosed} small />
                <OptionButton label="Sun" icon="📅" selected={votes.day === "sunday"} onClick={() => handleVoteChange("day", "sunday")} disabled={isPollClosed} small />
                <OptionButton label="Either" selected={votes.day === "either"} onClick={() => handleVoteChange("day", "either")} disabled={isPollClosed} small />
              </div>
            </div>

            {/* Time */}
            <div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 6 }}>TIME</div>
              <div style={{ display: "flex", gap: 4 }}>
                <OptionButton label="AM" icon="🌅" selected={votes.time === "am"} onClick={() => handleVoteChange("time", "am")} disabled={isPollClosed} small />
                <OptionButton label="PM" icon="🌇" selected={votes.time === "pm"} onClick={() => handleVoteChange("time", "pm")} disabled={isPollClosed} small />
                <OptionButton label="Either" selected={votes.time === "either"} onClick={() => handleVoteChange("time", "either")} disabled={isPollClosed} small />
              </div>
            </div>

            {/* Transport */}
            <div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 6 }}>TRANSPORT</div>
              <div style={{ display: "flex", gap: 4 }}>
                <OptionButton label="Cart" icon="🛺" selected={votes.transport === "cart"} onClick={() => handleVoteChange("transport", "cart")} disabled={isPollClosed} small />
                <OptionButton label="Walk" icon="🚶" selected={votes.transport === "walk"} onClick={() => handleVoteChange("transport", "walk")} disabled={isPollClosed} small />
                <OptionButton label="Either" selected={votes.transport === "either"} onClick={() => handleVoteChange("transport", "either")} disabled={isPollClosed} small />
              </div>
            </div>

            {/* Format */}
            <div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 6 }}>FORMAT</div>
              <div style={{ display: "flex", gap: 4 }}>
                <OptionButton label="Scramble" icon="👥" selected={votes.format === "scramble"} onClick={() => handleVoteChange("format", "scramble")} disabled={isPollClosed} small />
                <OptionButton label="Stroke" icon="🏌️" selected={votes.format === "stroke"} onClick={() => handleVoteChange("format", "stroke")} disabled={isPollClosed} small />
                <OptionButton label="Either" selected={votes.format === "either"} onClick={() => handleVoteChange("format", "either")} disabled={isPollClosed} small />
              </div>
            </div>
          </div>

          {/* Course - full width */}
          <div style={{ 
            marginBottom: 14,
            background: "white",
            padding: 14,
            borderRadius: 12,
          }}>
            <div style={{ fontSize: 11, color: "#a16207", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Course</div>
            <CourseSelector
              value={votes.course}
              onChange={(course) => setVotes((prev) => ({ ...prev, course }))}
              favouriteCourses={favouriteCourses}
              onRandom={handleRandomCourse}
              disabled={isPollClosed}
            />
          </div>

          {/* Submit button */}
          {!isPollClosed && (
            <button
              onClick={handleSubmitVote}
              disabled={saving}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: 12,
                border: "none",
                background: "#854d0e",
                color: "white",
                fontSize: 15,
                fontWeight: 600,
                cursor: saving ? "default" : "pointer",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? "Submitting..." : hasVoted ? "Update Vote" : "Submit Vote"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}