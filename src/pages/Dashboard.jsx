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
  const [showModal, setShowModal] = useState(false);

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

  const openCreateModal = (day) => {
    setSelectedDay(new Date(currentYear, currentMonth, day));
    setShowModal(true);
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
    setShowModal(false);
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

      {/* ---------- HEADER ---------- */}
      <div className="page-header">
        <div className="page-header-title">
          <h1>Calendar</h1>
          <p>View scheduled rounds and create new events.</p>
        </div>
      </div>

      {/* ---------- CALENDAR CARD ---------- */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">
              {firstDayOfMonth.toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
              })}
            </h3>
            <p className="card-subtitle">Tap a date to create an event</p>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm" onClick={prevMonth}>‹</button>
            <button className="btn btn-ghost btn-sm" onClick={nextMonth}>›</button>
          </div>
        </div>

        {/* Weekday headers */}
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            fontSize: "13px",
            marginBottom: "8px",
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "10px",
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

            return (
              <div
                key={day}
                onClick={() => isAdmin && openCreateModal(day)}
                style={{
                  padding: "12px",
                  borderRadius: "var(--radius-m)",
                  background: dayEvents.length
                    ? "var(--color-surface-soft)"
                    : "var(--color-surface)",
                  border: "1px solid var(--color-border-subtle)",
                  cursor: isAdmin ? "pointer" : "default",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 500 }}>{day}</div>

                {dayEvents.length > 0 && (
  <div
    className={`calendar-day-badge ${
      dayEvents.some(ev => ev.booked) 
        ? "calendar-badge-booked"
        : "calendar-badge-proposed"
    }`}
  >
    {dayEvents.some(ev => ev.booked) ? "Booked" : "Proposed"}
  </div>
)}
              </div>
            );
          })}
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
      {showModal && (
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
          onClick={() => setShowModal(false)}
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
