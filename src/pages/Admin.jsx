import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc, getDoc, setDoc, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import CourseAutocomplete from "../components/CourseAutocomplete";

// Helper to get two initials from name/email
const getInitials = (name) => {
  if (!name) return "??";
  const parts = name.split(/[\s@._-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

// Consistent avatar colours based on name
const getAvatarColor = (name) => {
  const colors = [
    ['#10b981', '#059669'],
    ['#3b82f6', '#2563eb'],
    ['#8b5cf6', '#7c3aed'],
    ['#f59e0b', '#d97706'],
    ['#ec4899', '#db2777'],
    ['#06b6d4', '#0891b2'],
    ['#f97316', '#ea580c'],
  ];
  const index = (name || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [polls, setPolls] = useState([]);
  const [weekdayProposals, setWeekdayProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Favourite courses
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", placeId: "" });
  const [savingCourses, setSavingCourses] = useState(false);
  
  // Create poll
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [pollDate, setPollDate] = useState("");
  const [creatingPoll, setCreatingPoll] = useState(false);

  // Edit poll deadline
  const [editingPollId, setEditingPollId] = useState(null);
  const [editDeadline, setEditDeadline] = useState("");
  const [savingDeadline, setSavingDeadline] = useState(false);

  const colors = {
    booked: {
      badge: '#059669',
      badgeText: '#ffffff',
    },
    proposed: {
      badge: '#eff6ff',
      badgeText: '#2563eb',
      badgeBorder: '#bfdbfe',
    }
  };

  useEffect(() => {
    async function load() {
      const evSnap = await getDocs(collection(db, "events"));
      const eventList = evSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      const userSnap = await getDocs(collection(db, "users"));
      const userList = userSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      const pollSnap = await getDocs(collection(db, "polls"));
      const pollList = pollSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      // Load weekday proposals
      const proposalsSnap = await getDocs(collection(db, "weekdayProposals"));
      const proposalList = proposalsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      // Load settings
      const settingsDoc = await getDoc(doc(db, "settings", "general"));
      if (settingsDoc.exists()) {
        setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
      }

      setEvents(eventList);
      setUsers(userList);
      setPolls(pollList);
      setWeekdayProposals(proposalList);
      setLoading(false);
    }
    load();
  }, []);

  const deleteEvent = async (id) => {
    if (!confirm("Delete this event?")) return;
    await deleteDoc(doc(db, "events", id));
    setEvents((prev) => prev.filter((e) => e.id !== id));
    showToast("Event deleted");
  };

  const toggleAdmin = async (uid, isAdmin) => {
    const ref = doc(db, "users", uid);
    await updateDoc(ref, { isAdmin: !isAdmin });
    setUsers((prev) =>
      prev.map((u) => (u.id === uid ? { ...u, isAdmin: !isAdmin } : u))
    );
  };

  const deletePoll = async (id) => {
    if (!confirm("Delete this poll?")) return;
    await deleteDoc(doc(db, "polls", id));
    setPolls((prev) => prev.filter((p) => p.id !== id));
    showToast("Poll deleted");
  };

  // Delete weekday proposal
  const deleteWeekdayProposal = async (id) => {
    if (!confirm("Delete this weekday proposal?")) return;
    await deleteDoc(doc(db, "weekdayProposals", id));
    setWeekdayProposals((prev) => prev.filter((p) => p.id !== id));
    showToast("Proposal deleted");
  };

  // Edit poll deadline
  const startEditDeadline = (poll) => {
    const deadline = poll.deadline?.toDate?.();
    if (deadline) {
      // Format as datetime-local value
      const local = new Date(deadline.getTime() - deadline.getTimezoneOffset() * 60000);
      setEditDeadline(local.toISOString().slice(0, 16));
    }
    setEditingPollId(poll.id);
  };

  // Share poll
  const sharePoll = async (poll) => {
    hapticFeedback("light");
    
    const weekendDate = poll.weekendOf?.toDate?.();
    const deadline = poll.deadline?.toDate?.();
    const voteCount = Object.keys(poll.votes || {}).length;
    
    // Format dates
    const satDate = weekendDate ? new Date(weekendDate) : null;
    const sunDate = satDate ? new Date(satDate) : null;
    if (sunDate) sunDate.setDate(sunDate.getDate() + 1);
    
    const weekendStr = satDate 
      ? `${satDate.toLocaleDateString("en-AU", { weekday: "long", day: "numeric" })} - ${sunDate?.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })}`
      : "";
    
    const deadlineStr = deadline
      ? deadline.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "short" }) + 
        " at " + deadline.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })
      : "";

    // Build correct URL
    const baseUrl = window.location.origin + (window.location.pathname.includes('/golfgang') ? '/golfgang' : '');
    const pollUrl = `${baseUrl}/`;

    // Build message
    let msg = `🗳️ *Weekend Golf Poll*\n`;
    if (weekendStr) msg += `📅 ${weekendStr}\n`;
    msg += `\n⛳ Who's in for golf this weekend?\n`;
    msg += `Vote for your preferred day, time & course!\n`;
    if (voteCount > 0) msg += `\n👥 ${voteCount} ${voteCount === 1 ? "person has" : "people have"} voted\n`;
    if (deadlineStr) msg += `⏰ Voting closes: ${deadlineStr}\n`;
    msg += `\n🔗 Vote now:\n${pollUrl}`;

    try {
      await navigator.clipboard.writeText(msg);
      showToast("Copied to clipboard! 📋");
    } catch {
      showToast("Could not copy");
    }
  };

  const saveDeadline = async (pollId) => {
    if (!editDeadline) {
      showToast("Please select a deadline");
      return;
    }

    setSavingDeadline(true);
    hapticFeedback("medium");

    try {
      const newDeadline = new Date(editDeadline);
      await updateDoc(doc(db, "polls", pollId), {
        deadline: Timestamp.fromDate(newDeadline),
      });

      // Update local state
      setPolls((prev) =>
        prev.map((p) =>
          p.id === pollId
            ? { ...p, deadline: Timestamp.fromDate(newDeadline) }
            : p
        )
      );

      showToast("Deadline updated!");
      setEditingPollId(null);
      setEditDeadline("");
    } catch (err) {
      console.error("Error updating deadline:", err);
      showToast("Failed to update deadline");
    } finally {
      setSavingDeadline(false);
    }
  };

  const cancelEditDeadline = () => {
    setEditingPollId(null);
    setEditDeadline("");
  };

  // Favourite courses handlers
  const handleAddCourse = () => {
    if (!newCourse.name.trim()) {
      showToast("Please enter a course name");
      return;
    }
    if (favouriteCourses.some((c) => c.name.toLowerCase() === newCourse.name.toLowerCase())) {
      showToast("Course already exists");
      return;
    }
    hapticFeedback("light");
    setFavouriteCourses([...favouriteCourses, { 
      name: newCourse.name.trim(), 
      placeId: newCourse.placeId || null,
    }]);
    setNewCourse({ name: "", placeId: "" });
  };

  const handleRemoveCourse = (index) => {
    hapticFeedback("light");
    setFavouriteCourses(favouriteCourses.filter((_, i) => i !== index));
  };

  const saveFavouriteCourses = async () => {
    setSavingCourses(true);
    hapticFeedback("medium");
    try {
      await setDoc(doc(db, "settings", "general"), {
        favouriteCourses,
        updatedAt: new Date(),
      }, { merge: true });
      showToast("Courses saved!");
    } catch (err) {
      console.error("Error saving courses:", err);
      showToast("Failed to save");
    } finally {
      setSavingCourses(false);
    }
  };

  // Create poll handler
  const handleCreatePoll = async () => {
    if (!pollDate) {
      showToast("Please select a date");
      return;
    }

    setCreatingPoll(true);
    hapticFeedback("medium");

    try {
      const saturday = new Date(pollDate);
      saturday.setHours(0, 0, 0, 0);

      // Check if poll already exists
      const pollId = `poll_weekend_${saturday.toISOString().split("T")[0]}`;
      const existingPoll = polls.find(p => p.id === pollId);
      
      if (existingPoll) {
        showToast("Poll already exists for this weekend");
        setCreatingPoll(false);
        return;
      }

      // Calculate deadline (Friday before at midnight)
      const deadline = new Date(saturday);
      deadline.setDate(deadline.getDate() - 1);
      deadline.setHours(23, 59, 59, 999);

      await setDoc(doc(db, "polls", pollId), {
        type: "weekend",
        title: `Weekend of ${saturday.toLocaleDateString("en-AU", { day: "numeric", month: "short" })}`,
        weekendOf: Timestamp.fromDate(saturday),
        deadline: Timestamp.fromDate(deadline),
        status: "open",
        votes: {},
        createdAt: Timestamp.now(),
      });

      // Refresh polls
      const pollSnap = await getDocs(collection(db, "polls"));
      setPolls(pollSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

      showToast("Poll created!");
      setPollDate("");
      setShowCreatePoll(false);
    } catch (err) {
      console.error("Error creating poll:", err);
      showToast("Failed to create poll");
    } finally {
      setCreatingPoll(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          Loading…
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Admin</h1>
          <p>Manage events, polls, and settings</p>
        </div>
      </div>

      {/* FAVOURITE COURSES */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="section-header">
          <span className="section-title">⛳ Favourite Courses</span>
          <span className="section-count">{favouriteCourses.length}</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 16 }}>
          These appear in poll dropdowns for course selection.
        </p>

        {favouriteCourses.length === 0 ? (
          <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", marginBottom: 12 }}>
            No courses added yet
          </p>
        ) : (
          <div style={{ marginBottom: 12 }}>
            {favouriteCourses.map((course, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  background: "var(--color-bg-secondary)",
                  borderRadius: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontWeight: 500 }}>{course.name}</span>
                <button
                  onClick={() => handleRemoveCourse(index)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "none",
                    background: "var(--color-danger-soft)",
                    color: "var(--color-danger)",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <CourseAutocomplete
              initialValue={newCourse.name}
              onSelect={(course) => setNewCourse({ 
                name: course.name || "", 
                placeId: course.placeId || "" 
              })}
              placeholder="Add a course..."
            />
          </div>
          <button onClick={handleAddCourse} className="btn btn-ghost" style={{ padding: "12px 16px" }}>
            Add
          </button>
        </div>

        <button 
          onClick={saveFavouriteCourses} 
          disabled={savingCourses}
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          {savingCourses ? "Saving..." : "Save Courses"}
        </button>
      </div>

      {/* WEEKEND POLLS */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="section-header">
          <span className="section-title">🗳️ Weekend Polls</span>
          <span className="section-count">{polls.length}</span>
        </div>

        {polls.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)", padding: "12px 0" }}>
            No polls yet
          </p>
        ) : (
          polls
            .sort((a, b) => (b.weekendOf?.toMillis() || 0) - (a.weekendOf?.toMillis() || 0))
            .map((poll, idx) => {
              const weekendDate = poll.weekendOf?.toDate?.();
              const deadline = poll.deadline?.toDate?.();
              const voteCount = Object.keys(poll.votes || {}).length;
              const isOpen = poll.status === "open" && deadline > new Date();
              const isEditing = editingPollId === poll.id;

              return (
                <div
                  key={poll.id}
                  style={{
                    padding: "12px 0",
                    borderBottom: idx < polls.length - 1 ? "1px solid var(--color-divider)" : "none",
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontWeight: 500, marginBottom: 2 }}>
                        {weekendDate?.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                        {voteCount} votes • {isOpen ? "Open" : poll.status === "converted" ? "Converted" : "Closed"}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 2 }}>
                        Closes: {deadline?.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })} at {deadline?.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        onClick={() => sharePoll(poll)}
                        className="btn btn-ghost btn-sm"
                        title="Share poll"
                      >
                        📤
                      </button>
                      <button
                        onClick={() => startEditDeadline(poll)}
                        className="btn btn-ghost btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePoll(poll.id)}
                        className="btn btn-ghost btn-sm"
                        style={{ color: "var(--color-danger)" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Edit deadline form */}
                  {isEditing && (
                    <div style={{
                      marginTop: 12,
                      padding: 12,
                      background: "var(--color-bg-secondary)",
                      borderRadius: 10,
                    }}>
                      <label style={{ display: "block", fontSize: 12, marginBottom: 6, color: "var(--color-text-secondary)" }}>
                        New deadline
                      </label>
                      <input
                        type="datetime-local"
                        value={editDeadline}
                        onChange={(e) => setEditDeadline(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "2px solid var(--color-border)",
                          background: "var(--color-surface)",
                          color: "var(--color-text)",
                          fontSize: 14,
                          marginBottom: 10,
                        }}
                      />
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          onClick={() => saveDeadline(poll.id)}
                          disabled={savingDeadline}
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1 }}
                        >
                          {savingDeadline ? "Saving..." : "Save"}
                        </button>
                        <button
                          onClick={cancelEditDeadline}
                          className="btn btn-ghost btn-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        )}

        {/* Create Poll Button */}
        {!showCreatePoll ? (
          <button
            onClick={() => setShowCreatePoll(true)}
            className="btn btn-ghost"
            style={{ width: "100%", marginTop: 12 }}
          >
            + Create Weekend Poll
          </button>
        ) : (
          <div style={{ marginTop: 12, padding: 12, background: "var(--color-bg-secondary)", borderRadius: 10 }}>
            <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)" }}>
              Select Saturday of weekend
            </label>
            <input
              type="date"
              value={pollDate}
              onChange={(e) => setPollDate(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: "2px solid var(--color-border)",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                fontSize: 14,
                marginBottom: 12,
              }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={handleCreatePoll}
                disabled={creatingPoll || !pollDate}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                {creatingPoll ? "Creating..." : "Create Poll"}
              </button>
              <button
                onClick={() => setShowCreatePoll(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* WEEKDAY PROPOSALS */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="section-header">
          <span className="section-title">📅 Weekday Proposals</span>
          <span className="section-count">{weekdayProposals.length}</span>
        </div>

        {weekdayProposals.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)", padding: "12px 0" }}>
            No weekday proposals yet
          </p>
        ) : (
          weekdayProposals
            .sort((a, b) => (b.date?.toMillis() || 0) - (a.date?.toMillis() || 0))
            .map((proposal, idx) => {
              const proposalDate = proposal.date?.toDate?.();
              const voteCount = Object.keys(proposal.votes || {}).length;
              const isConverted = proposal.status === "converted";
              const proposerName = users.find(u => u.id === proposal.proposedBy)?.username || 
                                   proposal.proposedByName || "Someone";

              return (
                <div
                  key={proposal.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: idx < weekdayProposals.length - 1 ? "1px solid var(--color-divider)" : "none",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>
                      {proposalDate?.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                      {proposal.tee && ` @ ${proposal.tee}`}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                      {proposal.courseName || "Course TBD"} • {voteCount} votes • by {proposerName}
                      {isConverted && " • ✓ Event Created"}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteWeekdayProposal(proposal.id)}
                    className="btn btn-ghost btn-sm"
                    style={{ color: "var(--color-danger)" }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
        )}
      </div>

      {/* EVENTS */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="section-header">
          <span className="section-title">Events</span>
          <span className="section-count">{events.length}</span>
        </div>

        {events.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)", padding: "12px 0" }}>
            No events yet
          </p>
        ) : (
          events.map((ev, idx) => {
            const dateString = ev.date?.toDate?.()?.toLocaleDateString("en-AU", {
              weekday: "short",
              day: "numeric",
              month: "short",
            });
            const timeString = ev.tee || "";

            return (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: idx < events.length - 1 ? "1px solid var(--color-divider)" : "none",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 500 }}>{ev.title || "Golf"}</span>
                    {ev.booked && (
                      <span style={{
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: 20,
                        background: colors.booked.badge,
                        color: colors.booked.badgeText,
                      }}>
                        BOOKED
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                    {dateString}{timeString && `, ${timeString}`}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link to={`/event/${ev.id}`} className="btn btn-ghost btn-sm">
                    Open
                  </Link>
                  <button
                    onClick={() => deleteEvent(ev.id)}
                    className="btn btn-ghost btn-sm"
                    style={{ color: "var(--color-danger)" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* USERS */}
      <div className="card">
        <div className="section-header">
          <span className="section-title">Users</span>
          <span className="section-count">{users.length}</span>
        </div>

        {users.map((u, idx) => {
          const displayName = u.username || u.email?.split("@")[0] || "User";
          const avatarColors = getAvatarColor(displayName);

          return (
            <div
              key={u.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: idx < users.length - 1 ? "1px solid var(--color-divider)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${avatarColors[0]} 0%, ${avatarColors[1]} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 13,
                }}>
                  {getInitials(displayName)}
                </div>
                <div>
                  <div style={{ fontWeight: 500 }}>{displayName}</div>
                  {u.username && u.email && (
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{u.email}</div>
                  )}
                </div>
              </div>

              <button
                onClick={() => toggleAdmin(u.id, u.isAdmin)}
                className={`btn btn-sm ${u.isAdmin ? 'btn-primary' : 'btn-ghost'}`}
              >
                {u.isAdmin ? "Admin ✓" : "Make Admin"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}