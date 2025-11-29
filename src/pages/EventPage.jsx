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
import { toPng } from "html-to-image";
import GolfConditions from "../components/GolfConditions";
import Forecast3Day from "../components/Forecast3Day";

// -----------------------------------------------------------------------------
// Random share poster backgrounds (local files in /public/share-bg)
// -----------------------------------------------------------------------------
const SHARE_BACKGROUNDS = [
  "/public/share-bg-1.jpg",
  "/public/share-bg-2.jpg",
  "/public/share-bg-3.jpg",
  "/public/share-bg-4.jpg",
  "/public/share-bg-5.jpg",
  "/public/share-bg-6.jpg",
].map((path) => window.location.origin + path);

function getRandomBackground() {
  const valid = SHARE_BACKGROUNDS.filter(Boolean);
  if (!valid.length) return null;
  const idx = Math.floor(Math.random() * valid.length);
  return valid[idx];
}

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();

  const [event, setEvent] = useState(null);
  const [loadingEvent, setLoadingEvent] = useState(true);

  const [responses, setResponses] = useState({});
  const [myStatus, setMyStatus] = useState(null);

  const [allUsers, setAllUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [editing, setEditing] = useState(false);
  const [savingResponse, setSavingResponse] = useState(false);

  const [form, setForm] = useState({
    title: "",
    courseName: "",
    courseAddress: "",
    coursePlaceId: "",
    coursePhotoUrl: "",
    tee: "",
    notes: "",
    rsvpDeadline: "",
  });
  const markBooked = async () => {
    if (!event) return;

    // Use the same id you already use to load/update this event
    const ref = doc(db, "events", id);

    await updateDoc(ref, {
      booked: true,
      bookedAt: new Date().toISOString(),
    });

    setEvent(prev => prev ? {
      ...prev,
      booked: true,
      bookedAt: new Date().toISOString(),
    } : prev);
  };

  const unmarkBooked = async () => {
    if (!event) return;

    const ref = doc(db, "events", id);

    await updateDoc(ref, {
      booked: false,
      bookedAt: null,
    });

    setEvent(prev => prev ? {
      ...prev,
      booked: false,
      bookedAt: null,
    } : prev);
  };

// ---------------------------------------------------------------------------
// Shorten URLs using TinyURL (Firebase Dynamic Links disabled on new projects)
// ---------------------------------------------------------------------------
async function makeShortLink(longUrl) {
  try {
    const res = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
    );
    const shortUrl = await res.text();
    return shortUrl.startsWith("http") ? shortUrl : longUrl;
  } catch (err) {
    console.error("Short link failed:", err);
    return longUrl;
  }
}

// ---------------------------------------------------------------------------
// Build Google Calendar URL
// ---------------------------------------------------------------------------
function buildGoogleCalendarUrl(event, eventUrl) {
  const d = event.date?.toDate ? event.date.toDate() : null;
  if (!d) return "";

  const start = new Date(d);

  // Apply tee time if exists
  if (event.tee) {
    const [h, m] = event.tee.split(":");
    start.setHours(parseInt(h), parseInt(m || "0"), 0, 0);
  }

  // End time (4 hours later)
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  const toCalFormat = (dt) =>
    dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const range = `${toCalFormat(start)}/${toCalFormat(end)}`;

  const title = `⛳ ${event.tee || ""} Tee Time - ${event.courseName || "Golf Round"}`;

  return (
    "https://calendar.google.com/calendar/render?" +
    "action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${range}` +
    `&details=${encodeURIComponent(eventUrl)}` +
    `&location=${encodeURIComponent(event.courseName || "")}`
  );
}


  // ---------------------------------------------------------------------------
  // Load users for display in response list
  // ---------------------------------------------------------------------------
  useEffect(() => {
    async function loadUsers() {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setAllUsers(list);
      setLoadingUsers(false);
    }
    loadUsers();
  }, []);

  // ---------------------------------------------------------------------------
  // Load event
  // ---------------------------------------------------------------------------
  useEffect(() => {
    async function load() {
      const ref = doc(db, "events", id);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        navigate("/404");
        return;
      }

      const data = snap.data();

      setEvent({ id, ...data });
      setResponses(data.responses || {});
      setMyStatus(data.responses?.[user?.uid] || null);

      let rsvpString = "";
      if (data.rsvpDeadline?.toDate) {
        const dt = data.rsvpDeadline.toDate();
        rsvpString = dt.toISOString().split("T")[0];
      }

      setForm({
        title: data.title || "",
        courseName: data.courseName || "",
        courseAddress: data.courseAddress || "",
        coursePlaceId: data.coursePlaceId || "",
        coursePhotoUrl: data.coursePhotoUrl || "",
        tee: data.tee || "",
        notes: data.notes || "",
        rsvpDeadline: rsvpString,
      });

      setLoadingEvent(false);
    }

    load();
  }, [id, user?.uid, navigate]);

  // ---------------------------------------------------------------------------
  // Update RSVP (only "available" / "unavailable")
  // ---------------------------------------------------------------------------
  const updateResponse = async (status) => {
    if (!user) return;
    setSavingResponse(true);
    const ref = doc(db, "events", id);

    const updated = {
      ...responses,
      [user.uid]: status,
    };

    await updateDoc(ref, { responses: updated });
    setResponses(updated);
    setMyStatus(status);
    setSavingResponse(false);
  };

  // ---------------------------------------------------------------------------
  // Delete event
  // ---------------------------------------------------------------------------
  const deleteEvent = async () => {
    if (!confirm("Delete this event?")) return;
    await deleteDoc(doc(db, "events", id));
    navigate("/");
  };

  // ---------------------------------------------------------------------------
  // Remove Player
  // ---------------------------------------------------------------------------
const removePlayer = async (uid) => {
  if (!isAdmin) return;

  const ref = doc(db, "events", id);

  // Clone responses and remove user
  const updated = { ...responses };
  delete updated[uid];

  // Save to Firestore
  await updateDoc(ref, { responses: updated });

  // Update state
  setResponses(updated);

  // If admin removes themselves
  if (uid === user.uid) {
    setMyStatus(null);
  }
};

  // ---------------------------------------------------------------------------
  // Save edits
  // ---------------------------------------------------------------------------
  const saveEdits = async () => {
    const ref = doc(db, "events", id);

    let rsvpTimestamp = null;
    if (form.rsvpDeadline) {
      const dt = new Date(form.rsvpDeadline + "T23:59:59");
      rsvpTimestamp = Timestamp.fromDate(dt);
    }

    const updatePayload = {
      title: form.title.trim() || event.title,
      courseName: form.courseName || "",
      courseAddress: form.courseAddress || "",
      coursePlaceId: form.coursePlaceId || "",
      coursePhotoUrl: form.coursePhotoUrl || "",
      tee: form.tee || "",
      notes: form.notes || "",
      rsvpDeadline: rsvpTimestamp,
    };

    await updateDoc(ref, updatePayload);
    setEvent((prev) => ({ ...prev, ...updatePayload }));
    setEditing(false);
  };

// ---------------------------------------------------------------------------
// Share poster generation (random background) — FIXED + IMPROVED READABILITY
// ---------------------------------------------------------------------------
async function generateShareImage() {
  // 1️⃣ Fetch fresh event data (never use stale state)
  const ref = doc(db, "events", id);
  const snap = await getDoc(ref);
  const freshEvent = snap.data() || event;

  // 2️⃣ Normalize attending players
  const attending = Object.entries(freshEvent.responses || {})
    .filter(([_, v]) =>
      ["yes", "Yes", "available", "Available"].includes(v)
    )
    .map(([uid]) => {
      const u = allUsers.find((x) => x.id === uid);
      return u?.username || u?.email || uid;
    });

  // 3️⃣ Prepare wrapper
  const wrapper = document.getElementById("share-card-wrapper");
  wrapper.innerHTML = "";

  const bgUrl = getRandomBackground();
  const dateObj = freshEvent.date?.toDate ? freshEvent.date.toDate() : null;

  // 4️⃣ Outer container
  const poster = document.createElement("div");
  poster.style.width = "1200px";
  poster.style.height = "630px";
  poster.style.position = "relative";
  poster.style.overflow = "hidden";
  poster.style.display = "flex";
  poster.style.alignItems = "center";
  poster.style.justifyContent = "center";
  wrapper.appendChild(poster);

  // Background
  const bg = document.createElement("img");
  bg.src = bgUrl;
  bg.style.position = "absolute";
  bg.style.inset = "0";
  bg.style.width = "100%";
  bg.style.height = "100%";
  bg.style.objectFit = "cover";
  poster.appendChild(bg);

  // Dark overlay
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.background =
    "linear-gradient(to bottom right, rgba(0,0,0,0.55), rgba(0,0,0,0.75))";
  poster.appendChild(overlay);

  // 5️⃣ Frosted card
  const card = document.createElement("div");
  card.style.position = "relative";
  card.style.zIndex = "5";
  card.style.width = "70%";
  card.style.padding = "50px";
  card.style.borderRadius = "22px";
  card.style.background = "rgba(255,255,255,0.10)";
  card.style.backdropFilter = "blur(14px)";
  card.style.WebkitBackdropFilter = "blur(14px)";
  card.style.border = "1px solid rgba(255,255,255,0.25)";
  card.style.color = "white";
  card.style.fontFamily = "Inter, system-ui, sans-serif";
  card.style.textShadow = "0 2px 4px rgba(0,0,0,0.4)";
  poster.appendChild(card);

  // Title
  const titleEl = document.createElement("div");
  titleEl.textContent = freshEvent.title;
  titleEl.style.fontSize = "58px";
  titleEl.style.fontWeight = "900";
  titleEl.style.marginBottom = "16px";
  card.appendChild(titleEl);

  // Course
  const courseEl = document.createElement("div");
  courseEl.textContent = freshEvent.courseName || "Course TBA";
  courseEl.style.fontSize = "32px";
  courseEl.style.marginBottom = "8px";
  courseEl.style.opacity = "0.95";
  card.appendChild(courseEl);

  // Date
  const dateEl = document.createElement("div");
  dateEl.textContent = dateObj
    ? dateObj.toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "Date TBA";
  dateEl.style.fontSize = "28px";
  dateEl.style.marginBottom = "8px";
  dateEl.style.opacity = "0.90";
  card.appendChild(dateEl);

  // Tee time
  if (freshEvent.tee) {
    const teeEl = document.createElement("div");
    teeEl.textContent = `Tee Time: ${freshEvent.tee}`;
    teeEl.style.fontSize = "26px";
    teeEl.style.marginBottom = "18px";
    teeEl.style.opacity = "0.90";
    card.appendChild(teeEl);
  }

  // Status pill
  const pill = document.createElement("div");
  pill.textContent = freshEvent.booked ? "BOOKED" : "PROPOSED";
  pill.style.display = "inline-block";
  pill.style.padding = "10px 26px";
  pill.style.fontSize = "26px";
  pill.style.fontWeight = "800";
  pill.style.borderRadius = "999px";
  pill.style.background = freshEvent.booked
    ? "rgba(16,185,129,0.85)"
    : "rgba(251,191,36,0.85)";
  pill.style.color = "#000";
  pill.style.marginBottom = "24px";
  card.appendChild(pill);

  // Attending list
  if (freshEvent.booked && attending.length > 0) {
    const attTitle = document.createElement("div");
    attTitle.textContent = `Attending (${attending.length})`;
    attTitle.style.fontSize = "28px";
    attTitle.style.fontWeight = "700";
    attTitle.style.marginBottom = "10px";
    card.appendChild(attTitle);

    attending.forEach((name) => {
      const p = document.createElement("div");
      p.textContent = `• ${name}`;
      p.style.fontSize = "24px";
      p.style.opacity = "0.85";
      p.style.marginBottom = "4px";
      card.appendChild(p);
    });
  }

  // Finally produce PNG
  const png = await toPng(poster, {
    pixelRatio: 2,
    cacheBust: true,
    skipFonts: true,
  });

  return png;
}

  // ---------------------------------------------------------------------------
  // Share to WhatsApp
  // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------
  // Share to WhatsApp (desktop: download + copy, mobile: share image + text)
  // ---------------------------------------------------------------------------
  async function shareToWhatsApp() {
    try {
      const isMobile =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        navigator.maxTouchPoints > 1;

      // 1) Generate share-card PNG
      const dataUrl = await generateShareImage();

      // 2) Basic event info
      const eventUrl = window.location.href;
      const dateObj = event.date?.toDate ? event.date.toDate() : null;
      const dateFormatted = dateObj
        ? dateObj.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
        : "Date TBA";

      // 3) Short links (Firebase Dynamic Links)
      const [shortEventLink, shortCalendarLink] = await (async () => {
        const longCalUrl = event.booked
          ? buildGoogleCalendarUrl(event, eventUrl)
          : "";

        const [evt, cal] = await Promise.all([
          makeShortLink(eventUrl),
          longCalUrl ? makeShortLink(longCalUrl) : Promise.resolve(""),
        ]);

        return [evt, cal];
      })();

      // 4) Attending players (those who responded "yes")
      const attendingNames =
        attendingIds
          .map((uid) => {
            const u = allUsers.find((x) => x.id === uid);
            return u?.username || u?.email || null;
          })
          .filter(Boolean)
          .join(", ") || "";

      // 5) Build the WhatsApp message (with emojis & formatting)
      let msg =
        `🏌️ *${event.title}*\n` +
        `📍 ${event.courseName || "Course TBA"}\n` +
        `📅 ${dateFormatted}\n` +
        `⏰ Tee Time: ${event.tee || "TBA"}\n\n`;

      if (event.booked) {
        msg += "✅ *This event is BOOKED*\n";
        if (attendingNames) {
          msg += `👥 Attending: ${attendingNames}\n`;
        }
        if (shortCalendarLink) {
          msg += `\n📆 Add to Google Calendar:\n${shortCalendarLink}\n`;
        }
      } else {
        msg += "🟦 *RSVPs open*\n";
      }

      msg += `\n🔗 Event details:\n${shortEventLink || eventUrl}`;

      // 6) MOBILE – use Web Share API with image + text
      if (isMobile && navigator.canShare) {
        try {
          const response = await fetch(dataUrl);
          const blob = await response.blob();
          const file = new File([blob], "golfgang-event.png", {
            type: "image/png",
          });

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: event.title,
              text: msg,
            });
            return;
          }
        } catch (e) {
          console.warn("Mobile share with file failed, falling back to text URL", e);
        }

        // Mobile fallback: WhatsApp URL with just the message
        const encoded = encodeURIComponent(msg);
        window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
        return;
      }

      // 7) DESKTOP – auto-download image + copy text to clipboard
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "golfgang-event.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Copy message to clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(msg);
        alert("Share card downloaded and message copied!\nPaste it in WhatsApp Desktop.");
      } else {
        alert(
          "Share card downloaded.\nYour browser does not support auto-copy, so copy the message manually:"
        );
        console.log("WhatsApp message:\n" + msg);
      }
    } catch (err) {
      console.error("WhatsApp share failed", err);
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
              src={event.coursePhotoUrl || SHARE_BACKGROUNDS[0]}
              alt="Course"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* GOLF CONDITIONS */}
          <GolfConditions
            placeId={event.coursePlaceId}
            tee={event.tee}
            date={event.date}
          />
        </div>
          
          {/* MIDDLE DETAILS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "16px",
            }}
          >
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
                    fontWeight: 600,
                  }}
                >
                  {event.title}
                </h1>
              ) : (
                <input
                  className="input"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  style={{ fontSize: 18, padding: "8px 10px", flex: 1 }}
                />
              )}

              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#020617",
                  backgroundColor: statusColor,
                }}
              >
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
                    courseAddress: payload.address,
                    coursePlaceId: payload.placeId,
                    coursePhotoUrl: payload.photoUrl,
                  }))
                }
              />

              <button
                className="btn btn-ghost btn-sm"
                type="button"
                style={{ marginTop: 6 }}
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
                <div style={{ fontSize: 15 }}>
                  {event.notes || "No notes added"}
                </div>
              ) : (
                <textarea
  className="input"
  style={{
    width: "100%",      // FULL WIDTH FIX
    minHeight: 120,
  }}
  value={form.notes}
  onChange={(e) =>
    setForm((f) => ({ ...f, notes: e.target.value }))
  }
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

         {/* RIGHT BUTTON STACK */}
<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

{/* ADMIN MODE ONLY */}
{isAdmin && editing && (
  <>
    <button className="btn btn-primary" onClick={saveEdits}>Save</button>

    {/* BOOKING TOGGLE */}
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
      Share to WhatsApp
    </button>

    <button className="btn btn-danger" onClick={deleteEvent}>Delete</button>
  </>
)}


  {/* ADMIN (non-editing) */}
  {isAdmin && !editing && (
    <>
      <button className="btn btn-ghost" onClick={() => setEditing(true)}>
        Edit
      </button>

      <button className="btn btn-primary" onClick={shareToWhatsApp}>
        Share to WhatsApp
      </button>

      <button className="btn btn-danger" onClick={deleteEvent}>Delete</button>
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
<Forecast3Day placeId={event.coursePlaceId} />
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
