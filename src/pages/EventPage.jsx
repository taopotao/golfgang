import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import ResponseButtons from "../components/ResponseButtons";
import CourseAutocomplete from "../components/CourseAutocomplete";
import CourseMiniMap from "../components/CourseMiniMap";
import GolfConditions from "../components/GolfConditions";
import Forecast3Day from "../components/Forecast3Day";

// A small set of gradient backgrounds for sharing
const SHARE_BACKGROUNDS = [
  "/share-bg-01.jpg",
  "/share-bg-02.jpg",
  "/share-bg-03.jpg",
  "/share-bg-04.jpg",
  "/share-bg-05.jpg",
];

// Validate environment is a browser before using window
function getShareBackgrounds() {
  if (typeof window === "undefined") return [];
  return SHARE_BACKGROUNDS.map((path) => window.location.origin + path);
}

function getRandomBackground() {
  const valid = SHARE_BACKGROUNDS.filter(Boolean);
  if (!valid.length) return null;
  const idx = Math.floor(Math.random() * valid.length);
  return valid[idx];
}

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
  async function shareToWhatsApp() {
    if (!event) return;

    try {
      const wrapper = document.getElementById("share-card-wrapper");
      if (!wrapper) return;

      wrapper.innerHTML = "";

      const bgUrl = getRandomBackground() || SHARE_BACKGROUNDS[0];

      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d");

      const bgImg = new Image();
      bgImg.crossOrigin = "anonymous";
      bgImg.src = bgUrl;

      await new Promise((resolve, reject) => {
        bgImg.onload = resolve;
        bgImg.onerror = reject;
      });

      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(60, 120, canvas.width - 120, 520);

      ctx.fillStyle = "#fff";
      ctx.font = "bold 48px system-ui, -apple-system, BlinkMacSystemFont, 'Inter'";
      ctx.fillText("GolfGang Round", 90, 180);

      const date = event.date?.toDate ? event.date.toDate() : null;
      const dateStr = date
        ? date.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
        : "";

      ctx.font = "36px system-ui, -apple-system, BlinkMacSystemFont, 'Inter'";
      ctx.fillText(dateStr, 90, 240);

      const teeText = event.tee ? `Tee time: ${event.tee}` : "";
      if (teeText) {
        ctx.fillText(teeText, 90, 300);
      }

      const courseText = event.courseName || "";
      if (courseText) {
        ctx.fillText(courseText, 90, 360);
      }

      const attendingIds = Object.entries(responses)
        .filter(([_, status]) => status === "available")
        .map(([uid]) => uid);
      const count = attendingIds.length;

      ctx.font = "32px system-ui, -apple-system, BlinkMacSystemFont, 'Inter'";
      ctx.fillText(`${count} going so far`, 90, 420);

      const eventUrl = window.location.href;

      ctx.font = "24px system-ui, -apple-system, BlinkMacSystemFont, 'Inter'";
      ctx.fillText("Open in GolfGang", 90, 480);
      ctx.fillText(eventUrl, 90, 520);

      const dataUrl = canvas.toDataURL("image/png");

      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      let msg = `⛳ *${event.title || "Golf round"}*\n`;
      if (dateStr) msg += `📅 ${dateStr}\n`;
      if (event.tee) msg += `🕒 Tee time: ${event.tee}\n`;
      if (event.courseName) msg += `📍 ${event.courseName}\n`;

      if (event.booked) {
        msg += "✅ *This round is booked*\n";
      } else {
        msg += "🟦 *RSVPs open*\n";
      }

      const eventLink = eventUrl;
      msg += `\n🔗 Event details:\n${eventLink}`;

      if (isMobile && navigator.canShare) {
        try {
          const blob = await (await fetch(dataUrl)).blob();
          const file = new File([blob], "golfgang-event.png", {
            type: "image/png",
          });

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: event.title || "Golf round",
              text: msg,
            });
            return;
          }
        } catch (err) {
          console.warn("Mobile share with file failed, fallback to text link", err);
        }

        const encoded = encodeURIComponent(msg);
        window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
        return;
      }

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "golfgang-event.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(msg);
        alert(
          "Share card downloaded and message copied.\nPaste both into WhatsApp Desktop."
        );
      } else {
        alert(
          "Share card downloaded. Your browser doesn't support auto-copy; copy the message from the console."
        );
        console.log("WhatsApp message:\n" + msg);
      }
    } catch (err) {
      console.error("Error sharing to WhatsApp", err);
      alert("Could not share this event.");
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
      {/* MAIN EVENT CARD */}
      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px minmax(0, 1fr) 220px",
            gap: "28px",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* IMAGE */}
            <div
              style={{
                width: "100%",
                height: 180,
                borderRadius: 12,
                overflow: "hidden",
                background: "var(--color-surface-soft)",
                flexShrink: 0,
              }}
            >
              <img
                src={event.coursePhotoUrl || getShareBackgrounds()[0]}
                alt="Course"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <GolfConditions
              placeId={event.coursePlaceId}
              tee={event.tee}
              date={event.date}
            />
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            {/* Title + status pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 6,
              }}
            >
              {!editing ? (
                <h1
                  style={{
                    margin: 0,
                    fontSize: 28,
                  }}
                >
                  {event.title}
                </h1>
              ) : (
                <input
                  className="input"
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  style={{ fontSize: 20, width: "100%", maxWidth: 360 }}
                />
              )}

              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontSize: 13,
                  background: event.booked
                    ? "linear-gradient(90deg,#22c55e,#4ade80)"
                    : "linear-gradient(90deg,#facc15,#f97316)",
                  color: "#111827",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "#111827",
                  }}
                />
                {statusLabel}
              </span>
            </div>

            {/* Date */}
            <p
              style={{
                margin: "0 0 16px",
                color: "var(--color-text-muted)",
                fontSize: 14,
              }}
            >
              {date &&
                date.toLocaleDateString("en-AU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
            </p>

            {/* Course */}
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  marginBottom: 4,
                }}
              >
                Course
              </div>

              {!editing ? (
                <div style={{ fontSize: 15 }}>
                  {event.courseName || "—"}
                  {event.courseAddress && (
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {" "}
                      · {event.courseAddress}
                    </span>
                  )}
                </div>
              ) : (
                <>
                  <div style={{ width: "100%" }}>
                    <CourseAutocomplete
                      key={form.courseName}
                      initialValue={form.courseName}
                      onSelect={(payload) =>
                        setForm((f) => ({
                          ...f,
                          courseName: payload.name,
                          courseAddress: payload.formatted_address,
                          coursePlaceId: payload.place_id,
                          coursePhotoUrl: payload.photoUrl,
                        }))
                      }
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {form.courseAddress}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button
                      className="btn btn-ghost btn-sm"
                      type="button"
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
                  </div>
                </>
              )}
            </div>

            {/* Tee time */}
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  marginBottom: 4,
                }}
              >
                Tee Time
              </div>

              {!editing ? (
                <div style={{ fontSize: 15 }}>{event.tee || "—"}</div>
              ) : (
                <input
                  className="input"
                  type="time"
                  value={form.tee}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, tee: e.target.value }))
                  }
                  style={{ maxWidth: 200 }}
                />
              )}
            </div>

            {/* Notes */}
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  marginBottom: 4,
                }}
              >
                Notes
              </div>

              {!editing ? (
                <p style={{ fontSize: 15 }}>
                  {event.notes || (
                    <span style={{ color: "var(--color-text-soft)" }}>
                      No notes added
                    </span>
                  )}
                </p>
              ) : (
                <textarea
                  className="input"
                  rows={3}
                  value={form.notes}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  placeholder="e.g. Meet at the range 30 mins before."
                />
              )}
            </div>

            {/* RSVP Deadline */}
            <div style={{ marginBottom: 4 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  marginBottom: 4,
                }}
              >
                RSVP Deadline
              </div>

              {!editing ? (
                <div style={{ fontSize: 15 }}>
                  {event.rsvpDeadline?.toDate
                    ? event.rsvpDeadline
                        .toDate()
                        .toLocaleDateString("en-AU", {
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
                  onChange={(e) =>
                    setForm((f) => ({ ...f, rsvpDeadline: e.target.value }))
                  }
                  style={{ maxWidth: 220 }}
                />
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "stretch",
              }}
            >
              {/* ADMIN MODE ONLY: EDITING */}
              {isAdmin && editing && (
                <>
                  <button className="btn btn-primary" onClick={saveEdits}>
                    Save changes
                  </button>

                  {!event.booked ? (
                    <button className="btn btn-primary" onClick={markBooked}>
                      Mark as booked
                    </button>
                  ) : (
                    <button className="btn btn-ghost" onClick={unmarkBooked}>
                      Unmark booked
                    </button>
                  )}

                  <button className="btn btn-primary" onClick={shareToWhatsApp}>
                    Share
                  </button>

                  <button className="btn btn-danger" onClick={deleteEvent}>
                    Delete
                  </button>
                </>
              )}

              {/* ADMIN (non-editing) */}
              {isAdmin && !editing && (
                <>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>

                  <button className="btn btn-primary" onClick={shareToWhatsApp}>
                    Share
                  </button>

                  <button className="btn btn-danger" onClick={deleteEvent}>
                    Delete
                  </button>
                </>
              )}

              {/* NORMAL USER */}
              {!isAdmin && (
                <>
                  {event.booked === true && myStatus === "yes" && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        const url = window.location.href;
                        const calUrl = buildGoogleCalendarUrl(event, url);
                        window.open(calUrl, "_blank");
                      }}
                    >
                      Add to Google Calendar
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3-DAY FORECAST */}
      <div className="card" style={{ marginBottom: 20 }}>
        <Forecast3Day placeId={event.coursePlaceId} />
      </div>

      {/* MAP */}
      {event.coursePlaceId && (
        <div className="card simple" style={{ marginBottom: 20 }}>
          <CourseMiniMap placeId={event.coursePlaceId} />
        </div>
      )}

      {/* YOUR RESPONSE */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Your Response</h3>
            <p className="card-subtitle">
              Let the group know if you’re available.
            </p>
          </div>
        </div>

        <div className="card-body">
          {event.booked ? (
            <p
              style={{
                padding: "12px 16px",
                background: "var(--color-surface-soft)",
                borderRadius: 8,
                fontWeight: 500,
                color: "var(--color-text-muted)",
              }}
            >
              ⛔ RSVP closed — this event is booked.
            </p>
          ) : (
            <ResponseButtons
              currentStatus={myStatus}
              onChange={updateResponse}
              loading={savingResponse}
            />
          )}
        </div>
      </div>

      {/* RESPONSES LIST */}
      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Available Players</h3>
            <p className="card-subtitle">
              {attendingIds.length} attending
            </p>
          </div>
        </div>
        <div className="card-body">
          {attendingIds.length === 0 && (
            <p className="text-muted">No one available yet.</p>
          )}

          {attendingIds.map((uid) => {
            const u = allUsers.find((x) => x.id === uid);
            const label = u?.username || u?.email || uid;
            return (
              <div
                key={uid}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid var(--color-border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{label}</span>

                {isAdmin && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => removePlayer(uid)}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* OFFSCREEN WRAPPER FOR SHARE POSTER */}
      <div
        id="share-card-wrapper"
        style={{ position: "fixed", top: "-9999px", left: "-9999px" }}
      />
    </div>
  );
}
