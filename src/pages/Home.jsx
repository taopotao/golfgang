import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, getDoc, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";
import WeekendPoll from "../components/WeekendPoll";
import { WeekdayProposalCard, CreateProposalForm } from "../components/WeekdayProposal";
import CourseAutocomplete from "../components/CourseAutocomplete";

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response;
  return response.status;
};

export default function Home() {
  const { user, isAdmin } = useAuth();
  
  // Data
  const [events, setEvents] = useState([]);
  const [weekendPolls, setWeekendPolls] = useState([]);
  const [weekdayProposals, setWeekdayProposals] = useState([]);
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // UI state
  const [showWeekdayForm, setShowWeekdayForm] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  
  // Create event form
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    tee: "",
    course: { name: "", placeId: "" },
    notes: "",
  });
  const [creating, setCreating] = useState(false);

  // Color scheme
  const colors = {
    booked: {
      bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      border: "#10b981",
      badge: "#059669",
      badgeText: "#ffffff",
    },
    proposed: {
      bg: "#ffffff",
      border: "var(--color-border)",
      accent: "#3b82f6",
      badge: "#eff6ff",
      badgeText: "#2563eb",
      badgeBorder: "#bfdbfe",
    },
  };

  // Load all data
  useEffect(() => {
    // Events
    const eventsUnsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setEvents(list);
      setLoading(false);
    });

    // Weekend polls
    const pollsQuery = query(collection(db, "polls"), orderBy("weekendOf", "desc"));
    const pollsUnsub = onSnapshot(pollsQuery, (snapshot) => {
      const polls = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setWeekendPolls(polls);
    });

    // Weekday proposals
    const proposalsQuery = query(collection(db, "weekdayProposals"), orderBy("date", "asc"));
    const proposalsUnsub = onSnapshot(proposalsQuery, (snapshot) => {
      const proposals = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Filter out past proposals
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const futureProposals = proposals.filter((p) => {
        const propDate = p.date?.toDate();
        return propDate && propDate >= now;
      });
      setWeekdayProposals(futureProposals);
    });

    // Users
    async function loadUsers() {
      const snap = await getDocs(collection(db, "users"));
      setAllUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    loadUsers();

    // Favourite courses
    async function loadCourses() {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
        }
      } catch (err) {
        console.error("Error loading settings:", err);
      }
    }
    loadCourses();

    return () => {
      eventsUnsub();
      pollsUnsub();
      proposalsUnsub();
    };
  }, []);

  // Filter and sort data
  const now = new Date();
  
  // Active weekend poll (open, deadline in future)
  const activePoll = weekendPolls.find((p) => 
    p.status === "open" && p.deadline?.toDate() > now
  );
  
  // Upcoming events (future, sorted by date)
  const upcomingEvents = events
    .filter((ev) => {
      const evDate = ev.date?.toDate();
      return evDate && evDate >= now;
    })
    .sort((a, b) => a.date.toMillis() - b.date.toMillis());
  
  // My upcoming events (where I'm available)
  const myUpcomingEvents = upcomingEvents.filter((ev) => {
    const myStatus = user && ev.responses ? getResponseStatus(ev.responses[user.uid]) : null;
    return myStatus === "available";
  });

  // Events needing my response
  const needsResponse = upcomingEvents.filter((ev) => {
    if (ev.booked) return false;
    const myStatus = user && ev.responses ? getResponseStatus(ev.responses[user.uid]) : null;
    return !myStatus;
  });

  // Create event handler
  const handleCreateEvent = async () => {
    if (!newEvent.title.trim() || !newEvent.date) {
      showToast("Please fill in title and date");
      return;
    }
    
    setCreating(true);
    hapticFeedback("medium");

    try {
      await addDoc(collection(db, "events"), {
        title: newEvent.title.trim(),
        date: Timestamp.fromDate(new Date(newEvent.date)),
        tee: newEvent.tee.trim(),
        courseName: newEvent.course.name || "",
        coursePlaceId: newEvent.course.placeId || "",
        notes: newEvent.notes.trim(),
        responses: {},
        booked: false,
        createdAt: Timestamp.now(),
      });

      setNewEvent({ title: "", date: "", tee: "", course: { name: "", placeId: "" }, notes: "" });
      setShowCreateEvent(false);
      showToast("Event created! ⛳");
    } catch (err) {
      console.error("Error creating event:", err);
      showToast("Failed to create event");
    } finally {
      setCreating(false);
    }
  };

  // Event card component
  const EventCard = ({ event, showDate = true }) => {
    const dateObj = event.date?.toDate();
    const myStatus = user && event.responses ? getResponseStatus(event.responses[user.uid]) : null;
    const attendingCount = event.responses
      ? Object.values(event.responses).filter((r) => getResponseStatus(r) === "available").length
      : 0;

    return (
      <Link
        to={`/event/${event.id}`}
        style={{
          display: "block",
          padding: 16,
          borderRadius: 12,
          textDecoration: "none",
          color: "inherit",
          background: event.booked ? colors.booked.bg : colors.proposed.bg,
          border: `2px solid ${event.booked ? colors.booked.border : colors.proposed.border}`,
          transition: "all 0.2s ease",
        }}
      >
        {/* Date & Status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          {showDate && dateObj && (
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              {dateObj.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
              {event.tee && ` • ${event.tee}`}
            </div>
          )}
          <span
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600,
              ...(event.booked
                ? { background: colors.booked.badge, color: colors.booked.badgeText }
                : { background: colors.proposed.badge, color: colors.proposed.badgeText, border: `1px solid ${colors.proposed.badgeBorder}` }),
            }}
          >
            {event.booked ? "✓ Booked" : "Proposed"}
          </span>
        </div>

        {/* Title */}
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{event.title}</div>

        {/* Course */}
        {event.courseName && (
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8 }}>
            📍 {event.courseName}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
            <span style={{ color: "var(--color-text-secondary)" }}>👥 {attendingCount}/4</span>
            {myStatus === "available" && (
              <span style={{ color: colors.booked.badge, fontWeight: 600 }}>✓ You're in</span>
            )}
            {!myStatus && !event.booked && (
              <span style={{ color: colors.proposed.badgeText, fontWeight: 500 }}>Awaiting response</span>
            )}
          </div>
          <span style={{ fontSize: 16, color: "var(--color-text-tertiary)" }}>→</span>
        </div>
      </Link>
    );
  };

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: 20,
      }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>What's on</h1>
        {isAdmin && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setShowCreateEvent(true)}
          >
            + Event
          </button>
        )}
      </div>

      {/* WEEKEND POLL */}
      {activePoll && (
        <section style={{ marginBottom: 24 }}>
          <WeekendPoll poll={activePoll} />
        </section>
      )}

      {/* NEEDS YOUR RESPONSE */}
      {needsResponse.length > 0 && (
        <section style={{ marginBottom: 24 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{
              padding: "4px 10px",
              background: "var(--color-warning-soft)",
              color: "var(--color-warning)",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
            }}>
              {needsResponse.length} awaiting
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-secondary)" }}>
              Needs your response
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {needsResponse.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* MY UPCOMING ROUNDS */}
      {myUpcomingEvents.length > 0 && (
        <section style={{ marginBottom: 24 }}>
          <div className="section-header">
            <span className="section-title">My Upcoming Rounds</span>
            <span className="section-count">{myUpcomingEvents.length}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {myUpcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {myUpcomingEvents.length > 3 && (
            <Link
              to="/my-events"
              style={{
                display: "block",
                textAlign: "center",
                padding: 12,
                marginTop: 8,
                color: "var(--color-primary)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              View all {myUpcomingEvents.length} rounds →
            </Link>
          )}
        </section>
      )}

      {/* ALL UPCOMING EVENTS */}
      <section style={{ marginBottom: 24 }}>
        <div className="section-header">
          <span className="section-title">All Upcoming</span>
          <span className="section-count">{upcomingEvents.length}</span>
        </div>
        {upcomingEvents.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: 30 }}>
            <span style={{ fontSize: 40, display: "block", marginBottom: 12 }}>🏌️</span>
            <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>No upcoming events</p>
            {isAdmin && (
              <button
                className="btn btn-primary"
                style={{ marginTop: 16 }}
                onClick={() => setShowCreateEvent(true)}
              >
                Create First Event
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      {/* WEEKDAY PROPOSALS */}
      <section style={{ marginBottom: 24 }}>
        <div 
          className="section-header"
          onClick={() => setShowWeekdayForm(!showWeekdayForm)}
          style={{ cursor: "pointer" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="section-title">Weekday Golf</span>
            <span className="section-count">{weekdayProposals.length}</span>
          </div>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
            {showWeekdayForm ? "▲" : "▼"}
          </span>
        </div>

        {showWeekdayForm && (
          <div style={{ marginBottom: 16 }}>
            <CreateProposalForm
              onCreated={() => {}}
              favouriteCourses={favouriteCourses}
            />
          </div>
        )}

        {weekdayProposals.length > 0 ? (
          <div>
            {weekdayProposals.map((proposal) => (
              <WeekdayProposalCard
                key={proposal.id}
                proposal={proposal}
                allUsers={allUsers}
              />
            ))}
          </div>
        ) : (
          <div
            className="card"
            style={{
              textAlign: "center",
              padding: 20,
              background: "var(--color-bg-secondary)",
            }}
          >
            <p style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: 14 }}>
              No weekday proposals yet
            </p>
            {!showWeekdayForm && (
              <button
                className="btn btn-ghost"
                style={{ marginTop: 12 }}
                onClick={() => setShowWeekdayForm(true)}
              >
                + Propose a date
              </button>
            )}
          </div>
        )}
      </section>

      {/* CREATE EVENT MODAL */}
      {showCreateEvent && (
        <div className="modal-backdrop" onClick={() => setShowCreateEvent(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, marginBottom: 20 }}>Create Event</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 4, color: "var(--color-text-secondary)" }}>
                  Title
                </label>
                <input
                  className="input"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g. Saturday Morning Golf"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 4, color: "var(--color-text-secondary)" }}>
                  Date
                </label>
                <input
                  className="input"
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 4, color: "var(--color-text-secondary)" }}>
                  Tee Time
                </label>
                <input
                  className="input"
                  value={newEvent.tee}
                  onChange={(e) => setNewEvent({ ...newEvent, tee: e.target.value })}
                  placeholder="e.g. 7:00 AM"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 4, color: "var(--color-text-secondary)" }}>
                  Course
                </label>
                <CourseAutocomplete
                  initialValue={newEvent.course.name}
                  onSelect={(course) => setNewEvent({ ...newEvent, course })}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 4, color: "var(--color-text-secondary)" }}>
                  Notes (optional)
                </label>
                <textarea
                  className="input"
                  rows={2}
                  value={newEvent.notes}
                  onChange={(e) => setNewEvent({ ...newEvent, notes: e.target.value })}
                  placeholder="Any extra details..."
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleCreateEvent}
                disabled={creating || !newEvent.title.trim() || !newEvent.date}
              >
                {creating ? "Creating..." : "Create Event"}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setShowCreateEvent(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}