import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CourseAutocomplete from "../components/CourseAutocomplete";

export default function Dashboard() {
  const { user, isAdmin } = useAuth();

  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const [showDayModal, setShowDayModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form fields
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

  // -------------------------
  // Listen for events in realtime
  // -------------------------
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setEvents(list);
    });
    return () => unsub();
  }, []);

  // -------------------------
  // Calendar Calculations
  // -------------------------
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
    if (currentMonth === 0) setCurrentYear((y) => y - 1);
  };

  const nextMonth = () => {
    setCurrentMonth((m) => (m === 11 ? 0 : m + 1));
    if (currentMonth === 11) setCurrentYear((y) => y + 1);
  };

  // Helper for ordinal suffix
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const openDayModal = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const key = date.toISOString().split("T")[0];
    const dayEvents = eventsByDay[key] || [];
    
    setSelectedDay(date);
    setSelectedDayEvents(dayEvents);
    setShowDayModal(true);
  };

  const openCreateModal = () => {
    if (!selectedDay) return;
    
    // Auto-generate title like "⛳ Saturday 6th December"
    const dayOfWeek = selectedDay.toLocaleDateString("en-AU", { weekday: "long" });
    const dayNum = selectedDay.getDate();
    const month = selectedDay.toLocaleDateString("en-AU", { month: "long" });
    
    setTitle(`⛳ ${dayOfWeek} ${ordinal(dayNum)} ${month}`);
    setShowDayModal(false);
    setShowCreateModal(true);
  };

  // -------------------------
  // Create Event
  // -------------------------
  const createEvent = async () => {
    if (!title.trim() || !selectedDay) return;

    setCreating(true);

    let rsvpTimestamp = null;
    if (rsvpDeadline) {
      const [y, m, d] = rsvpDeadline.split("-");
      const dt = new Date(Number(y), Number(m) - 1, Number(d), 23, 59, 59);
      rsvpTimestamp = Timestamp.fromDate(dt);
    }

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

    // Reset form
    setTitle("");
    setCourse({ name: "", address: "", placeId: "", photoUrl: "" });
    setTee("");
    setNotes("");
    setRsvpDeadline("");
    setCreating(false);
    setShowCreateModal(false);
  };

  // -------------------------
  // Group events by day
  // -------------------------
  const eventsByDay = {};
  events.forEach((ev) => {
    const date = ev.date?.toDate ? ev.date.toDate() : null;
    if (!date) return;

    const key = date.toISOString().split("T")[0];
    if (!eventsByDay[key]) eventsByDay[key] = [];
    eventsByDay[key].push(ev);
  });

  return (
    <div className="page">

      {/* ---------- CALENDAR CARD ---------- */}
      <div className="card" style={{ marginBottom: 20, overflow: "hidden" }}>
        <div className="card-header">
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>
              {firstDayOfMonth.toLocaleDateString("en-AU", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              Tap a day to view events
            </p>
          </div>

          <div style={{ display: "flex", gap: 4 }}>
            <button 
              className="btn btn-ghost btn-sm" 
              onClick={prevMonth}
              style={{ padding: "8px 12px" }}
            >
              ←
            </button>
            <button 
              className="btn btn-ghost btn-sm" 
              onClick={nextMonth}
              style={{ padding: "8px 12px" }}
            >
              →
            </button>
          </div>
        </div>

        {/* Weekday headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            fontSize: "12px",
            marginBottom: "8px",
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
          }}
        >
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={i} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateObj = new Date(currentYear, currentMonth, day);
            const key = dateObj.toISOString().split("T")[0];
            const dayEvents = eventsByDay[key] || [];
            const isToday = 
              today.getDate() === day && 
              today.getMonth() === currentMonth && 
              today.getFullYear() === currentYear;
            const hasEvents = dayEvents.length > 0;

            return (
              <div
                key={day}
                onClick={() => openDayModal(day)}
                style={{
                  padding: "8px 4px",
                  borderRadius: 8,
                  background: hasEvents
                    ? dayEvents.some(ev => ev.booked) 
                      ? "var(--color-success-soft)" 
                      : "var(--color-primary-soft)"
                    : "transparent",
                  border: isToday 
                    ? "2px solid var(--color-primary)" 
                    : "1px solid var(--color-border-subtle)",
                  cursor: "pointer",
                  textAlign: "center",
                  minHeight: 44,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  transition: "transform 0.1s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ 
                  fontSize: "14px", 
                  fontWeight: isToday ? 700 : 500,
                  color: isToday ? "var(--color-primary)" : "inherit",
                }}>
                  {day}
                </div>

                {dayEvents.length > 0 && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: dayEvents.some(ev => ev.booked) 
                        ? "var(--color-success)" 
                        : "var(--color-primary)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ 
          display: "flex", 
          gap: 16, 
          marginTop: 12, 
          paddingTop: 12,
          borderTop: "1px solid var(--color-border-subtle)",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)" }} />
            <span>Proposed</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-success)" }} />
            <span>Booked</span>
          </div>
        </div>
      </div>

      {/* ---------- UPCOMING EVENTS ---------- */}
      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Upcoming Events</h3>
            <p className="card-subtitle">Your next rounds</p>
          </div>
        </div>

        <div className="card-body">
          {events.length === 0 && (
            <p className="text-muted">No upcoming events.</p>
          )}

          {[...events]
  .sort((a, b) => a.date.toMillis() - b.date.toMillis())
  .map((ev) => {
    const dateObj = ev.date.toDate();
    const myStatus = user && ev.responses ? ev.responses[user.uid] : null;
    const attendingCount = ev.responses 
      ? Object.values(ev.responses).filter(s => s === 'available').length 
      : 0;

    return (
      <Link
        key={ev.id}
        to={`/event/${ev.id}`}
        className="card simple"
        style={{
          padding: "14px",
          textDecoration: "none",
          borderLeft: myStatus === 'available' ? '3px solid var(--color-success)' : 'none',
        }}
      >

        {/* Title + Status Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <h3 style={{ margin: 0, fontSize: "16px" }}>{ev.title}</h3>

          <span
            className={`event-status-badge ${
              ev.booked ? "event-status-booked" : "event-status-proposed"
            }`}
          >
            {ev.booked ? "Booked" : "Proposed"}
          </span>
        </div>

        {/* Date + Time */}
        <p className="text-muted" style={{ margin: "4px 0" }}>
          {dateObj.toLocaleDateString("en-AU", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          {ev.tee && ` • ${ev.tee}`}
        </p>

        {/* Course */}
        {ev.courseName && (
          <p style={{ margin: "4px 0 0", fontSize: "14px" }}>
            📍 {ev.courseName}
          </p>
        )}

        {/* Player count + your status */}
        <div style={{ 
          marginTop: 8, 
          display: "flex", 
          alignItems: "center", 
          gap: 12,
          fontSize: 13,
        }}>
          <span style={{ color: "var(--color-text-muted)" }}>
            👥 {attendingCount}/4
          </span>
          {myStatus === 'available' && (
            <span style={{ color: "var(--color-success)", fontWeight: 500 }}>
              ✓ You're in
            </span>
          )}
          {!myStatus && !ev.booked && (
            <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>
              Awaiting response
            </span>
          )}
        </div>
      </Link>
    );
  })}
        </div>
      </div>

      {/* ---------- CREATE EVENT MODAL ---------- */}
      {showCreateModal && (
  <div className="modal-backdrop">
    <div className="modal" style={{ width: "100%", maxWidth: 480 }}>

      {/* Header */}
      <h2 style={{ marginTop: 0 }}>Create Event</h2>
      <p className="text-soft" style={{ marginTop: -4, marginBottom: 20 }}>
        {selectedDay?.toLocaleDateString("en-AU", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* FORM */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Event title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Event title</label>
          <input
            className="input"
            value={title}
            placeholder="e.g. Sunday Stableford"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Course */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Course (Google Maps search)</label>
          <CourseAutocomplete
            initialValue={course.name}
            onSelect={(payload) => setCourse(payload)}
          />
          <small className="text-soft">Pick the exact course from the results.</small>
        </div>

        {/* Tee time */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Tee time (optional)</label>
          <input
            className="input"
            value={tee}
            placeholder="e.g. 7:15am"
            onChange={(e) => setTee(e.target.value)}
          />
        </div>

        {/* Notes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Notes (optional)</label>
          <textarea
            className="input"
            placeholder="Add any notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ minHeight: 90 }}
          />
        </div>

        {/* RSVP Deadline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>RSVP Deadline</label>
          <input
            className="input"
            type="date"
            value={rsvpDeadline}
            onChange={(e) => setRsvpDeadline(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: 24 }}>
        <button
          className="btn btn-primary"
          style={{ width: "100%", marginBottom: 10 }}
          onClick={createEvent}
          disabled={creating}
        >
          {creating ? "Creating…" : "Create Event"}
        </button>

        <button
          className="btn btn-ghost"
          style={{ width: "100%" }}
          onClick={() => setShowCreateModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {/* ---------- DAY MODAL - Show events for selected day ---------- */}
      {showDayModal && (
        <div className="modal-backdrop" onClick={() => setShowDayModal(false)}>
          <div 
            className="modal" 
            style={{ width: "100%", maxWidth: 400 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ margin: 0, fontSize: 20 }}>
                {selectedDay?.toLocaleDateString("en-AU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </h2>
            </div>

            {/* Events on this day */}
            {selectedDayEvents.length > 0 ? (
              <div style={{ marginBottom: 20 }}>
                {selectedDayEvents.map((ev) => {
                  const attendingCount = ev.responses 
                    ? Object.values(ev.responses).filter(s => s === 'available').length 
                    : 0;
                  const myStatus = user && ev.responses ? ev.responses[user.uid] : null;
                  
                  return (
                    <Link
                      key={ev.id}
                      to={`/event/${ev.id}`}
                      onClick={() => setShowDayModal(false)}
                      style={{
                        display: "block",
                        padding: "14px",
                        background: "var(--color-surface-soft)",
                        borderRadius: 12,
                        marginBottom: 10,
                        textDecoration: "none",
                        color: "inherit",
                        borderLeft: myStatus === 'available' 
                          ? "3px solid var(--color-success)" 
                          : "3px solid transparent",
                      }}
                    >
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center",
                        marginBottom: 4,
                      }}>
                        <span style={{ fontWeight: 600 }}>{ev.title}</span>
                        <span style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          borderRadius: 99,
                          background: ev.booked ? "var(--color-success)" : "var(--color-warning)",
                          color: "#fff",
                          fontWeight: 600,
                        }}>
                          {ev.booked ? "BOOKED" : "PROPOSED"}
                        </span>
                      </div>
                      {ev.tee && (
                        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                          🕐 {ev.tee}
                        </div>
                      )}
                      {ev.courseName && (
                        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                          📍 {ev.courseName}
                        </div>
                      )}
                      <div style={{ 
                        marginTop: 8, 
                        fontSize: 12, 
                        display: "flex", 
                        alignItems: "center", 
                        gap: 8 
                      }}>
                        <span>👥 {attendingCount}/4</span>
                        {myStatus === 'available' && (
                          <span style={{ color: "var(--color-success)" }}>✓ You're in</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div style={{ 
                padding: "24px", 
                textAlign: "center", 
                color: "var(--color-text-muted)",
                background: "var(--color-surface-soft)",
                borderRadius: 12,
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🏌️</div>
                <div>No events on this day</div>
              </div>
            )}

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              {isAdmin && (
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={openCreateModal}
                >
                  + Create Event
                </button>
              )}
              <button
                className="btn btn-ghost"
                style={{ flex: isAdmin ? 0 : 1 }}
                onClick={() => setShowDayModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
