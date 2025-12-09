import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CourseAutocomplete from "../components/CourseAutocomplete";
import { showToast, hapticFeedback } from "../utils/uiEffects";

// Helper to get status from response (handles both old string format and new object format)
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response; // Legacy format: "available"
  return response.status; // New format: { status: "available", preferences: {...} }
};

export default function Dashboard() {
  const { user, isAdmin } = useAuth();

  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const [showDayModal, setShowDayModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [title, setTitle] = useState("");
  const [course, setCourse] = useState({
    name: "",
    address: "",
    placeId: "",
    photoUrl: "",
  });
  const [rsvpDeadline, setRsvpDeadline] = useState("");
  const [tee, setTee] = useState("");
  const [notes, setNotes] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setEvents(list);
    });
    return () => unsub();
  }, []);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    hapticFeedback('light');
    setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
    if (currentMonth === 0) setCurrentYear((y) => y - 1);
  };

  const nextMonth = () => {
    hapticFeedback('light');
    setCurrentMonth((m) => (m === 11 ? 0 : m + 1));
    if (currentMonth === 11) setCurrentYear((y) => y + 1);
  };

  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const openDayModal = (day) => {
    hapticFeedback('light');
    const date = new Date(currentYear, currentMonth, day);
    const key = date.toISOString().split("T")[0];
    const dayEvents = eventsByDay[key] || [];
    setSelectedDay(date);
    setSelectedDayEvents(dayEvents);
    setShowDayModal(true);
  };

  const openCreateModal = () => {
    if (!selectedDay) return;
    const dayOfWeek = selectedDay.toLocaleDateString("en-AU", { weekday: "long" });
    const dayNum = selectedDay.getDate();
    const month = selectedDay.toLocaleDateString("en-AU", { month: "long" });
    setTitle(`⛳ ${dayOfWeek} ${ordinal(dayNum)} ${month}`);
    setShowDayModal(false);
    setShowCreateModal(true);
  };

  const createEvent = async () => {
    if (!title.trim() || !selectedDay) return;
    setCreating(true);
    hapticFeedback('medium');

    let rsvpTimestamp = null;
    if (rsvpDeadline) {
      const [y, m, d] = rsvpDeadline.split("-");
      const dt = new Date(Number(y), Number(m) - 1, Number(d), 23, 59, 59);
      rsvpTimestamp = Timestamp.fromDate(dt);
    }

    try {
      await addDoc(collection(db, "events"), {
        title: title.trim(),
        date: Timestamp.fromDate(selectedDay),
        responses: {},
        courseName: course.name || "",
        courseAddress: course.address || "",
        coursePlaceId: course.placeId || "",
        coursePhotoUrl: course.photoUrl || "",
        tee: tee.trim(),
        notes: notes.trim(),
        rsvpDeadline: rsvpTimestamp,
        booked: false,
        bookedAt: null,
      });
      setTitle("");
      setCourse({ name: "", address: "", placeId: "", photoUrl: "" });
      setTee("");
      setNotes("");
      setRsvpDeadline("");
      setShowCreateModal(false);
      showToast("Event created! ⛳", 'success');
    } catch (error) {
      console.error("Error creating event:", error);
      showToast("Failed to create event", 'error');
    }
    setCreating(false);
  };

  const eventsByDay = {};
  events.forEach((ev) => {
    const date = ev.date?.toDate ? ev.date.toDate() : null;
    if (!date) return;
    const key = date.toISOString().split("T")[0];
    if (!eventsByDay[key]) eventsByDay[key] = [];
    eventsByDay[key].push(ev);
  });

  // Event card styles based on booked status
  const getEventCardStyle = (isBooked, myStatus) => {
    const baseStyle = {
      textDecoration: "none",
      display: 'block',
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (isBooked) {
      // BOOKED: Green theme - very obvious
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
        border: '2px solid #4caf50',
        boxShadow: '0 2px 8px rgba(76, 175, 80, 0.15)',
      };
    } else {
      // PROPOSED: Blue/gray theme - more subtle
      return {
        ...baseStyle,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderLeft: '4px solid #ff9800',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      };
    }
  };

  return (
    <div className="page">
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 2 }}>
              {firstDayOfMonth.toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
            </h2>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>
              Tap a day to view or create events
            </p>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="btn btn-ghost btn-sm press-effect" onClick={prevMonth}>←</button>
            <button className="btn btn-ghost btn-sm press-effect" onClick={nextMonth}>→</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} style={{ textAlign: "center", fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", padding: "4px 0" }}>{d}</div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateObj = new Date(currentYear, currentMonth, day);
            const key = dateObj.toISOString().split("T")[0];
            const dayEvents = eventsByDay[key] || [];
            const isToday = today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
            const hasBooked = dayEvents.some(ev => ev.booked);
            const hasProposed = dayEvents.some(ev => !ev.booked);
            const hasEvents = dayEvents.length > 0;

            let bgStyle = {};
            if (hasBooked) bgStyle = { background: "var(--color-success-soft)" };
            else if (hasProposed) bgStyle = { background: "var(--color-warning-soft)" };

            return (
              <div key={day} onClick={() => openDayModal(day)} className="calendar-day" style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 6, cursor: "pointer", border: isToday ? "2px solid var(--color-primary)" : "1px solid transparent", ...bgStyle }}>
                <div style={{ fontSize: 14, fontWeight: isToday ? 600 : 400, color: isToday ? "var(--color-primary)" : "var(--color-text)" }}>{day}</div>
                {hasEvents && <div style={{ width: 6, height: 6, borderRadius: "50%", marginTop: 2, background: hasBooked ? "var(--color-success)" : "var(--color-warning)" }} />}
              </div>
            );
          })}
        </div>

        <div className="calendar-legend">
          <div className="calendar-legend-item"><div className="calendar-legend-dot" style={{ background: '#ff9800' }} /><span>Proposed</span></div>
          <div className="calendar-legend-item"><div className="calendar-legend-dot" style={{ background: '#4caf50' }} /><span>Booked</span></div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div style={{ marginBottom: 16 }}>
        <div className="section-header">
          <span className="section-title">Upcoming Events</span>
          <span className="section-count">{events.length}</span>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="card">
          <div className="empty-state">
            <div className="empty-state-icon">🏌️</div>
            <div className="empty-state-title">No events yet</div>
            <p>Tap a day on the calendar to create one</p>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[...events].sort((a, b) => a.date.toMillis() - b.date.toMillis()).map((ev) => {
            const dateObj = ev.date.toDate();
            const myStatus = user && ev.responses ? getResponseStatus(ev.responses[user.uid]) : null;
            const attendingCount = ev.responses 
              ? Object.values(ev.responses).filter(r => getResponseStatus(r) === 'available').length 
              : 0;
            
            return (
              <Link 
                key={ev.id} 
                to={`/event/${ev.id}`} 
                style={getEventCardStyle(ev.booked, myStatus)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = ev.booked 
                    ? '0 6px 16px rgba(76, 175, 80, 0.25)' 
                    : '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = ev.booked 
                    ? '0 2px 8px rgba(76, 175, 80, 0.15)' 
                    : '0 1px 3px rgba(0,0,0,0.06)';
                }}
              >
                {/* Status indicator bar for booked events */}
                {ev.booked && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: '#4caf50',
                  }} />
                )}

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ 
                      fontWeight: 600, 
                      fontSize: 15,
                      color: "var(--color-text)",
                      display: 'block',
                      marginBottom: 4,
                    }}>
                      {ev.title}
                    </span>
                    <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                      {dateObj.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                      {ev.tee && ` • ${ev.tee}`}
                    </div>
                    {ev.courseName && (
                      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 2 }}>
                        📍 {ev.courseName}
                      </div>
                    )}
                  </div>
                  
                  {/* Status badge - much more prominent */}
                  <div style={{
                    padding: '6px 12px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap',
                    ...(ev.booked ? {
                      background: '#4caf50',
                      color: 'white',
                    } : {
                      background: '#fff3e0',
                      color: '#e65100',
                      border: '1px solid #ffcc80',
                    })
                  }}>
                    {ev.booked ? '✓ Booked' : 'Proposed'}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
                    <span style={{ 
                      color: "var(--color-text-secondary)",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                      👥 {attendingCount}/4
                    </span>
                    {myStatus === 'available' && (
                      <span style={{ 
                        color: "#4caf50", 
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}>
                        ✓ You're in
                      </span>
                    )}
                    {!myStatus && !ev.booked && (
                      <span style={{ 
                        color: "#e65100", 
                        fontWeight: 500,
                      }}>
                        Awaiting your response
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: 18, color: "var(--color-text-tertiary)" }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {showDayModal && (
        <div className="modal-backdrop" onClick={() => setShowDayModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, marginBottom: 16 }}>{selectedDay?.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })}</h2>
            {selectedDayEvents.length > 0 ? (
              <div style={{ marginBottom: 20 }} className="stagger-list">
                {selectedDayEvents.map((ev) => {
                  const attendingCount = ev.responses 
                    ? Object.values(ev.responses).filter(r => getResponseStatus(r) === 'available').length 
                    : 0;
                  const myStatus = user && ev.responses ? getResponseStatus(ev.responses[user.uid]) : null;
                  return (
                    <Link 
                      key={ev.id} 
                      to={`/event/${ev.id}`} 
                      onClick={() => setShowDayModal(false)} 
                      style={{ 
                        display: "block", 
                        padding: 14, 
                        borderRadius: 8, 
                        marginBottom: 8, 
                        textDecoration: "none", 
                        color: "inherit",
                        ...(ev.booked ? {
                          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                          border: '2px solid #4caf50',
                        } : {
                          background: "var(--color-bg-tertiary)",
                          borderLeft: "4px solid #ff9800",
                        })
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{ev.title}</span>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: 12,
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          ...(ev.booked ? {
                            background: '#4caf50',
                            color: 'white',
                          } : {
                            background: '#fff3e0',
                            color: '#e65100',
                          })
                        }}>
                          {ev.booked ? "Booked" : "Proposed"}
                        </span>
                      </div>
                      {ev.tee && <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>🕐 {ev.tee}</div>}
                      {ev.courseName && <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>📍 {ev.courseName}</div>}
                      <div style={{ marginTop: 8, fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                        <span>👥 {attendingCount}/4</span>
                        {myStatus === 'available' && <span style={{ color: "#4caf50", fontWeight: 600 }}>✓ You're in</span>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div style={{ padding: 24, textAlign: "center", color: "var(--color-text-secondary)", background: "var(--color-bg-tertiary)", borderRadius: 8, marginBottom: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🏌️</div>
                <div>No events on this day</div>
              </div>
            )}
            <div style={{ display: "flex", gap: 8 }}>
              {isAdmin && <button className="btn btn-primary hover-lift press-effect" style={{ flex: 1 }} onClick={openCreateModal}>+ Create Event</button>}
              <button className="btn btn-ghost press-effect" style={{ flex: isAdmin ? 0 : 1 }} onClick={() => setShowDayModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2 style={{ marginTop: 0 }}>Create Event</h2>
            <p style={{ color: "var(--color-text-secondary)", marginTop: -4, marginBottom: 20, fontSize: 14 }}>{selectedDay?.toLocaleDateString("en-AU", { weekday: "long", month: "long", day: "numeric" })}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div><label>Event title</label><input className="input" value={title} placeholder="e.g. Sunday Stableford" onChange={(e) => setTitle(e.target.value)} /></div>
              <div><label>Course</label><CourseAutocomplete initialValue={course.name} onSelect={(payload) => setCourse(payload)} /></div>
              <div><label>Tee time</label><input className="input" value={tee} placeholder="e.g. 6:30 AM" onChange={(e) => setTee(e.target.value)} /></div>
              <div><label>RSVP Deadline (optional)</label><input className="input" type="date" value={rsvpDeadline} onChange={(e) => setRsvpDeadline(e.target.value)} /></div>
              <div><label>Notes (optional)</label><textarea className="input" rows={2} value={notes} placeholder="Any extra details..." onChange={(e) => setNotes(e.target.value)} /></div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              <button className="btn btn-primary hover-lift press-effect" style={{ flex: 1 }} onClick={createEvent} disabled={creating || !title.trim()}>
                {creating ? "Creating..." : "Create Event"}
              </button>
              <button className="btn btn-ghost press-effect" onClick={() => setShowCreateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}