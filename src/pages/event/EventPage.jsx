import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { db, app } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

import CourseAutocomplete from "../../components/CourseAutocomplete";
import PlacePhoto from "../../components/PlacePhoto";
import GolfConditions from "../../components/GolfConditions";
import { triggerConfetti, showToast, hapticFeedback } from "../../utils/uiEffects";

// Build Google Calendar URL
function buildGoogleCalendarUrl(event, eventUrl) {
  if (!event) return "";
  const date = event.date?.toDate ? event.date.toDate() : null;
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const notes = event.notes || "";

  let startDateTime = date ? new Date(date) : new Date();
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
  }

  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  function toGoogleDateTime(d) {
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const min = String(d.getUTCMinutes()).padStart(2, "0");
    const ss = String(d.getUTCSeconds()).padStart(2, "0");
    return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
  }

  const datesParam = `${toGoogleDateTime(startDateTime)}/${toGoogleDateTime(endDateTime)}`;
  const calendarTitle = `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: calendarTitle,
    dates: datesParam,
    details: notes ? `${notes}\n\nEvent: ${eventUrl}` : `Event: ${eventUrl}`,
    location: courseName,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Build Google Maps URL from place ID
function buildGoogleMapsUrl(placeId, courseName) {
  if (placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(courseName || "Golf Course")}&query_place_id=${placeId}`;
  }
  if (courseName) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(courseName)}`;
  }
  return null;
}

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();

  const [event, setEvent] = useState(null);
  const [responses, setResponses] = useState({});
  const [myStatus, setMyStatus] = useState(null);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const [savingResponse, setSavingResponse] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [sendingReminder, setSendingReminder] = useState(false);
  const [form, setForm] = useState({
    title: "",
    notes: "",
    courseName: "",
    courseAddress: "",
    coursePlaceId: "",
    coursePhotoUrl: "",
    tee: "",
    rsvpDeadline: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const MAX_PLAYERS = 4;

  useEffect(() => {
    async function loadEvent() {
      try {
        const ref = doc(db, "events", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          navigate("/");
          return;
        }
        const data = snap.data();
        setEvent({ id: snap.id, ...data });

        const r = data.responses || {};
        setResponses(r);

        if (user) {
          setMyStatus(r[user.uid] || null);
        }

        setForm({
          title: data.title || "",
          notes: data.notes || "",
          courseName: data.courseName || "",
          courseAddress: data.courseAddress || "",
          coursePlaceId: data.coursePlaceId || "",
          coursePhotoUrl: data.coursePhotoUrl || "",
          tee: data.tee || "",
          rsvpDeadline: data.rsvpDeadline
            ? data.rsvpDeadline.toDate().toISOString().slice(0, 10)
            : "",
        });
      } catch (err) {
        console.error("Error loading event", err);
      } finally {
        setLoadingEvent(false);
      }
    }

    async function loadUsers() {
      try {
        const col = collection(db, "users");
        const snap = await getDocs(col);
        const users = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setAllUsers(users);
      } catch (e) {
        console.error("Error loading users", e);
      } finally {
        setLoadingUsers(false);
      }
    }

    loadEvent();
    loadUsers();
  }, [id, navigate, user]);

  async function updateResponse(newStatus) {
    if (!user || !event) return;
    setSavingResponse(true);
    hapticFeedback('light');
    
    try {
      const ref = doc(db, "events", event.id);
      const newResponses = { ...responses, [user.uid]: newStatus };
      await updateDoc(ref, { responses: newResponses });
      setResponses(newResponses);
      setMyStatus(newStatus);
      
      if (newStatus === 'available') {
        showToast("You're in! ⛳", 'success');
      } else if (newStatus === 'unavailable') {
        showToast("Response saved", 'default');
      }
    } catch (err) {
      console.error("Error updating response", err);
      showToast("Failed to save response", 'error');
    } finally {
      setSavingResponse(false);
    }
  }

  const removePlayer = async (uid) => {
    if (!event || !uid) return;
    hapticFeedback('medium');
    
    const ref = doc(db, "events", event.id);
    const updated = { ...responses };
    delete updated[uid];
    await updateDoc(ref, { responses: updated });
    setResponses(updated);
    if (uid === user?.uid) setMyStatus(null);
    showToast("Player removed", 'default');
  };

  const markBooked = async () => {
    if (!event) return;
    hapticFeedback('success');
    
    const ref = doc(db, "events", id);
    await updateDoc(ref, { booked: true, bookedAt: new Date().toISOString() });
    setEvent((prev) => prev ? { ...prev, booked: true, bookedAt: new Date().toISOString() } : prev);
    
    // Celebration! 🎉
    triggerConfetti();
    showToast("Round confirmed! ⛳🎉", 'success');
  };

  const unmarkBooked = async () => {
    if (!event) return;
    hapticFeedback('medium');
    
    const ref = doc(db, "events", id);
    await updateDoc(ref, { booked: false, bookedAt: null });
    setEvent((prev) => prev ? { ...prev, booked: false, bookedAt: null } : prev);
    showToast("Booking removed", 'default');
  };

  const sendRsvpReminder = async () => {
    if (!event) return;
    setSendingReminder(true);
    hapticFeedback('light');
    
    try {
      const functions = getFunctions(app, 'us-central1');
      const triggerReminder = httpsCallable(functions, 'triggerRsvpReminder');
      const result = await triggerReminder({ eventId: event.id });
      showToast(result.data.message || "Reminders sent! 📬", 'success');
    } catch (error) {
      console.error("Error sending reminder:", error);
      showToast("Failed to send reminder", 'error');
    } finally {
      setSendingReminder(false);
    }
  };

  async function saveEdits() {
    if (!event) return;
    try {
      const ref = doc(db, "events", event.id);
      let updatedFields = {
        title: form.title || event.title,
        notes: form.notes,
        courseName: form.courseName,
        courseAddress: form.courseAddress,
        coursePlaceId: form.coursePlaceId,
        coursePhotoUrl: form.coursePhotoUrl,
        tee: form.tee,
        rsvpDeadline: form.rsvpDeadline 
          ? Timestamp.fromDate(new Date(form.rsvpDeadline + "T23:59:59")) 
          : null,
      };
      await updateDoc(ref, updatedFields);
      setEvent((prev) => prev ? { ...prev, ...updatedFields } : prev);
      setEditing(false);
      showToast("Changes saved ✓", 'success');
    } catch (err) {
      console.error("Error saving edits", err);
      showToast("Could not save changes", 'error');
    }
  }

  async function deleteEvent() {
    if (!event || !window.confirm("Delete this event?")) return;
    hapticFeedback('heavy');
    
    try {
      await deleteDoc(doc(db, "events", event.id));
      showToast("Event deleted", 'default');
      navigate("/");
    } catch (err) {
      console.error("Error deleting event", err);
      showToast("Failed to delete", 'error');
    }
  }

  async function shareToClipboard() {
    if (!event) return;
    hapticFeedback('light');
    
    const date = event.date?.toDate ? event.date.toDate() : null;
    const dateStr = date?.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" }) || "";
    const eventUrl = window.location.href;

    let msg = `⛳ *${event.title || "Golf round"}*\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕒 ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${event.courseName}\n`;
    msg += `\n🔗 ${eventUrl}`;

    try {
      await navigator.clipboard.writeText(msg);
      showToast("Copied to clipboard! 📋", 'success');
    } catch {
      showToast("Could not copy", 'error');
    }
  }

  if (loadingEvent || loadingUsers) {
    return (
      <div className="page">
        <div className="card" style={{ maxWidth: 400, margin: "3rem auto", textAlign: "center" }}>
          <div className="skeleton" style={{ height: 24, width: '60%', margin: '0 auto 12px' }}></div>
          <div className="skeleton" style={{ height: 16, width: '40%', margin: '0 auto' }}></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="page">
        <div className="card" style={{ maxWidth: 400, margin: "3rem auto" }}>
          Event not found.
        </div>
      </div>
    );
  }

  const allAttendingIds = Object.entries(responses)
    .filter(([_, status]) => status === "available")
    .map(([uid]) => uid);
  
  const confirmedIds = allAttendingIds.slice(0, MAX_PLAYERS);
  const reserveIds = allAttendingIds.slice(MAX_PLAYERS);
  const isUserReserve = user && reserveIds.includes(user.uid);
  const isUserConfirmed = user && confirmedIds.includes(user.uid);

  const getUserName = (uid) => {
    const u = allUsers.find((x) => x.id === uid);
    return u?.username || u?.email?.split("@")[0] || "Unknown";
  };

  const mapsUrl = buildGoogleMapsUrl(event.coursePlaceId, event.courseName);

  return (
    <div className="page" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      
      {/* HEADER CARD */}
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Hero Image */}
        <div style={{ position: "relative", height: 180, background: "var(--color-bg-tertiary)" }}>
          <PlacePhoto
            placeId={event.coursePlaceId}
            alt={event.courseName || "Course"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Status badge overlay */}
          <div style={{ 
            position: "absolute", 
            top: 12, 
            right: 12,
            display: "flex",
            gap: 8,
          }}>
            <span className={`status-badge ${event.booked ? "status-badge--booked" : "status-badge--proposed"}`}>
              <span className="status-badge--dot" />
              {event.booked ? "Booked" : "Proposed"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 20 }}>
          {/* Title row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <div style={{ flex: 1 }}>
              {!editing ? (
                <h1 style={{ fontSize: 22, marginBottom: 4 }}>{event.title}</h1>
              ) : (
                <input
                  className="input"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Event title"
                  style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}
                />
              )}
            </div>

            {/* Menu button */}
            {isAdmin && (
              <div style={{ position: "relative" }}>
                {editing ? (
                  <div style={{ display: "flex", gap: 6 }}>
                    <button className="btn btn-primary btn-sm hover-lift press-effect" onClick={saveEdits}>Save</button>
                    <button className="btn btn-ghost btn-sm press-effect" onClick={() => setEditing(false)}>Cancel</button>
                  </div>
                ) : (
                  <button 
                    className="btn btn-ghost btn-sm press-effect"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    •••
                  </button>
                )}
                {showMenu && (
                  <>
                    <div style={{ position: "fixed", inset: 0, zIndex: 100 }} onClick={() => setShowMenu(false)} />
                    <div className="dropdown-menu" style={{ zIndex: 101 }}>
                      <button className="dropdown-item" onClick={() => { setEditing(true); setShowMenu(false); }}>
                        ✏️ Edit
                      </button>
                      <button className="dropdown-item" onClick={() => { shareToClipboard(); setShowMenu(false); }}>
                        📤 Share
                      </button>
                      {event.booked && (
                        <button className="dropdown-item" onClick={() => {
                          window.open(buildGoogleCalendarUrl(event, window.location.href), "_blank");
                          setShowMenu(false);
                        }}>
                          📅 Add to Calendar
                        </button>
                      )}
                      <button className="dropdown-item" onClick={() => {
                        event.booked ? unmarkBooked() : markBooked();
                        setShowMenu(false);
                      }}>
                        {event.booked ? "↩️ Unmark Booked" : "✅ Mark Booked"}
                      </button>
                      {!event.booked && (
                        <button 
                          className="dropdown-item" 
                          onClick={() => { sendRsvpReminder(); setShowMenu(false); }}
                          disabled={sendingReminder}
                        >
                          {sendingReminder ? "🔔 Sending..." : "🔔 Send RSVP Reminder"}
                        </button>
                      )}
                      <div className="dropdown-divider" />
                      <button className="dropdown-item dropdown-item--danger" onClick={() => { deleteEvent(); setShowMenu(false); }}>
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Quick details */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
            {!editing ? (
              <>
                {event.courseName && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                    <span style={{ fontSize: 16 }}>📍</span>
                    {mapsUrl ? (
                      <a 
                        href={mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: "var(--color-primary)", 
                          textDecoration: "none",
                        }}
                      >
                        {event.courseName}
                      </a>
                    ) : (
                      <span>{event.courseName}</span>
                    )}
                  </div>
                )}
                {event.tee && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                    <span style={{ fontSize: 16 }}>🕐</span>
                    <span>{event.tee}</span>
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                  <span style={{ fontSize: 16 }}>👥</span>
                  <span>{confirmedIds.length}/{MAX_PLAYERS}</span>
                </div>
              </>
            ) : (
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label>Course</label>
                  <CourseAutocomplete
                    initialValue={form.courseName}
                    onSelect={(payload) => setForm((f) => ({
                      ...f,
                      courseName: payload.name,
                      courseAddress: payload.address,
                      coursePlaceId: payload.placeId,
                      coursePhotoUrl: payload.photoUrl,
                    }))}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label>Tee Time</label>
                    <input
                      className="input"
                      type="time"
                      value={form.tee}
                      onChange={(e) => setForm((f) => ({ ...f, tee: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label>RSVP Deadline</label>
                    <input
                      className="input"
                      type="date"
                      value={form.rsvpDeadline}
                      onChange={(e) => setForm((f) => ({ ...f, rsvpDeadline: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label>Notes</label>
                  <textarea
                    className="input"
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Notes (if any, when not editing) */}
          {!editing && event.notes && (
            <p style={{ marginTop: 12, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              {event.notes}
            </p>
          )}

          {/* Golf Conditions */}
          {!editing && event.coursePlaceId && (
            <div style={{ marginTop: 16 }}>
              <GolfConditions
                placeId={event.coursePlaceId}
                tee={event.tee}
                date={event.date}
              />
            </div>
          )}
        </div>
      </div>

      {/* RSVP CARD */}
      {!editing && (
        <div className="card rsvp-card">
          {event.booked ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>🔒</span>
              <div>
                <div style={{ fontWeight: 500 }}>RSVPs closed</div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>This round is booked</div>
              </div>
              {isUserConfirmed && (
                <button 
                  className="btn btn-primary btn-sm hover-lift press-effect"
                  style={{ marginLeft: "auto" }}
                  onClick={() => window.open(buildGoogleCalendarUrl(event, window.location.href), "_blank")}
                >
                  📅 Add to Calendar
                </button>
              )}
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 12, fontWeight: 500 }}>Are you in?</div>
              {confirmedIds.length >= MAX_PLAYERS && !myStatus && (
                <div style={{ 
                  marginBottom: 12, 
                  padding: "8px 12px", 
                  background: "var(--color-warning-soft)", 
                  borderRadius: 6,
                  fontSize: 13,
                  color: "var(--color-warning)",
                }}>
                  Group is full — you'll be added to the reserve list
                </div>
              )}
              <div className="rsvp-buttons">
                <button
                  className={`rsvp-btn rsvp-btn--available ${myStatus === "available" ? "active" : ""}`}
                  onClick={() => updateResponse(myStatus === "available" ? null : "available")}
                  disabled={savingResponse}
                >
                  {savingResponse && myStatus === "available" ? "..." : "✓ I'm in"}
                </button>
                <button
                  className={`rsvp-btn rsvp-btn--unavailable ${myStatus === "unavailable" ? "active" : ""}`}
                  onClick={() => updateResponse(myStatus === "unavailable" ? null : "unavailable")}
                  disabled={savingResponse}
                >
                  {savingResponse && myStatus === "unavailable" ? "..." : "✗ Can't make it"}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Your status banner */}
      {myStatus && !editing && (
        <div style={{
          padding: "12px 16px",
          borderRadius: 8,
          background: myStatus === "available" 
            ? isUserReserve ? "var(--color-warning-soft)" : "var(--color-success-soft)"
            : "var(--color-bg-secondary)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          animation: "fade-up 0.3s ease-out",
        }}>
          <span style={{ fontSize: 18 }}>
            {myStatus === "available" ? (isUserReserve ? "🔔" : "✓") : "✗"}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>
              {myStatus === "available" 
                ? isUserReserve ? "You're on the reserve list" : "You're in!"
                : "You declined"}
            </div>
            {isUserReserve && (
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                Position {reserveIds.indexOf(user.uid) + 1} in queue
              </div>
            )}
          </div>
        </div>
      )}

      {/* PLAYERS CARD */}
      <div className="card">
        <div className="section-header">
          <span className="section-title">Players</span>
          <span className="section-count">{confirmedIds.length}/{MAX_PLAYERS}</span>
        </div>

        {confirmedIds.length === 0 ? (
          <div className="empty-state" style={{ padding: "24px 0" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🏌️</div>
            <div>No one has responded yet</div>
          </div>
        ) : (
          <div className="player-list stagger-list">
            {confirmedIds.map((uid) => {
              const isYou = uid === user?.uid;
              return (
                <div key={uid} className="player-item">
                  <div className="player-info">
                    <div className={`player-avatar ${isYou ? "player-avatar--you" : ""}`}>
                      {getUserName(uid).charAt(0).toUpperCase()}
                    </div>
                    <span className="player-name">
                      {getUserName(uid)}
                      {isYou && <span className="player-badge">You</span>}
                    </span>
                  </div>
                  {isAdmin && (
                    <button className="btn btn-ghost btn-sm press-effect" onClick={() => removePlayer(uid)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Reserve list */}
        {reserveIds.length > 0 && (
          <>
            <div className="divider" />
            <div className="section-header">
              <span className="section-title">Reserve List</span>
              <span className="section-count">{reserveIds.length}</span>
            </div>
            <div className="player-list stagger-list">
              {reserveIds.map((uid, idx) => {
                const isYou = uid === user?.uid;
                return (
                  <div key={uid} className="player-item" style={{ opacity: 0.7 }}>
                    <div className="player-info">
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--color-warning-soft)",
                        color: "var(--color-warning)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 600,
                      }}>
                        {idx + 1}
                      </div>
                      <span className="player-name">
                        {getUserName(uid)}
                        {isYou && <span className="player-badge" style={{ background: "var(--color-warning)" }}>You</span>}
                      </span>
                    </div>
                    {isAdmin && (
                      <button className="btn btn-ghost btn-sm press-effect" onClick={() => removePlayer(uid)}>
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}