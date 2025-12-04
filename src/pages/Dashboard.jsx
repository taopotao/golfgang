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
          <div className="calendar-legend-item"><div className="calendar-legend-dot calendar-legend-dot--proposed" /><span>Proposed</span></div>
          <div className="calendar-legend-item"><div className="calendar-legend-dot calendar-legend-dot--booked" /><span>Booked</span></div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Upcoming Events</h3>
            <p className="card-subtitle">Your next rounds</p>
          </div>
        </div>
        <div className="card-body">
          {events.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🏌️</div>
              <div className="empty-state-title">No events yet</div>
              <p>Tap a day on the calendar to create one</p>
            </div>
          ) : (
            <div className="stagger-list">
              {[...events].sort((a, b) => a.date.toMillis() - b.date.toMillis()).map((ev) => {
                const dateObj = ev.date.toDate();
                const myStatus = user && ev.responses ? getResponseStatus(ev.responses[user.uid]) : null;
                const attendingCount = ev.responses 
                  ? Object.values(ev.responses).filter(r => getResponseStatus(r) === 'available').length 
                  : 0;
                return (
                  <Link key={ev.id} to={`/event/${ev.id}`} className={`event-list-item ${myStatus === 'available' ? 'event-list-item--attending' : ''}`} style={{ textDecoration: "none" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontWeight: 500, color: "var(--color-text)" }}>{ev.title}</span>
                        <span className={`status-badge ${ev.booked ? "status-badge--booked" : "status-badge--proposed"}`}>{ev.booked ? "Booked" : "Proposed"}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                        {dateObj.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                        {ev.tee && ` • ${ev.tee}`}
                        {ev.courseName && ` • ${ev.courseName}`}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6, fontSize: 12 }}>
                        <span style={{ color: "var(--color-text-tertiary)" }}>👥 {attendingCount}/4</span>
                        {myStatus === 'available' && <span style={{ color: "var(--color-success)", fontWeight: 500 }}>✓ You're in</span>}
                        {!myStatus && !ev.booked && <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>Awaiting response</span>}
                      </div>
                    </div>
                    <div style={{ fontSize: 18, color: "var(--color-text-tertiary)" }}>→</div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

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
                    <Link key={ev.id} to={`/event/${ev.id}`} onClick={() => setShowDayModal(false)} style={{ display: "block", padding: 14, background: "var(--color-bg-secondary)", borderRadius: 8, marginBottom: 8, textDecoration: "none", color: "inherit", borderLeft: myStatus === 'available' ? "3px solid var(--color-success)" : "3px solid transparent" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{ev.title}</span>
                        <span className={`status-badge ${ev.booked ? "status-badge--booked" : "status-badge--proposed"}`}>{ev.booked ? "Booked" : "Proposed"}</span>
                      </div>
                      {ev.tee && <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>🕐 {ev.tee}</div>}
                      {ev.courseName && <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>📍 {ev.courseName}</div>}
                      <div style={{ marginTop: 8, fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                        <span>👥 {attendingCount}/4</span>
                        {myStatus === 'available' && <span style={{ color: "var(--color-success)" }}>✓ You're in</span>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div style={{ padding: 24, textAlign: "center", color: "var(--color-text-secondary)", background: "var(--color-bg-secondary)", borderRadius: 8, marginBottom: 20 }}>
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
              <div><label>Tee time</label><input className="input" value={tee} placeholder="e.g. 7:15am" onChange={(e) => setTee(e.target.value)} /></div>
              <div><label>Notes (optional)</label><textarea className="input" placeholder="Add any notes..." value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} /></div>
              <div><label>RSVP Deadline</label><input className="input" type="date" value={rsvpDeadline} onChange={(e) => setRsvpDeadline(e.target.value)} /></div>
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
              <button className="btn btn-primary hover-lift press-effect" style={{ flex: 1 }} onClick={createEvent} disabled={creating}>{creating ? "Creating…" : "Create Event"}</button>
              <button className="btn btn-ghost press-effect" onClick={() => setShowCreateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}