import { useState, useEffect } from "react";
import { doc, updateDoc, deleteDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";
import CourseSelector from "./CourseSelector";

// Single proposal card
export function WeekdayProposalCard({ proposal, onUpdate, onDelete, allUsers = [] }) {
  const { user, isAdmin } = useAuth();
  const [saving, setSaving] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [converting, setConverting] = useState(false);
  const [preferences, setPreferences] = useState({
    transport: null,
    format: null,
  });

  const myVote = proposal.votes?.[user?.uid];
  const myStatus = typeof myVote === 'object' ? myVote.status : myVote;
  const myPrefs = typeof myVote === 'object' ? myVote.preferences : null;
  
  const votes = proposal.votes || {};
  
  // Count votes (handle both old string format and new object format)
  const getStatus = (v) => typeof v === 'object' ? v.status : v;
  const availableCount = Object.values(votes).filter((v) => getStatus(v) === "available").length;
  const tentativeCount = Object.values(votes).filter((v) => getStatus(v) === "tentative").length;
  const unavailableCount = Object.values(votes).filter((v) => getStatus(v) === "unavailable").length;

  // Get available voter IDs for event creation
  const availableVoterIds = Object.entries(votes)
    .filter(([_, v]) => getStatus(v) === "available")
    .map(([uid]) => uid);

  // Aggregate preferences
  const prefCounts = { cart: 0, walk: 0, scramble: 0, stroke: 0 };
  Object.values(votes).forEach((v) => {
    if (typeof v === 'object' && v.preferences) {
      if (v.preferences.transport) prefCounts[v.preferences.transport]++;
      if (v.preferences.format) prefCounts[v.preferences.format]++;
    }
  });

  const proposedByUser = allUsers.find((u) => u.id === proposal.proposedBy);
  const proposedByName = proposedByUser?.username || proposal.proposedByName || "Someone";

  // Load existing preferences
  useEffect(() => {
    if (myPrefs) {
      setPreferences(myPrefs);
    }
  }, [myVote]);

  const formatDate = () => {
    if (!proposal.date) return "";
    const date = proposal.date.toDate();
    return date.toLocaleDateString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const formatTime = () => {
    if (!proposal.tee) return "TBD";
    // Convert 24h to 12h format
    const [hours, mins] = proposal.tee.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${mins} ${ampm}`;
  };

  const handleVote = async (status) => {
    if (!user) {
      showToast("Please log in to vote");
      return;
    }

    // If selecting "available", show preferences first
    if (status === "available" && myStatus !== "available") {
      setShowPrefs(true);
      return;
    }

    setSaving(true);
    hapticFeedback("light");

    try {
      const newStatus = myStatus === status ? null : status;
      const proposalRef = doc(db, "weekdayProposals", proposal.id);
      
      if (newStatus === null) {
        // Remove vote
        const newVotes = { ...votes };
        delete newVotes[user.uid];
        await updateDoc(proposalRef, { votes: newVotes });
      } else {
        await updateDoc(proposalRef, {
          [`votes.${user.uid}`]: {
            status: newStatus,
            preferences: newStatus === "available" ? preferences : null,
          },
        });
      }

      showToast(newStatus ? "Vote recorded" : "Vote removed");
      setShowPrefs(false);
      if (onUpdate) onUpdate();
    } catch (err) {
      console.error("Error voting:", err);
      showToast("Failed to save vote");
    } finally {
      setSaving(false);
    }
  };

  const handleSubmitWithPrefs = async () => {
    setSaving(true);
    hapticFeedback("light");

    try {
      const proposalRef = doc(db, "weekdayProposals", proposal.id);
      await updateDoc(proposalRef, {
        [`votes.${user.uid}`]: {
          status: "available",
          preferences: preferences,
        },
      });

      showToast("You're in!");
      setShowPrefs(false);
      if (onUpdate) onUpdate();
    } catch (err) {
      console.error("Error voting:", err);
      showToast("Failed to save vote");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this proposal?")) return;
    
    try {
      await deleteDoc(doc(db, "weekdayProposals", proposal.id));
      showToast("Proposal deleted");
      if (onDelete) onDelete();
    } catch (err) {
      console.error("Error deleting:", err);
      showToast("Failed to delete");
    }
  };

  const handleConvertToEvent = async () => {
    if (!confirm(`Create event for ${formatDate()}?`)) return;
    
    setConverting(true);
    hapticFeedback("medium");

    try {
      // Build responses object from available voters
      const responses = {};
      availableVoterIds.forEach((uid) => {
        responses[uid] = { status: "available", respondedAt: new Date() };
      });

      // Create the event
      const eventRef = await addDoc(collection(db, "events"), {
        title: `${formatDate()} Golf`,
        date: proposal.date,
        tee: formatTime(),
        courseName: proposal.courseName || "",
        coursePlaceId: proposal.coursePlaceId || "",
        notes: `Converted from weekday proposal`,
        responses,
        booked: false,
        createdAt: Timestamp.now(),
      });

      // Mark proposal as converted
      await updateDoc(doc(db, "weekdayProposals", proposal.id), {
        status: "converted",
        convertedEventId: eventRef.id,
      });

      showToast("Event created! ⛳");
    } catch (err) {
      console.error("Error converting to event:", err);
      showToast("Failed to create event");
    } finally {
      setConverting(false);
    }
  };

  const canDelete = user?.uid === proposal.proposedBy || isAdmin;
  const canConvert = (isAdmin || user?.uid === proposal.proposedBy) && availableCount >= 2;
  const isConverted = proposal.status === "converted";

  // Preference button component
  const PrefButton = ({ value, current, onChange, icon, label }) => (
    <button
      type="button"
      onClick={() => onChange(current === value ? null : value)}
      style={{
        flex: 1,
        padding: "10px 6px",
        borderRadius: 10,
        border: `2px solid ${current === value ? "#22c55e" : "var(--color-border)"}`,
        background: current === value ? "#f0fdf4" : "white",
        color: current === value ? "#16a34a" : "var(--color-text-secondary)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        fontSize: 11,
      }}
    >
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontWeight: 500 }}>{label}</span>
    </button>
  );

  // Vote button component
  const VoteButton = ({ status, icon, label, color, selectedColor, selectedBg }) => {
    const isSelected = myStatus === status;
    return (
      <button
        type="button"
        onClick={() => handleVote(status)}
        disabled={saving || isConverted}
        style={{
          flex: 1,
          padding: "12px 8px",
          borderRadius: 12,
          border: `2px solid ${isSelected ? selectedColor : "var(--color-border)"}`,
          background: isSelected ? selectedBg : "white",
          color: isSelected ? selectedColor : "var(--color-text-secondary)",
          cursor: saving || isConverted ? "default" : "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          opacity: isConverted ? 0.5 : 1,
        }}
      >
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
      </button>
    );
  };

  return (
    <div style={{
      padding: 18,
      background: isConverted ? "var(--color-bg-secondary)" : "white",
      borderRadius: 16,
      border: "1px solid var(--color-border)",
      marginBottom: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      opacity: isConverted ? 0.7 : 1,
    }}>
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4, color: "var(--color-text)" }}>
            {formatDate()} @ {formatTime()}
          </div>
          <div style={{ 
            fontSize: 14, 
            color: "var(--color-text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <span>📍</span>
            <span>{proposal.courseName || "Course TBD"}</span>
          </div>
        </div>
        
        {canDelete && !isConverted && (
          <button
            onClick={handleDelete}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "none",
              background: "#fef2f2",
              color: "#dc2626",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Delete
          </button>
        )}
        {isConverted && (
          <span style={{
            padding: "6px 12px",
            borderRadius: 8,
            background: "#f0fdf4",
            color: "#16a34a",
            fontSize: 12,
            fontWeight: 600,
          }}>
            ✓ Event Created
          </span>
        )}
      </div>

      {/* Proposed by + vote counts */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
        paddingBottom: 14,
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div style={{ 
          fontSize: 13, 
          color: "var(--color-text-tertiary)", 
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            ...getAvatarStyle(proposedByName),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 600,
          }}>
            {getInitials(proposedByName)}
          </div>
          <span>by {proposedByName}</span>
        </div>
        
        <div style={{ display: "flex", gap: 12, fontSize: 14, fontWeight: 600 }}>
          <span style={{ color: "#22c55e" }}>✓{availableCount}</span>
          <span style={{ color: "#eab308" }}>?{tentativeCount}</span>
          <span style={{ color: "#9ca3af" }}>✗{unavailableCount}</span>
        </div>
      </div>

      {/* Preferences modal/inline */}
      {showPrefs ? (
        <div style={{
          padding: 16,
          background: "#f9fafb",
          borderRadius: 12,
          marginBottom: 12,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, color: "var(--color-text)" }}>
            Your preferences
          </div>
          
          {/* Transport */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Transport
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <PrefButton value="cart" current={preferences.transport} onChange={(v) => setPreferences(p => ({ ...p, transport: v }))} icon="🛺" label="Cart" />
              <PrefButton value="walk" current={preferences.transport} onChange={(v) => setPreferences(p => ({ ...p, transport: v }))} icon="🚶" label="Walk" />
            </div>
          </div>

          {/* Format */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Format
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <PrefButton value="scramble" current={preferences.format} onChange={(v) => setPreferences(p => ({ ...p, format: v }))} icon="👥" label="Scramble" />
              <PrefButton value="stroke" current={preferences.format} onChange={(v) => setPreferences(p => ({ ...p, format: v }))} icon="🏌️" label="Stroke" />
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => setShowPrefs(false)}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 10,
                border: "1px solid var(--color-border)",
                background: "white",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitWithPrefs}
              disabled={saving}
              style={{
                flex: 2,
                padding: "12px",
                borderRadius: 10,
                border: "none",
                background: "#22c55e",
                color: "white",
                cursor: saving ? "default" : "pointer",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {saving ? "Saving..." : "I'm in!"}
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Vote buttons */}
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            <VoteButton 
              status="available" 
              icon="✓" 
              label="In" 
              selectedColor="#22c55e" 
              selectedBg="#f0fdf4" 
            />
            <VoteButton 
              status="tentative" 
              icon="?" 
              label="Maybe" 
              selectedColor="#eab308" 
              selectedBg="#fefce8" 
            />
            <VoteButton 
              status="unavailable" 
              icon="✗" 
              label="Out" 
              selectedColor="#9ca3af" 
              selectedBg="#f3f4f6" 
            />
          </div>

          {/* Show my preferences if I'm available */}
          {myStatus === "available" && myPrefs && (myPrefs.transport || myPrefs.format) && (
            <div style={{ 
              fontSize: 13, 
              color: "var(--color-text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}>
              <span>Your prefs:</span>
              {myPrefs.transport && <span>{myPrefs.transport === "cart" ? "🛺 Cart" : "🚶 Walk"}</span>}
              {myPrefs.format && <span>• {myPrefs.format === "scramble" ? "👥 Scramble" : "🏌️ Stroke"}</span>}
              <button
                onClick={() => setShowPrefs(true)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "1px solid var(--color-border)",
                  background: "white",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "var(--color-text-tertiary)",
                  marginLeft: "auto",
                }}
              >
                Edit
              </button>
            </div>
          )}

          {/* Convert to event button */}
          {canConvert && !isConverted && (
            <button
              onClick={handleConvertToEvent}
              disabled={converting}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: "2px dashed #22c55e",
                background: "#f0fdf4",
                color: "#16a34a",
                cursor: converting ? "default" : "pointer",
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <span>⛳</span>
              {converting ? "Creating..." : `Create Event (${availableCount} players)`}
            </button>
          )}
        </>
      )}
    </div>
  );
}

// Create new proposal form
export function CreateProposalForm({ onCreated, favouriteCourses = [] }) {
  const { user, profile } = useAuth();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");
  const [course, setCourse] = useState(null);
  const [creating, setCreating] = useState(false);

  const handleRandomCourse = () => {
    if (favouriteCourses.length === 0) return;
    hapticFeedback("medium");
    const randomIndex = Math.floor(Math.random() * favouriteCourses.length);
    setCourse(favouriteCourses[randomIndex].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      showToast("Please log in to propose");
      return;
    }

    if (!date) {
      showToast("Please select a date");
      return;
    }

    // Validate weekday
    const proposalDate = new Date(date);
    const dayOfWeek = proposalDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      showToast("Weekday proposals must be Monday-Friday");
      return;
    }

    setCreating(true);
    hapticFeedback("medium");

    try {
      const proposalDate = new Date(date);
      
      await addDoc(collection(db, "weekdayProposals"), {
        proposedBy: user.uid,
        proposedByName: profile?.username || user.email?.split("@")[0] || "Someone",
        date: Timestamp.fromDate(proposalDate),
        tee: time,
        courseName: course || null,
        coursePlaceId: favouriteCourses.find(c => c.name === course)?.placeId || null,
        votes: {
          [user.uid]: "available", // Proposer is automatically available
        },
        status: "open",
        createdAt: Timestamp.now(),
      });

      showToast("Proposal created!");
      setDate("");
      setTime("16:00");
      setCourse(null);
      if (onCreated) onCreated();
    } catch (err) {
      console.error("Error creating proposal:", err);
      showToast("Failed to create proposal");
    } finally {
      setCreating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: 16,
      background: "var(--color-bg-secondary)",
      borderRadius: 12,
      marginBottom: 20,
    }}>
      <h4 style={{ margin: "0 0 16px 0", fontSize: 15, fontWeight: 600 }}>
        + Propose a Weekday Round
      </h4>

      {/* Date */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>
          Date <span style={{ color: "var(--color-text-tertiary)" }}>(weekdays only)</span>
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            const dayOfWeek = selectedDate.getDay();
            // 0 = Sunday, 6 = Saturday
            if (dayOfWeek === 0 || dayOfWeek === 6) {
              showToast("Please select a weekday (Mon-Fri)");
              return;
            }
            setDate(e.target.value);
          }}
          required
          min={(() => {
            // Set min to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow.toISOString().split('T')[0];
          })()}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "2px solid var(--color-border)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            fontSize: 14,
          }}
        />
        <p style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 4 }}>
          Use weekend polls for Saturday/Sunday rounds
        </p>
      </div>

      {/* Time */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>
          Tee Time
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "2px solid var(--color-border)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            fontSize: 14,
          }}
        />
      </div>

      {/* Course */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>
          Course (optional)
        </label>
        <CourseSelector
          value={course}
          onChange={setCourse}
          favouriteCourses={favouriteCourses}
          onRandom={handleRandomCourse}
        />
      </div>

      <button
        type="submit"
        disabled={creating}
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        {creating ? "Creating..." : "Propose This Date"}
      </button>
    </form>
  );
}