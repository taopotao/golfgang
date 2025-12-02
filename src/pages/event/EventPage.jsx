import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import ResponseButtons from "../../components/ResponseButtons";
import CourseAutocomplete from "../../components/CourseAutocomplete";
import CourseMiniMap from "../../components/CourseMiniMap";
import GolfConditions from "../../components/GolfConditions";
import PlacePhoto from "../../components/PlacePhoto";

// Build Google Calendar URL
function buildGoogleCalendarUrl(event, eventUrl) {
  if (!event) return "";

  const date = event.date?.toDate ? event.date.toDate() : null;
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const notes = event.notes || "";

  // parse tee time "14:30" to hours / minutes
  let startDateTime = date ? new Date(date) : new Date();
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
  }

  // end time = start + 4.5 hours (typical round)
  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  function toGoogleDateTime(d) {
    // YYYYMMDDTHHMMSSZ - use UTC
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const min = String(d.getUTCMinutes()).padStart(2, "0");
    const ss = String(d.getUTCSeconds()).padStart(2, "0");
    return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
  }

  const datesParam = `${toGoogleDateTime(startDateTime)}/${toGoogleDateTime(
    endDateTime
  )}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title || "Golf round",
    dates: datesParam,
    details: notes
      ? `${notes}\n\nEvent details: ${eventUrl}`
      : `Event details: ${eventUrl}`,
    location: courseName,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
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

  // Max players for a group (4 is standard)
  const MAX_PLAYERS = 4;

  // ---------------------------------------------------------------------------
  // Load event + users
  // ---------------------------------------------------------------------------
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

        if (data.title) {
          setForm((f) => ({ ...f, title: data.title }));
        }
        setForm((f) => ({
          ...f,
          notes: data.notes || "",
          courseName: data.courseName || "",
          courseAddress: data.courseAddress || "",
          coursePlaceId: data.coursePlaceId || "",
          coursePhotoUrl: data.coursePhotoUrl || "",
          tee: data.tee || "",
          rsvpDeadline: data.rsvpDeadline
            ? data.rsvpDeadline.toDate().toISOString().slice(0, 10)
            : "",
        }));
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

  // ---------------------------------------------------------------------------
  // Update RSVP
  // ---------------------------------------------------------------------------
  async function updateResponse(newStatus) {
    if (!user || !event) return;

    setSavingResponse(true);
    try {
      const ref = doc(db, "events", event.id);

      const newResponses = {
        ...responses,
        [user.uid]: newStatus,
      };

      await updateDoc(ref, {
        responses: newResponses,
      });

      setResponses(newResponses);
      setMyStatus(newStatus);
    } catch (err) {
      console.error("Error updating response", err);
    } finally {
      setSavingResponse(false);
    }
  }

  // Admin removing a player from the event
  const removePlayer = async (uid) => {
    if (!event || !uid) return;

    const ref = doc(db, "events", event.id);

    const updated = { ...responses };
    delete updated[uid];

    await updateDoc(ref, { responses: updated });
    setResponses(updated);

    if (uid === user?.uid) {
      setMyStatus(null);
    }
  };

  // ---------------------------------------------------------------------------
  // Mark / unmark as booked
  // ---------------------------------------------------------------------------
  const markBooked = async () => {
    if (!event) return;

    const ref = doc(db, "events", id);

    await updateDoc(ref, {
      booked: true,
      bookedAt: new Date().toISOString(),
    });

    setEvent((prev) =>
      prev
        ? {
            ...prev,
            booked: true,
            bookedAt: new Date().toISOString(),
          }
        : prev
    );
  };

  const unmarkBooked = async () => {
    if (!event) return;

    const ref = doc(db, "events", id);

    await updateDoc(ref, {
      booked: false,
      bookedAt: null,
    });

    setEvent((prev) =>
      prev
        ? {
            ...prev,
            booked: false,
            bookedAt: null,
          }
        : prev
    );
  };

  // ---------------------------------------------------------------------------
  // Save edits
  // ---------------------------------------------------------------------------
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
      };

      if (form.rsvpDeadline) {
        updatedFields.rsvpDeadline = Timestamp.fromDate(
          new Date(form.rsvpDeadline + "T23:59:59")
        );
      } else {
        updatedFields.rsvpDeadline = null;
      }

      await updateDoc(ref, updatedFields);

      setEvent((prev) =>
        prev ? { ...prev, ...updatedFields } : prev
      );

      setEditing(false);
    } catch (err) {
      console.error("Error saving edits", err);
      alert("Could not save changes.");
    }
  }

  // ---------------------------------------------------------------------------
  // Delete event
  // ---------------------------------------------------------------------------
  async function deleteEvent() {
    if (!event) return;

    if (!window.confirm("Delete this event?")) return;

    try {
      const ref = doc(db, "events", event.id);
      await deleteDoc(ref);
      navigate("/");
    } catch (err) {
      console.error("Error deleting event", err);
      alert("Could not delete this event.");
    }
  }

  // ---------------------------------------------------------------------------
  // WhatsApp share
  // ---------------------------------------------------------------------------
  async function shareToClipboard() {
    if (!event) return;

    // Build the share message
    const date = event.date?.toDate ? event.date.toDate() : null;
    const dateStr = date
      ? date.toLocaleDateString("en-AU", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      : "";

    const eventUrl = window.location.href;

    let msg = `⛳ *${event.title || "Golf round"}*\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕒 Tee time: ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${event.courseName}\n`;

    // Get player names
    const attendingIds = Object.entries(responses)
      .filter(([_, status]) => status === "available")
      .map(([uid]) => uid);
    
    if (attendingIds.length > 0) {
      const playerNames = attendingIds.map((uid) => {
        const user = allUsers.find((u) => u.id === uid);
        return user?.username || user?.email?.split("@")[0] || "Unknown";
      });
      msg += `👥 Playing: ${playerNames.join(", ")}\n`;
    } else {
      msg += `👥 No players yet\n`;
    }

    if (event.booked) {
      msg += "✅ *This round is booked*\n";
    } else {
      msg += "🟦 *RSVPs open*\n";
    }

    msg += `\n🔗 Event details:\n${eventUrl}`;

    try {
      await navigator.clipboard.writeText(msg);
      alert("Message copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = msg;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Message copied to clipboard!");
    }
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  if (loadingEvent || loadingUsers) {
    return (
      <div className="page">
        <div className="card" style={{ maxWidth: 400, margin: "3rem auto" }}>
          Loading…
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

  const date = event.date?.toDate ? event.date.toDate() : null;

  const attendingIds = Object.entries(responses)
    .filter(([_, status]) => status === "available")
    .map(([uid]) => uid);

  const statusLabel = event.booked ? "Booked" : "Proposed";
  const statusColor = event.booked ? "#4ade80" : "#facc15";

  return (
    <div className="page">
      {/* YOUR STATUS BANNER - Shows if you've responded */}
      {myStatus && (
        <div 
          style={{
            padding: "10px 16px",
            marginBottom: 16,
            borderRadius: 10,
            background: myStatus === "available" 
              ? "var(--color-success-soft)" 
              : "var(--color-surface-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 18 }}>
              {myStatus === "available" ? "✅" : "❌"}
            </span>
            <span style={{ fontWeight: 500 }}>
              {myStatus === "available" ? "You're going" : "You declined"}
            </span>
            <span style={{ color: "var(--color-text-muted)" }}>
              • {attendingIds.length} other{attendingIds.length !== 1 ? "s" : ""} going
            </span>
          </div>
          {event.booked && myStatus === "available" && (
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => {
                const url = window.location.href;
                const calUrl = buildGoogleCalendarUrl(event, url);
                window.open(calUrl, "_blank");
              }}
            >
              Add to Calendar
            </button>
          )}
        </div>
      )}

      {/* MAIN EVENT CARD */}
      <div className="card event-card">
        {/* Header row with title, status, and menu */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-start",
          marginBottom: 12,
          gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            {/* Title + Status */}
            <div className="event-title-row">
              {!editing ? (
                <h1 className="event-title">{event.title}</h1>
              ) : (
                <input
                  className="input"
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  style={{ fontSize: 18, width: "100%" }}
                />
              )}
              <span
                className="status-pill"
                style={{
                  background: event.booked
                    ? "linear-gradient(90deg,#22c55e,#4ade80)"
                    : "linear-gradient(90deg,#facc15,#f97316)",
                }}
              >
                <span className="status-dot" />
                {statusLabel}
              </span>
            </div>
            <p className="event-date">
              {date &&
                date.toLocaleDateString("en-AU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              {event.tee && ` • ${event.tee}`}
            </p>
          </div>

          {/* Action buttons / Menu */}
          {isAdmin && (
            <div style={{ position: "relative" }}>
              {editing ? (
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-primary btn-sm" onClick={saveEdits}>
                    Save
                  </button>
                  <button className="btn btn-ghost btn-sm" onClick={() => setEditing(false)}>
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => setShowMenu(!showMenu)}
                    style={{ padding: "8px 12px", fontSize: 18 }}
                  >
                    •••
                  </button>
                  {showMenu && (
                    <>
                      <div 
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 10,
                        }}
                        onClick={() => setShowMenu(false)}
                      />
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        marginTop: 4,
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border-subtle)",
                        borderRadius: 8,
                        boxShadow: "var(--shadow-soft)",
                        minWidth: 160,
                        zIndex: 20,
                        overflow: "hidden",
                      }}>
                        <button
                          onClick={() => { setEditing(true); setShowMenu(false); }}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 14px",
                            border: "none",
                            background: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            fontSize: 14,
                            color: "var(--color-text-main)",
                          }}
                          onMouseOver={(e) => e.target.style.background = "var(--color-surface-soft)"}
                          onMouseOut={(e) => e.target.style.background = "none"}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => { shareToClipboard(); setShowMenu(false); }}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 14px",
                            border: "none",
                            background: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            fontSize: 14,
                            color: "var(--color-text-main)",
                          }}
                          onMouseOver={(e) => e.target.style.background = "var(--color-surface-soft)"}
                          onMouseOut={(e) => e.target.style.background = "none"}
                        >
                          📤 Share
                        </button>
                        {event.booked && (
                          <button
                            onClick={() => {
                              const url = window.location.href;
                              const calUrl = buildGoogleCalendarUrl(event, url);
                              window.open(calUrl, "_blank");
                              setShowMenu(false);
                            }}
                            style={{
                              display: "block",
                              width: "100%",
                              padding: "10px 14px",
                              border: "none",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              fontSize: 14,
                              color: "var(--color-text-main)",
                            }}
                            onMouseOver={(e) => e.target.style.background = "var(--color-surface-soft)"}
                            onMouseOut={(e) => e.target.style.background = "none"}
                          >
                            📅 Add to Calendar
                          </button>
                        )}
                        {!event.booked ? (
                          <button
                            onClick={() => { markBooked(); setShowMenu(false); }}
                            style={{
                              display: "block",
                              width: "100%",
                              padding: "10px 14px",
                              border: "none",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              fontSize: 14,
                              color: "var(--color-text-main)",
                            }}
                            onMouseOver={(e) => e.target.style.background = "var(--color-surface-soft)"}
                            onMouseOut={(e) => e.target.style.background = "none"}
                          >
                            ✅ Mark as Booked
                          </button>
                        ) : (
                          <button
                            onClick={() => { unmarkBooked(); setShowMenu(false); }}
                            style={{
                              display: "block",
                              width: "100%",
                              padding: "10px 14px",
                              border: "none",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              fontSize: 14,
                              color: "var(--color-text-main)",
                            }}
                            onMouseOver={(e) => e.target.style.background = "var(--color-surface-soft)"}
                            onMouseOut={(e) => e.target.style.background = "none"}
                          >
                            ↩️ Unmark Booked
                          </button>
                        )}
                        <div style={{ height: 1, background: "var(--color-border-subtle)", margin: "4px 0" }} />
                        <button
                          onClick={() => { deleteEvent(); setShowMenu(false); }}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 14px",
                            border: "none",
                            background: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            fontSize: 14,
                            color: "var(--color-danger)",
                          }}
                          onMouseOver={(e) => e.target.style.background = "var(--color-danger-soft)"}
                          onMouseOut={(e) => e.target.style.background = "none"}
                        >
                          🗑️ Delete Event
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* RSVP Section - Moved higher for prominence */}
        {!editing && (
          <div style={{ 
            padding: "14px 16px",
            marginBottom: 16,
            background: "var(--color-surface-soft)",
            borderRadius: 10,
          }}>
            {event.booked ? (
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 8,
                color: "var(--color-text-muted)",
              }}>
                <span>🔒</span>
                <span>RSVPs closed — this round is booked</span>
              </div>
            ) : (
              <>
                <div style={{ 
                  marginBottom: 10, 
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                  Are you available?
                </div>
                <ResponseButtons
                  currentStatus={myStatus}
                  onChange={updateResponse}
                  loading={savingResponse}
                />
              </>
            )}
          </div>
        )}

        {/* Main content grid - responsive */}
        <div className="event-grid">
          {/* Image + Conditions */}
          <div className="event-media">
            <div className="event-image-wrapper">
              <PlacePhoto
                placeId={editing ? form.coursePlaceId : event.coursePlaceId}
                alt="Course"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="event-conditions-wrapper">
              <GolfConditions
                placeId={event.coursePlaceId}
                tee={event.tee}
                date={event.date}
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="event-details">
            {/* Course */}
            <div className="detail-item">
              <div className="detail-label">Course</div>
              {!editing ? (
                <div className="detail-value">
                  {event.courseName || "—"}
                  {event.courseAddress && (
                    <span className="detail-secondary"> · {event.courseAddress}</span>
                  )}
                </div>
              ) : (
                <>
                  <CourseAutocomplete
                    key={form.courseName}
                    initialValue={form.courseName}
                    onSelect={(payload) =>
                      setForm((f) => ({
                        ...f,
                        courseName: payload.name,
                        courseAddress: payload.address,
                        coursePlaceId: payload.placeId,
                        coursePhotoUrl: payload.photoUrl,
                      }))
                    }
                  />
                  <div className="detail-secondary" style={{ marginTop: 4 }}>
                    {form.courseAddress}
                  </div>
                  <button
                    className="btn btn-ghost btn-sm"
                    type="button"
                    style={{ marginTop: 8 }}
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        courseName: "",
                        courseAddress: "",
                        coursePlaceId: "",
                        coursePhotoUrl: "",
                      }))
                    }
                  >
                    Clear course
                  </button>
                </>
              )}
            </div>

            {/* Tee Time */}
            <div className="detail-item">
              <div className="detail-label">Tee Time</div>
              {!editing ? (
                <div className="detail-value">{event.tee || "—"}</div>
              ) : (
                <input
                  className="input"
                  type="time"
                  value={form.tee}
                  onChange={(e) => setForm((f) => ({ ...f, tee: e.target.value }))}
                  style={{ maxWidth: 200, width: "100%" }}
                />
              )}
            </div>

            {/* Notes */}
            <div className="detail-item">
              <div className="detail-label">Notes</div>
              {!editing ? (
                <div className="detail-value">
                  {event.notes || <span className="detail-secondary">No notes added</span>}
                </div>
              ) : (
                <textarea
                  className="input"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  placeholder="e.g. Meet at the range 30 mins before."
                  style={{ width: "100%" }}
                />
              )}
            </div>

            {/* RSVP Deadline */}
            <div className="detail-item">
              <div className="detail-label">RSVP Deadline</div>
              {!editing ? (
                <div className="detail-value">
                  {event.rsvpDeadline?.toDate
                    ? event.rsvpDeadline.toDate().toLocaleDateString("en-AU", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "—"}
                </div>
              ) : (
                <input
                  className="input"
                  type="date"
                  value={form.rsvpDeadline}
                  onChange={(e) => setForm((f) => ({ ...f, rsvpDeadline: e.target.value }))}
                  style={{ maxWidth: 220, width: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PLAYERS CARD - With count indicator */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">
              Players ({attendingIds.length}/{MAX_PLAYERS})
            </h3>
            {attendingIds.length >= MAX_PLAYERS ? (
              <p className="card-subtitle" style={{ color: "var(--color-success)" }}>
                ✓ Group is full
              </p>
            ) : (
              <p className="card-subtitle">
                {MAX_PLAYERS - attendingIds.length} spot{MAX_PLAYERS - attendingIds.length !== 1 ? "s" : ""} open
              </p>
            )}
          </div>
        </div>
        <div className="card-body">
          {attendingIds.length === 0 ? (
            <p className="text-muted">No one has responded yet. Be the first!</p>
          ) : (
            attendingIds.map((uid, index) => {
              const u = allUsers.find((x) => x.id === uid);
              const label = u?.username || u?.email?.split("@")[0] || "Unknown";
              return (
                <div
                  key={uid}
                  style={{
                    padding: "10px 0",
                    borderBottom: index < attendingIds.length - 1 
                      ? "1px solid var(--color-border-subtle)" 
                      : "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "var(--color-primary-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "var(--color-primary)",
                    }}>
                      {label.charAt(0).toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 500 }}>{label}</span>
                  </div>

                  {isAdmin && (
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => removePlayer(uid)}
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* MAP */}
      {event.coursePlaceId && (
        <div className="card simple" style={{ marginBottom: 20 }}>
          <CourseMiniMap placeId={event.coursePlaceId} />
        </div>
      )}
    </div>
  );
}
