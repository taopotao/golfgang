import { useState, useEffect } from "react";
import { doc, updateDoc, deleteDoc, getDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";
import CourseSelector from "./CourseSelector";

// Response button for available/tentative/unavailable
function ResponseButton({ status, currentStatus, onClick, disabled }) {
  const configs = {
    available: { icon: "✓", label: "Available", color: "var(--color-success)" },
    tentative: { icon: "?", label: "Maybe", color: "var(--color-warning)" },
    unavailable: { icon: "✗", label: "Can't", color: "var(--color-text-tertiary)" },
  };

  const config = configs[status];
  const isSelected = currentStatus === status;

  return (
    <button
      type="button"
      onClick={() => onClick(status)}
      disabled={disabled}
      style={{
        flex: 1,
        padding: "10px 8px",
        borderRadius: 8,
        border: `2px solid ${isSelected ? config.color : "var(--color-border)"}`,
        background: isSelected ? `${config.color}20` : "var(--color-surface)",
        color: isSelected ? config.color : "var(--color-text-secondary)",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      <span style={{ fontSize: 16 }}>{config.icon}</span>
      <span>{config.label}</span>
    </button>
  );
}

// Single proposal card
export function WeekdayProposalCard({ proposal, onUpdate, onDelete, allUsers = [] }) {
  const { user, isAdmin } = useAuth();
  const [saving, setSaving] = useState(false);

  const myStatus = proposal.votes?.[user?.uid] || null;
  const votes = proposal.votes || {};
  
  const availableCount = Object.values(votes).filter((v) => v === "available").length;
  const tentativeCount = Object.values(votes).filter((v) => v === "tentative").length;
  const unavailableCount = Object.values(votes).filter((v) => v === "unavailable").length;

  const proposedByUser = allUsers.find((u) => u.id === proposal.proposedBy);
  const proposedByName = proposedByUser?.username || proposal.proposedByName || "Someone";

  const formatDate = () => {
    if (!proposal.date) return "";
    const date = proposal.date.toDate();
    return date.toLocaleDateString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const handleVote = async (status) => {
    if (!user) {
      showToast("Please log in to vote");
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
          [`votes.${user.uid}`]: newStatus,
        });
      }

      showToast(newStatus ? "Vote recorded" : "Vote removed");
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

  const canDelete = user?.uid === proposal.proposedBy || isAdmin;

  return (
    <div style={{
      padding: 16,
      background: "var(--color-surface)",
      borderRadius: 12,
      border: "1px solid var(--color-border)",
      marginBottom: 12,
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
            {formatDate()} @ {proposal.tee || "TBD"}
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
            {proposal.courseName || "Course TBD"}
          </div>
        </div>
        
        {canDelete && (
          <button
            onClick={handleDelete}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              border: "none",
              background: "var(--color-danger-soft)",
              color: "var(--color-danger)",
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            Delete
          </button>
        )}
      </div>

      {/* Proposed by */}
      <div style={{ 
        fontSize: 12, 
        color: "var(--color-text-tertiary)", 
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <div style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          ...getAvatarStyle(proposedByName),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          fontWeight: 600,
        }}>
          {getInitials(proposedByName)}
        </div>
        <span>Proposed by {proposedByName}</span>
      </div>

      {/* Vote counts */}
      <div style={{ 
        display: "flex", 
        gap: 12, 
        marginBottom: 12,
        fontSize: 13,
      }}>
        <span style={{ color: "var(--color-success)" }}>✓ {availableCount}</span>
        <span style={{ color: "var(--color-warning)" }}>? {tentativeCount}</span>
        <span style={{ color: "var(--color-text-tertiary)" }}>✗ {unavailableCount}</span>
      </div>

      {/* Vote buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        <ResponseButton
          status="available"
          currentStatus={myStatus}
          onClick={handleVote}
          disabled={saving}
        />
        <ResponseButton
          status="tentative"
          currentStatus={myStatus}
          onClick={handleVote}
          disabled={saving}
        />
        <ResponseButton
          status="unavailable"
          currentStatus={myStatus}
          onClick={handleVote}
          disabled={saving}
        />
      </div>
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