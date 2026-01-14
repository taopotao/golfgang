import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import GolfConditions from "../components/GolfConditions";
import CalendarMenu from "../components/CalendarMenu";
import CourseAutocomplete from "../components/CourseAutocomplete";
import PlacePhoto from '../components/PlacePhoto';

// Helper to extract just the course name from a potentially full address
function extractCourseName(fullName) {
  if (!fullName) return '';
  return fullName.split(',')[0].trim();
}

// Build Google Calendar URL
function buildGoogleCalendarUrl(event, eventUrl) {
  const date = event.date?.toDate ? event.date.toDate() : new Date();
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const notes = event.notes || "";

  let startDateTime = new Date(date);
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
  }

  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  const formatDate = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`,
    dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
    details: notes ? `${notes}\n\nEvent: ${eventUrl}` : `Event: ${eventUrl}`,
    location: courseName,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Build Google Maps URL
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
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [weatherExpanded, setWeatherExpanded] = useState(false);
  const [prefsExpanded, setPrefsExpanded] = useState(false);
  const [preferences, setPreferences] = useState({
    timePreference: "",
    cartPreference: "",
    formatPreference: "",
    courseNotes: "",
  });
  const [form, setForm] = useState({
    title: "",
    notes: "",
    courseName: "",
    courseAddress: "",
    coursePlaceId: "",
    coursePhotoUrl: "",
    courseLat: null,
    courseLng: null,
    tee: "",
    rsvpDeadline: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
          const userResponse = r[user.uid];
          setMyStatus(userResponse ? (typeof userResponse === 'string' ? userResponse : userResponse.status) : null);
          if (userResponse && typeof userResponse === 'object' && userResponse.preferences) {
            setPreferences(userResponse.preferences);
          }
        }

        setForm({
          title: data.title || "",
          notes: data.notes || "",
          courseName: data.courseName || "",
          courseAddress: data.courseAddress || "",
          coursePlaceId: data.coursePlaceId || "",
          coursePhotoUrl: data.coursePhotoUrl || "",
          courseLat: data.courseLat || null,
          courseLng: data.courseLng || null,
          tee: data.tee || "",
          rsvpDeadline: data.rsvpDeadline
            ? new Date(data.rsvpDeadline.toDate()).toISOString().slice(0, 16)
            : "",
        });
      } catch (err) {
        console.error("Error loading event:", err);
      }
      setLoadingEvent(false);
    }

    async function loadUsers() {
      try {
        const snap = await getDocs(collection(db, "users"));
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setAllUsers(list);
      } catch (err) {
        console.error("Error loading users:", err);
      }
      setLoadingUsers(false);
    }

    loadEvent();
    loadUsers();
  }, [id, navigate, user]);

  // Show toast notification
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification show toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Update RSVP response
  async function updateResponse(status, prefs = null) {
    setSavingResponse(true);
    try {
      const ref = doc(db, "events", id);
      const responseData = status ? {
        status,
        preferences: prefs || preferences,
        updatedAt: new Date().toISOString(),
      } : null;
      
      await updateDoc(ref, {
        [`responses.${user.uid}`]: responseData,
      });
      
      setResponses(prev => ({
        ...prev,
        [user.uid]: responseData,
      }));
      setMyStatus(status);
      
      if (status === "available") {
        showToast("You're in! 🎉");
        triggerConfetti();
      }
      setShowRSVPModal(false);
    } catch (err) {
      console.error("Error updating response:", err);
      showToast("Failed to update", "error");
    }
    setSavingResponse(false);
  }

  // Save event edits
  async function saveEdits() {
    try {
      const ref = doc(db, "events", id);
      await updateDoc(ref, {
        title: form.title,
        notes: form.notes,
        courseName: form.courseName,
        courseAddress: form.courseAddress,
        coursePlaceId: form.coursePlaceId,
        coursePhotoUrl: form.coursePhotoUrl,
        courseLat: form.courseLat || null,
        courseLng: form.courseLng || null,
        tee: form.tee,
        rsvpDeadline: form.rsvpDeadline ? new Date(form.rsvpDeadline) : null,
      });
      
      setEvent(prev => ({
        ...prev,
        ...form,
        rsvpDeadline: form.rsvpDeadline ? new Date(form.rsvpDeadline) : null,
      }));
      setEditing(false);
      showToast("Event updated!");
    } catch (err) {
      console.error("Error saving event:", err);
      showToast("Failed to save", "error");
    }
  }

  // Delete event
  async function deleteEvent() {
    try {
      await deleteDoc(doc(db, "events", id));
      navigate("/");
      showToast("Event deleted");
    } catch (err) {
      console.error("Error deleting event:", err);
      showToast("Failed to delete", "error");
    }
  }

  // Toggle booked status
  async function toggleBooked() {
    try {
      const ref = doc(db, "events", id);
      await updateDoc(ref, { booked: !event.booked });
      setEvent(prev => ({ ...prev, booked: !prev.booked }));
      showToast(event.booked ? "Marked as proposed" : "Marked as booked! ✓");
    } catch (err) {
      console.error("Error toggling booked:", err);
    }
  }

  // Share event
  async function shareEvent() {
    const date = event.date?.toDate ? event.date.toDate() : null;
    const dateStr = date?.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" }) || "";
    const eventUrl = window.location.href;

    let msg = `⛳ *${event.title || "Golf round"}*\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕐 ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${extractCourseName(event.courseName)}\n`;
    msg += `\n🔗 ${eventUrl}`;

    try {
      await navigator.clipboard.writeText(msg);
      showToast("Copied to clipboard! 📋");
    } catch {
      showToast("Could not copy", "error");
    }
  }

  // Confetti effect
  function triggerConfetti() {
    const colors = ['#10b981', '#0f7b6c', '#fbbf24', '#f59e0b'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  if (loadingEvent || loadingUsers) {
    return (
      <div className="page">
        <div className="ep-loading">
          <div className="spinner"></div>
          <p>Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="page">
        <div className="ep-not-found">
          <span className="ep-not-found-icon">⛳</span>
          <h2>Event not found</h2>
          <p>This event may have been deleted.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  // Helper functions
  const getResponseStatus = (response) => {
    if (!response) return null;
    if (typeof response === 'string') return response;
    return response.status;
  };

  const getResponsePreferences = (response) => {
    if (!response || typeof response === 'string') return {};
    return response.preferences || {};
  };

  // Sort attendees by RSVP time
  const allAttendingIds = Object.entries(responses)
    .filter(([_, response]) => getResponseStatus(response) === "available")
    .sort(([, a], [, b]) => {
      const aTime = typeof a === 'object' && a?.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const bTime = typeof b === 'object' && b?.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return aTime - bTime;
    })
    .map(([uid]) => uid);

  const confirmedIds = allAttendingIds.slice(0, MAX_PLAYERS);
  const reserveIds = allAttendingIds.slice(MAX_PLAYERS);
  const isUserReserve = user && reserveIds.includes(user.uid);
  const isUserConfirmed = user && confirmedIds.includes(user.uid);
  const declinedIds = Object.entries(responses)
    .filter(([_, response]) => getResponseStatus(response) === "unavailable")
    .map(([uid]) => uid);

  const getUserName = (uid) => {
    const u = allUsers.find((x) => x.id === uid);
    return u?.username || u?.email?.split("@")[0] || "Unknown";
  };

  const getUserInitials = (uid) => {
    const name = getUserName(uid);
    return name.substring(0, 2).toUpperCase();
  };

  // Date formatting
  const date = event.date?.toDate ? event.date.toDate() : null;
  const dateStr = date?.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" }) || "";
  const shortDate = date?.toLocaleDateString("en-AU", { day: "numeric", month: "short" }) || "";
  const dayName = date?.toLocaleDateString("en-AU", { weekday: "short" }) || "";
  
  const mapsUrl = buildGoogleMapsUrl(event.coursePlaceId, event.courseName);
  const eventUrl = window.location.href;
  const hasCourseInfo = event.coursePlaceId || event.courseName;

  // Aggregate preferences for group summary
  const aggregatePreferences = () => {
    const prefs = { time: {}, cart: {}, format: {} };
    confirmedIds.forEach(uid => {
      const p = getResponsePreferences(responses[uid]);
      if (p.timePreference) prefs.time[p.timePreference] = (prefs.time[p.timePreference] || 0) + 1;
      if (p.cartPreference) prefs.cart[p.cartPreference] = (prefs.cart[p.cartPreference] || 0) + 1;
      if (p.formatPreference) prefs.format[p.formatPreference] = (prefs.format[p.formatPreference] || 0) + 1;
    });
    return prefs;
  };

  const groupPrefs = aggregatePreferences();

  return (
    <div className="page ep-page">
      {/* Back link - subtle at top */}
      <Link to="/" className="ep-back-link">
        ← Back to rounds
      </Link>

      {/* HERO SECTION with course photo */}
      <div className="ep-hero">
        {hasCourseInfo ? (
          <div className="ep-hero-image">
            <PlacePhoto 
              placeId={event.coursePlaceId}
              courseName={event.courseName}
              alt={extractCourseName(event.courseName)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="ep-hero-overlay" />
          </div>
        ) : (
          <div className="ep-hero-placeholder">
            <span>⛳</span>
          </div>
        )}
        
        <div className="ep-hero-badge">
          <span className={`ep-status-badge ${event.booked ? 'booked' : 'proposed'}`}>
            {event.booked ? '✓ Booked' : 'Proposed'}
          </span>
        </div>

        <div className="ep-hero-content">
          <h1 className="ep-title">{dateStr}</h1>
        </div>

        <div className="ep-hero-actions">
          <button className="ep-fab" onClick={shareEvent} title="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
            </svg>
          </button>
          <CalendarMenu event={event} eventUrl={eventUrl} />
        </div>
      </div>

      {/* COMPACT INFO BAR */}
      <div className="ep-info-bar">
        <div className="ep-info-grid">
          <div className="ep-info-item">
            <svg className="ep-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span className="ep-info-value">{event.tee || "TBA"}</span>
            <span className="ep-info-label">Tee Time</span>
          </div>
          
          <div className="ep-info-item ep-info-item-course">
            <svg className="ep-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {event.courseName ? (
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="ep-info-value ep-course-link">
                {extractCourseName(event.courseName)}
                <span className="ep-link-arrow">↗</span>
              </a>
            ) : (
              <span className="ep-info-value">TBA</span>
            )}
            <span className="ep-info-label">Course</span>
          </div>
          
          <div className="ep-info-item">
            <svg className="ep-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
            <span className="ep-info-value">{confirmedIds.length}/{MAX_PLAYERS}</span>
            <span className="ep-info-label">Players</span>
          </div>
        </div>

        {event.notes && (
          <div className="ep-notes">
            <span className="ep-notes-icon">📝</span>
            {event.notes}
          </div>
        )}

        {(isAdmin || event.createdBy === user?.uid) && !editing && (
          <div className="ep-admin-bar">
            <button className="ep-admin-btn" onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className="ep-admin-btn" onClick={toggleBooked}>
              {event.booked ? 'Mark Proposed' : 'Mark Booked'}
            </button>
          </div>
        )}
      </div>

      {/* EDITING MODE */}
      {editing && (
        <div className="ep-card ep-edit-card">
          <h3 className="ep-card-title">Edit Event</h3>
          
          <div className="form-group">
            <label>Tee Time</label>
            <input
              type="time"
              className="input"
              value={form.tee}
              onChange={(e) => setForm({ ...form, tee: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <CourseAutocomplete
              value={extractCourseName(form.courseName)}
              onSelect={(place) => {
                setForm({
                  ...form,
                  courseName: place.name,
                  courseAddress: place.address,
                  coursePlaceId: place.placeId,
                  courseLat: place.lat || null,
                  courseLng: place.lng || null,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="input"
              rows={2}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Any additional details..."
            />
          </div>

          <div className="ep-edit-actions">
            <button className="btn btn-ghost" onClick={() => setEditing(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveEdits}>
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* WEATHER CONDITIONS - Only show when NOT editing AND has course info */}
      {!editing && hasCourseInfo && event.courseLat && event.courseLng && date && (
        <div className="ep-card ep-weather-card">
          <button 
            className="ep-collapse-header"
            onClick={() => setWeatherExpanded(!weatherExpanded)}
          >
            <span className="ep-collapse-title">
              <span className="ep-collapse-icon">🌤️</span>
              Golf Conditions
            </span>
            <span className={`ep-collapse-arrow ${weatherExpanded ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          
          {weatherExpanded ? (
            <div className="ep-collapse-content">
              <GolfConditions
                lat={event.courseLat}
                lng={event.courseLng}
                date={date}
                coursePlaceId={event.coursePlaceId}
              />
            </div>
          ) : (
            <GolfConditions
              lat={event.courseLat}
              lng={event.courseLng}
              date={date}
              coursePlaceId={event.coursePlaceId}
              compact={true}
            />
          )}
        </div>
      )}

      {/* RSVP STATUS / ACTIONS */}
      {!editing && (
        <div className="ep-card ep-rsvp-card">
          {myStatus === "available" ? (
            <div className={`ep-status-banner ${isUserReserve ? 'reserve' : 'confirmed'}`}>
              <span className="ep-status-icon">
                {isUserReserve ? '🔔' : '✓'}
              </span>
              <div className="ep-status-text">
                <strong>
                  {isUserReserve ? "You're on the reserve list" : "You're confirmed for this round"}
                </strong>
                {isUserReserve && (
                  <span className="ep-status-sub">Position {reserveIds.indexOf(user.uid) + 1} in queue</span>
                )}
              </div>
              <button 
                className="ep-status-action"
                onClick={() => setShowRSVPModal(true)}
              >
                Edit
              </button>
            </div>
          ) : myStatus === "unavailable" ? (
            <div className="ep-status-banner declined">
              <span className="ep-status-icon">✗</span>
              <span className="ep-status-text"><strong>You declined this round</strong></span>
              <button 
                className="ep-status-action"
                onClick={() => updateResponse("available")}
              >
                Change
              </button>
            </div>
          ) : (
            <div className="ep-rsvp-buttons">
              <button
                className="ep-rsvp-btn ep-rsvp-in"
                onClick={() => setShowRSVPModal(true)}
                disabled={savingResponse}
              >
                <span className="ep-rsvp-emoji">🏌️</span>
                I'm In
              </button>
              <button
                className="ep-rsvp-btn ep-rsvp-out"
                onClick={() => updateResponse("unavailable")}
                disabled={savingResponse}
              >
                <span className="ep-rsvp-emoji">😔</span>
                Can't Make It
              </button>
            </div>
          )}
        </div>
      )}

      {/* PLAYERS LIST */}
      <div className="ep-card ep-players-card">
        <h3 className="ep-card-title">
          Players ({confirmedIds.length}/{MAX_PLAYERS})
        </h3>
        
        <div className="ep-players-grid">
          {confirmedIds.map((uid) => {
            const prefs = getResponsePreferences(responses[uid]);
            const isCurrentUser = uid === user?.uid;
            return (
              <div key={uid} className={`ep-player ${isCurrentUser ? 'current' : ''}`}>
                <div 
                  className="ep-player-avatar"
                  style={{ backgroundColor: `hsl(${uid.charCodeAt(0) * 10}, 60%, 70%)` }}
                >
                  {getUserInitials(uid)}
                </div>
                <div className="ep-player-info">
                  <span className="ep-player-name">
                    {getUserName(uid)}
                    {isCurrentUser && <span className="ep-you-tag">(you)</span>}
                  </span>
                  {(prefs.timePreference || prefs.cartPreference || prefs.formatPreference) && (
                    <div className="ep-player-prefs">
                      {prefs.timePreference && (
                        <span className="ep-pref-tag">
                          {prefs.timePreference === 'AM' ? '🌅' : prefs.timePreference === 'PM' ? '🌇' : '🕐'} {prefs.timePreference}
                        </span>
                      )}
                      {prefs.cartPreference && (
                        <span className="ep-pref-tag">
                          {prefs.cartPreference === 'Walk' ? '🚶' : prefs.cartPreference === 'Cart' ? '🚗' : '🚗'} {prefs.cartPreference}
                        </span>
                      )}
                      {prefs.formatPreference && (
                        <span className="ep-pref-tag">
                          {prefs.formatPreference === 'Stroke' ? '🎯' : prefs.formatPreference === 'Scramble' ? '👥' : '🏌️'} {prefs.formatPreference}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {Array.from({ length: MAX_PLAYERS - confirmedIds.length }).map((_, i) => (
            <div key={`empty-${i}`} className="ep-player ep-player-empty">
              <div className="ep-player-avatar empty">
                <span>?</span>
              </div>
              <span className="ep-player-name">Open spot</span>
            </div>
          ))}
        </div>

        {reserveIds.length > 0 && (
          <div className="ep-reserve-section">
            <h4 className="ep-reserve-title">Reserve List</h4>
            <div className="ep-reserve-list">
              {reserveIds.map((uid, idx) => (
                <div key={uid} className="ep-reserve-player">
                  <span className="ep-reserve-position">#{idx + 1}</span>
                  <div 
                    className="ep-player-avatar small"
                    style={{ backgroundColor: `hsl(${uid.charCodeAt(0) * 10}, 60%, 70%)` }}
                  >
                    {getUserInitials(uid)}
                  </div>
                  <span>{getUserName(uid)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* GROUP PREFERENCES */}
      {confirmedIds.length > 0 && (
        <div className="ep-card ep-prefs-card">
          <button 
            className="ep-collapse-header"
            onClick={() => setPrefsExpanded(!prefsExpanded)}
          >
            <span className="ep-collapse-title">
              <span className="ep-collapse-icon">📊</span>
              Group Preferences
            </span>
            <span className={`ep-collapse-arrow ${prefsExpanded ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          
          {prefsExpanded && (
            <div className="ep-collapse-content ep-prefs-content">
              {Object.keys(groupPrefs.time).length > 0 && (
                <div className="ep-pref-row">
                  <span className="ep-pref-label">Time:</span>
                  <div className="ep-pref-values">
                    {Object.entries(groupPrefs.time).map(([pref, count]) => (
                      <span key={pref} className="ep-pref-chip">{pref} ({count})</span>
                    ))}
                  </div>
                </div>
              )}
              {Object.keys(groupPrefs.cart).length > 0 && (
                <div className="ep-pref-row">
                  <span className="ep-pref-label">Transport:</span>
                  <div className="ep-pref-values">
                    {Object.entries(groupPrefs.cart).map(([pref, count]) => (
                      <span key={pref} className="ep-pref-chip">{pref} ({count})</span>
                    ))}
                  </div>
                </div>
              )}
              {Object.keys(groupPrefs.format).length > 0 && (
                <div className="ep-pref-row">
                  <span className="ep-pref-label">Format:</span>
                  <div className="ep-pref-values">
                    {Object.entries(groupPrefs.format).map(([pref, count]) => (
                      <span key={pref} className="ep-pref-chip">{pref} ({count})</span>
                    ))}
                  </div>
                </div>
              )}
              {Object.keys(groupPrefs.time).length === 0 && 
               Object.keys(groupPrefs.cart).length === 0 && 
               Object.keys(groupPrefs.format).length === 0 && (
                <p className="ep-no-prefs">No preferences set yet</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ACTIONS */}
      {(myStatus === "available" || isAdmin || event.createdBy === user?.uid) && (
        <div className="ep-card ep-actions-card">
          <h3 className="ep-card-title">Actions</h3>
          
          {myStatus === "available" && (
            <button 
              className="ep-action-btn ep-action-remove"
              onClick={() => updateResponse(null)}
            >
              Remove Booking
            </button>
          )}
          
          {(isAdmin || event.createdBy === user?.uid) && (
            <>
              {!showDeleteConfirm ? (
                <button 
                  className="ep-action-btn ep-action-delete"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Delete Event
                </button>
              ) : (
                <div className="ep-delete-confirm">
                  <p>Are you sure? This cannot be undone.</p>
                  <div className="ep-delete-actions">
                    <button 
                      className="btn btn-ghost"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={deleteEvent}
                    >
                      Yes, Delete
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* RSVP MODAL */}
      {showRSVPModal && (
        <div className="ep-modal-overlay" onClick={() => setShowRSVPModal(false)}>
          <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="ep-modal-title">Set Your Preferences</h3>
            
            <div className="ep-modal-content">
              <div className="ep-pref-group">
                <label>Preferred Time</label>
                <div className="ep-toggle-group">
                  {['AM', 'PM', 'Any'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`ep-toggle-btn ${preferences.timePreference === opt ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, timePreference: opt })}
                    >
                      {opt === 'AM' ? '🌅' : opt === 'PM' ? '🌇' : '🤷'} {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="ep-pref-group">
                <label>Walk or Cart?</label>
                <div className="ep-toggle-group">
                  {['Walk', 'Cart', 'Any'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`ep-toggle-btn ${preferences.cartPreference === opt ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, cartPreference: opt })}
                    >
                      {opt === 'Walk' ? '🚶' : opt === 'Cart' ? '🚗' : '🤷'} {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="ep-pref-group">
                <label>Game Format</label>
                <div className="ep-toggle-group">
                  {['Stroke', 'Scramble', 'Any'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`ep-toggle-btn ${preferences.formatPreference === opt ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, formatPreference: opt })}
                    >
                      {opt === 'Stroke' ? '🎯' : opt === 'Scramble' ? '👥' : '🤷'} {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="ep-modal-actions">
              <button 
                className="btn btn-ghost" 
                onClick={() => setShowRSVPModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-success" 
                onClick={() => updateResponse("available", preferences)}
                disabled={savingResponse}
              >
                {savingResponse ? "Saving..." : myStatus === "available" ? "Update" : "Confirm I'm In"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}