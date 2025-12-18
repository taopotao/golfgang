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
  const [loading, setLoading] = useState(true);
  
  // Favourite courses
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", placeId: "" });
  const [savingCourses, setSavingCourses] = useState(false);
  
  // Create poll
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [pollDate, setPollDate] = useState("");
  const [creatingPoll, setCreatingPoll] = useState(false);

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

      // Load settings
      const settingsDoc = await getDoc(doc(db, "settings", "general"));
      if (settingsDoc.exists()) {
        setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
      }

      setEvents(eventList);
      setUsers(userList);
      setPolls(pollList);
      setLoading(false);
    }
    load();
  }, []);

  const deleteEvent = async (id) => {
    if (!confirm("Delete this event?")) return;
    await deleteDoc(doc(db, "events", id));
    setEvents((prev) => prev.filter((e) => e.id !== id));
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

      {/* POLLS */}
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

              return (
                <div
                  key={poll.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: idx < polls.length - 1 ? "1px solid var(--color-divider)" : "none",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>
                      {weekendDate?.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                      {voteCount} votes • {isOpen ? "Open" : poll.status === "converted" ? "Converted" : "Closed"}
                    </div>
                  </div>
                  <button
                    onClick={() => deletePoll(poll.id)}
                    className="btn btn-ghost btn-sm"
                    style={{ color: "var(--color-danger)" }}
                  >
                    Delete
                  </button>
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
            const dateString = ev.date?.toDate?.().toLocaleString("en-AU", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: idx < events.length - 1 ? "1px solid var(--color-divider)" : "none",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 500 }}>{ev.title}</span>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: 6,
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      ...(ev.booked ? {
                        background: colors.booked.badge,
                        color: colors.booked.badgeText,
                      } : {
                        background: colors.proposed.badge,
                        color: colors.proposed.badgeText,
                        border: `1px solid ${colors.proposed.badgeBorder}`,
                      })
                    }}>
                      {ev.booked ? "Booked" : "Proposed"}
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                    {dateString}
                  </span>
                </div>

                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <Link to={`/event/${ev.id}`} className="btn btn-ghost btn-sm">
                    Open
                  </Link>
                  <button 
                    className="btn btn-ghost btn-sm" 
                    style={{ color: "var(--color-danger)" }} 
                    onClick={() => deleteEvent(ev.id)}
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
          const displayName = u.username || u.email || "?";
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