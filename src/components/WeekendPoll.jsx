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

// Golf course illustration header
function GolfCourseHeader() {
  return (
    <div style={{
      height: 80,
      background: "linear-gradient(180deg, #87CEEB 0%, #98D8AA 50%, #4ade80 100%)",
      borderRadius: "16px 16px 0 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Sun */}
      <div style={{
        position: "absolute",
        top: 12,
        right: 20,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #fde047 0%, #facc15 100%)",
        boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
      }} />
      
      {/* Clouds */}
      <div style={{
        position: "absolute",
        top: 15,
        left: 25,
        fontSize: 20,
        opacity: 0.9,
      }}>☁️</div>
      <div style={{
        position: "absolute",
        top: 8,
        left: 80,
        fontSize: 14,
        opacity: 0.7,
      }}>☁️</div>
      
      {/* Trees */}
      <div style={{
        position: "absolute",
        bottom: 5,
        left: 15,
        fontSize: 28,
      }}>🌳</div>
      <div style={{
        position: "absolute",
        bottom: 8,
        left: 50,
        fontSize: 22,
      }}>🌲</div>
      <div style={{
        position: "absolute",
        bottom: 5,
        right: 60,
        fontSize: 26,
      }}>🌳</div>
      <div style={{
        position: "absolute",
        bottom: 8,
        right: 20,
        fontSize: 20,
      }}>🌲</div>
      
      {/* Flag */}
      <div style={{
        position: "absolute",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: 36,
      }}>⛳</div>
      
      {/* Golfer */}
      <div style={{
        position: "absolute",
        bottom: 8,
        left: "30%",
        fontSize: 24,
      }}>🏌️</div>
    </div>
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
      } else {
        setHasVoted(false);
        setVotes({
          day: null,
          time: null,
          transport: null,
          format: null,
          course: null,
        });
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

  // Get voter names
  const getVoterName = (uid) => {
    const u = users.find(u => u.id === uid);
    return u?.username || u?.email?.split("@")[0] || "User";
  };

  // Get individual voter's preferences
  const getVoterPrefs = (uid) => {
    const vote = poll?.votes?.[uid];
    if (!vote) return null;
    return vote;
  };

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
      showToast("Vote submitted! ⛳");
      if (onVoteSubmit) onVoteSubmit();
    } catch (err) {
      console.error("Error submitting vote:", err);
      showToast("Failed to submit vote");
    } finally {
      setSaving(false);
    }
  };

  // Remove vote handler
  const handleRemoveVote = async () => {
    if (!user) return;
    if (!confirm("Remove your vote from this poll?")) return;

    setSaving(true);
    hapticFeedback("medium");

    try {
      const pollRef = doc(db, "polls", poll.id);
      
      // Get current votes and remove user's vote
      const pollSnap = await getDoc(pollRef);
      const currentVotes = pollSnap.data()?.votes || {};
      delete currentVotes[user.uid];
      
      await updateDoc(pollRef, { votes: currentVotes });

      setHasVoted(false);
      setVotes({
        day: null,
        time: null,
        transport: null,
        format: null,
        course: null,
      });
      showToast("Vote removed");
      if (onVoteSubmit) onVoteSubmit();
    } catch (err) {
      console.error("Error removing vote:", err);
      showToast("Failed to remove vote");
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

  const formatFullWeekendDate = () => {
    if (!poll?.weekendOf) return "";
    const date = poll.weekendOf.toDate();
    const satDate = new Date(date);
    const sunDate = new Date(date);
    sunDate.setDate(sunDate.getDate() + 1);
    return `${satDate.toLocaleDateString("en-AU", { weekday: "short", day: "numeric" })} - ${sunDate.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}`;
  };

  return (
    <div 
      style={{ 
        borderRadius: 16,
        background: "white",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        cursor: expanded ? "default" : "pointer",
        transition: "all 0.2s ease",
      }}
      onClick={() => !expanded && setExpanded(true)}
    >
      {/* Golf Course Header Illustration */}
      <GolfCourseHeader />

      {/* Content */}
      <div style={{ padding: 18 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ 
            fontSize: 11, 
            fontWeight: 600, 
            color: "#16a34a", 
            textTransform: "uppercase", 
            letterSpacing: "1px",
            marginBottom: 4,
          }}>
            You're invited
          </div>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#1f2937", marginBottom: 4 }}>
            Weekend Golf
          </div>
          <div style={{ fontSize: 15, color: "#6b7280", fontWeight: 500 }}>
            {formatFullWeekendDate()}
          </div>
        </div>

        {/* Collapsed view */}
        {!expanded && (
          <>
            {/* Countdown */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <CountdownTimer deadline={poll?.deadline?.toDate()} />
            </div>

            {/* Avatars and vote button */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              paddingTop: 12,
              borderTop: "1px solid #f3f4f6",
            }}>
              {/* Left side: avatars */}
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
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            ...getAvatarStyle(name, 34),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 600,
                            border: "2px solid white",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            marginLeft: idx > 0 ? -10 : 0,
                          }}
                        >
                          {getInitials(name)}
                        </div>
                      );
                    })}
                    {totalVoters > 4 && (
                      <span style={{ 
                        fontSize: 13, 
                        color: "#6b7280",
                        marginLeft: 4,
                        fontWeight: 500,
                      }}>
                        +{totalVoters - 4}
                      </span>
                    )}
                    <span style={{ 
                      fontSize: 13, 
                      color: "#6b7280",
                      marginLeft: 4,
                    }}>
                      {hasVoted ? "including you" : "going"}
                    </span>
                  </>
                ) : (
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>
                    Be the first to join!
                  </span>
                )}
              </div>

              {/* Right side: Vote button */}
              <button
                style={{
                  padding: "12px 24px",
                  borderRadius: 12,
                  border: "none",
                  background: hasVoted 
                    ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                    : "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                }}
              >
                {hasVoted ? "✓ You're in" : "Count me in!"}
              </button>
            </div>

            {/* Expand hint */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 12,
              color: "#9ca3af",
              fontSize: 12,
            }}>
              <span>Tap to {hasVoted ? "update" : "vote"} ↓</span>
            </div>
          </>
        )}

        {/* Expanded voting form */}
        {expanded && (
          <div onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  background: "white",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                ✕ Close
              </button>
            </div>

            {/* Responders list with individual preferences */}
            {totalVoters > 0 && (
              <div style={{ 
                marginBottom: 16, 
                padding: 14, 
                background: "#f9fafb", 
                borderRadius: 12,
              }}>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Who's in ({totalVoters})
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
                          padding: "10px 12px",
                          background: isYou ? "#dcfce7" : "white",
                          borderRadius: 10,
                          border: isYou ? "1px solid #86efac" : "1px solid #e5e7eb",
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
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            ...getAvatarStyle(name, 26),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            fontWeight: 600,
                          }}>
                            {getInitials(name)}
                          </div>
                          <span style={{ color: "#1f2937", fontWeight: 600, fontSize: 13 }}>
                            {isYou ? "You" : name}
                          </span>
                          {isYou && (
                            <span style={{ 
                              marginLeft: "auto",
                              fontSize: 11,
                              color: "#16a34a",
                              fontWeight: 500,
                            }}>
                              ✓ Going
                            </span>
                          )}
                        </div>
                        
                        {/* Preferences row */}
                        {voterPrefs && (
                          <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginLeft: 34,
                            fontSize: 11,
                            color: "#6b7280",
                          }}>
                            {voterPrefs.day && (
                              <span style={{ padding: "2px 8px", background: "#f3f4f6", borderRadius: 6 }}>
                                📅 {voterPrefs.day === "saturday" ? "Sat" : voterPrefs.day === "sunday" ? "Sun" : "Either"}
                              </span>
                            )}
                            {voterPrefs.time && (
                              <span style={{ padding: "2px 8px", background: "#f3f4f6", borderRadius: 6 }}>
                                🕐 {voterPrefs.time === "am" ? "AM" : voterPrefs.time === "pm" ? "PM" : "Either"}
                              </span>
                            )}
                            {voterPrefs.transport && (
                              <span style={{ padding: "2px 8px", background: "#f3f4f6", borderRadius: 6 }}>
                                {voterPrefs.transport === "cart" ? "🛺 Cart" : voterPrefs.transport === "walk" ? "🚶 Walk" : "Either"}
                              </span>
                            )}
                            {voterPrefs.format && (
                              <span style={{ padding: "2px 8px", background: "#f3f4f6", borderRadius: 6 }}>
                                {voterPrefs.format === "scramble" ? "👥 Scramble" : voterPrefs.format === "stroke" ? "🏌️ Stroke" : "Either"}
                              </span>
                            )}
                            {voterPrefs.course && (
                              <span style={{ padding: "2px 8px", background: "#f3f4f6", borderRadius: 6 }}>
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
              padding: 14,
              background: "#f9fafb",
              borderRadius: 12,
            }}>
              {/* Day */}
              <div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6, fontWeight: 600 }}>DAY</div>
                <div style={{ display: "flex", gap: 4 }}>
                  <OptionButton label="Sat" icon="📅" selected={votes.day === "saturday"} onClick={() => handleVoteChange("day", "saturday")} disabled={isPollClosed} small />
                  <OptionButton label="Sun" icon="📅" selected={votes.day === "sunday"} onClick={() => handleVoteChange("day", "sunday")} disabled={isPollClosed} small />
                  <OptionButton label="Either" selected={votes.day === "either"} onClick={() => handleVoteChange("day", "either")} disabled={isPollClosed} small />
                </div>
              </div>

              {/* Time */}
              <div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6, fontWeight: 600 }}>TIME</div>
                <div style={{ display: "flex", gap: 4 }}>
                  <OptionButton label="AM" icon="🌅" selected={votes.time === "am"} onClick={() => handleVoteChange("time", "am")} disabled={isPollClosed} small />
                  <OptionButton label="PM" icon="🌇" selected={votes.time === "pm"} onClick={() => handleVoteChange("time", "pm")} disabled={isPollClosed} small />
                  <OptionButton label="Either" selected={votes.time === "either"} onClick={() => handleVoteChange("time", "either")} disabled={isPollClosed} small />
                </div>
              </div>

              {/* Transport */}
              <div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6, fontWeight: 600 }}>TRANSPORT</div>
                <div style={{ display: "flex", gap: 4 }}>
                  <OptionButton label="Cart" icon="🛺" selected={votes.transport === "cart"} onClick={() => handleVoteChange("transport", "cart")} disabled={isPollClosed} small />
                  <OptionButton label="Walk" icon="🚶" selected={votes.transport === "walk"} onClick={() => handleVoteChange("transport", "walk")} disabled={isPollClosed} small />
                  <OptionButton label="Either" selected={votes.transport === "either"} onClick={() => handleVoteChange("transport", "either")} disabled={isPollClosed} small />
                </div>
              </div>

              {/* Format */}
              <div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6, fontWeight: 600 }}>FORMAT</div>
                <div style={{ display: "flex", gap: 4 }}>
                  <OptionButton label="Scramble" icon="👥" selected={votes.format === "scramble"} onClick={() => handleVoteChange("format", "scramble")} disabled={isPollClosed} small />
                  <OptionButton label="Stroke" icon="🏌️" selected={votes.format === "stroke"} onClick={() => handleVoteChange("format", "stroke")} disabled={isPollClosed} small />
                  <OptionButton label="Either" selected={votes.format === "either"} onClick={() => handleVoteChange("format", "either")} disabled={isPollClosed} small />
                </div>
              </div>
            </div>

            {/* Course - full width */}
            <div style={{ 
              marginBottom: 16,
              padding: 14,
              background: "#f9fafb",
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 8, fontWeight: 600 }}>COURSE</div>
              <CourseSelector
                value={votes.course}
                onChange={(course) => setVotes((prev) => ({ ...prev, course }))}
                favouriteCourses={favouriteCourses}
                onRandom={handleRandomCourse}
                disabled={isPollClosed}
              />
            </div>

            {/* Action buttons */}
            {!isPollClosed && (
              <div style={{ display: "flex", gap: 10 }}>
                {hasVoted && (
                  <button
                    onClick={handleRemoveVote}
                    disabled={saving}
                    style={{
                      padding: "14px 20px",
                      borderRadius: 12,
                      border: "1px solid #fecaca",
                      background: "#fef2f2",
                      color: "#dc2626",
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: saving ? "default" : "pointer",
                      opacity: saving ? 0.7 : 1,
                    }}
                  >
                    Remove vote
                  </button>
                )}
                <button
                  onClick={handleSubmitVote}
                  disabled={saving}
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    borderRadius: 12,
                    border: "none",
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    color: "white",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: saving ? "default" : "pointer",
                    opacity: saving ? 0.7 : 1,
                    boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                  }}
                >
                  {saving ? "Saving..." : hasVoted ? "Update vote" : "I'm in! ⛳"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}