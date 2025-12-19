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
  
  // Active weekend polls (open, deadline in future) - show ALL, not just one
  const activePolls = weekendPolls
    .filter((p) => p.status === "open" && p.deadline?.toDate() > now)
    .sort((a, b) => a.weekendOf?.toMillis() - b.weekendOf?.toMillis()); // Sort by weekend date (soonest first)
  
  // Upcoming events (future, sorted by date)
  const upcomingEvents = events
    .filter((ev) => {
      const evDate = ev.date?.toDate();
      return evDate && evDate >= now;
    })
    .sort((a, b) => a.date.toMillis() - b.date.toMillis());

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
  const EventCard = ({ event }) => {
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
          padding: "16px 18px",
          borderRadius: 16,
          textDecoration: "none",
          color: "inherit",
          background: event.booked 
            ? "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" 
            : "white",
          border: event.booked 
            ? "1px solid #86efac" 
            : "1px solid var(--color-border)",
          boxShadow: event.booked
            ? "0 2px 8px rgba(34, 197, 94, 0.1)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          transition: "all 0.2s ease",
        }}
      >
        {/* Top row - date and badge */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: 10,
        }}>
          <span style={{ 
            fontSize: 13, 
            color: "var(--color-text-secondary)",
            fontWeight: 500,
          }}>
            {dateObj?.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
            {event.tee && <span style={{ color: "var(--color-text-tertiary)" }}> • {event.tee}</span>}
          </span>
          <span style={{
            padding: "5px 10px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 600,
            background: event.booked ? "#22c55e" : "#e0e7ff",
            color: event.booked ? "white" : "#4f46e5",
          }}>
            {event.booked ? "✓ Booked" : "Open"}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ 
          margin: "0 0 6px 0", 
          fontSize: 17, 
          fontWeight: 600,
          color: "var(--color-text)",
        }}>
          {event.title}
        </h3>

        {/* Course */}
        {event.courseName && (
          <div style={{ 
            fontSize: 14, 
            color: "var(--color-text-secondary)", 
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <span>📍</span>
            <span>{event.courseName}</span>
          </div>
        )}

        {/* Footer - players and status */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          paddingTop: 10,
          borderTop: "1px solid var(--color-border)",
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 6,
            fontSize: 13,
            color: "var(--color-text-secondary)",
          }}>
            <span>👥</span>
            <span>{attendingCount}/4 players</span>
          </div>
          
          {myStatus === "available" ? (
            <span style={{ 
              fontSize: 13, 
              fontWeight: 600, 
              color: "#22c55e",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}>
              <span>✓</span> You're in
            </span>
          ) : !event.booked ? (
            <span style={{ 
              fontSize: 13, 
              color: "#6366f1",
              fontWeight: 500,
            }}>
              RSVP →
            </span>
          ) : null}
        </div>
      </Link>
    );
  };

  if (loading) {
    return (
      <div className="page">
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: 200,
        }}>
          <div style={{ 
            width: 40, 
            height: 40, 
            border: "3px solid var(--color-border)",
            borderTopColor: "var(--color-primary)",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }} />
        </div>
      </div>
    );
  }

  return (
    <div className="page" style={{ paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: 24,
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>What's on</h1>
          <p style={{ margin: "4px 0 0 0", fontSize: 14, color: "var(--color-text-secondary)" }}>
            {upcomingEvents.length} upcoming {upcomingEvents.length === 1 ? "round" : "rounds"}
          </p>
        </div>
        {isAdmin && (
          <button
            className="btn btn-primary"
            onClick={() => setShowCreateEvent(true)}
            style={{ 
              borderRadius: 12,
              padding: "10px 16px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            + Event
          </button>
        )}
      </div>

   {/* WEEKEND POLLS */}
   {activePolls.length > 0 && (
   <section style={{ marginBottom: 28 }}>
       <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {activePolls.map((poll) => (
        <WeekendPoll key={poll.id} poll={poll} allUsers={allUsers} />
       ))}
     </div>
   </section>
 )}

      {/* NEEDS YOUR RESPONSE */}
      {needsResponse.length > 0 && (
        <section style={{ marginBottom: 28 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f59e0b",
              animation: "pulse 2s infinite",
            }} />
            <span style={{ 
              fontSize: 13, 
              fontWeight: 600, 
              color: "var(--color-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}>
              Needs your response ({needsResponse.length})
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {needsResponse.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* UPCOMING EVENTS */}
      <section style={{ marginBottom: 28 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}>
          <span style={{ 
            fontSize: 13, 
            fontWeight: 600, 
            color: "var(--color-text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
            Upcoming Rounds
          </span>
          <span style={{ 
            fontSize: 12, 
            color: "var(--color-text-tertiary)",
            background: "var(--color-bg-secondary)",
            padding: "4px 10px",
            borderRadius: 12,
          }}>
            {upcomingEvents.length}
          </span>
        </div>
        
        {upcomingEvents.length === 0 ? (
          <div style={{ 
            textAlign: "center", 
            padding: "40px 20px",
            background: "var(--color-bg-secondary)",
            borderRadius: 16,
            border: "2px dashed var(--color-border)",
          }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 12 }}>🏌️</span>
            <p style={{ 
              color: "var(--color-text-secondary)", 
              margin: "0 0 16px 0",
              fontSize: 15,
            }}>
              No upcoming rounds scheduled
            </p>
            {isAdmin && (
              <button
                className="btn btn-primary"
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
      <section>
        <div 
          onClick={() => setShowWeekdayForm(!showWeekdayForm)}
          style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
            cursor: "pointer",
            padding: "12px 16px",
            background: "var(--color-bg-secondary)",
            borderRadius: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>📅</span>
            <span style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              color: "var(--color-text)",
            }}>
              Weekday Golf
            </span>
            {weekdayProposals.length > 0 && (
              <span style={{ 
                fontSize: 12, 
                color: "var(--color-text-tertiary)",
                background: "var(--color-surface)",
                padding: "2px 8px",
                borderRadius: 10,
              }}>
                {weekdayProposals.length}
              </span>
            )}
          </div>
          <span style={{ 
            fontSize: 12, 
            color: "var(--color-text-tertiary)",
            transform: showWeekdayForm ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
          }}>
            ▼
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

        {weekdayProposals.length > 0 && (
          <div>
            {weekdayProposals.map((proposal) => (
              <WeekdayProposalCard
                key={proposal.id}
                proposal={proposal}
                allUsers={allUsers}
              />
            ))}
          </div>
        )}
      </section>

      {/* CREATE EVENT MODAL */}
      {showCreateEvent && (
        <div className="modal-backdrop" onClick={() => setShowCreateEvent(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ borderRadius: 20 }}>
            <h2 style={{ margin: "0 0 20px 0", fontSize: 20 }}>Create Event</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)", fontWeight: 500 }}>
                  Title
                </label>
                <input
                  className="input"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g. Saturday Morning Golf"
                  style={{ borderRadius: 10 }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)", fontWeight: 500 }}>
                    Date
                  </label>
                  <input
                    className="input"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)", fontWeight: 500 }}>
                    Tee Time
                  </label>
                  <input
                    className="input"
                    type="time"
                    value={newEvent.tee}
                    onChange={(e) => setNewEvent({ ...newEvent, tee: e.target.value })}
                    style={{ borderRadius: 10 }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)", fontWeight: 500 }}>
                  Course
                </label>
                <CourseAutocomplete
                  initialValue={newEvent.course.name}
                  onSelect={(course) => setNewEvent({ ...newEvent, course })}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, color: "var(--color-text-secondary)", fontWeight: 500 }}>
                  Notes (optional)
                </label>
                <textarea
                  className="input"
                  rows={2}
                  value={newEvent.notes}
                  onChange={(e) => setNewEvent({ ...newEvent, notes: e.target.value })}
                  placeholder="Any extra details..."
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button
                className="btn btn-ghost"
                onClick={() => setShowCreateEvent(false)}
                style={{ flex: 1, borderRadius: 10 }}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 2, borderRadius: 10 }}
                onClick={handleCreateEvent}
                disabled={creating || !newEvent.title.trim() || !newEvent.date}
              >
                {creating ? "Creating..." : "Create Event"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}