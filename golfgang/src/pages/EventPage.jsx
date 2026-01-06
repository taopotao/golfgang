import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { 
  showToast, 
  hapticFeedback, 
  triggerConfetti,
  formatEventDate,
  getInitials,
  getAvatarStyle,
  buildGoogleCalendarUrl 
} from "../utils/helpers";

const MAX_PLAYERS = 4;

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response;
  return response.status;
};

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  
  const [event, setEvent] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Edit form state
  const [form, setForm] = useState({
    tee: "",
    courseName: "",
    notes: "",
  });

  // Load event
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "events", id), (snap) => {
      if (snap.exists()) {
        setEvent({ id: snap.id, ...snap.data() });
        setForm({
          tee: snap.data().tee || "",
          courseName: snap.data().courseName || "",
          notes: snap.data().notes || "",
        });
      } else {
        setEvent(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, [id]);

  // Load users
  useEffect(() => {
    async function loadUsers() {
      const snap = await getDocs(collection(db, "users"));
      setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    loadUsers();
  }, []);

  // Get username from user ID
  const getUserName = (uid) => {
    const u = users.find(u => u.id === uid);
    return u?.username || u?.email?.split('@')[0] || 'Unknown';
  };

  // Get responses
  const responses = event?.responses || {};
  const myStatus = user ? getResponseStatus(responses[user.uid]) : null;
  
  // Separate confirmed and unavailable
  const confirmedIds = Object.entries(responses)
    .filter(([_, r]) => getResponseStatus(r) === 'available')
    .map(([uid]) => uid);
  
  const unavailableIds = Object.entries(responses)
    .filter(([_, r]) => getResponseStatus(r) === 'unavailable')
    .map(([uid]) => uid);

  // Check if user is the proposer
  const isProposer = user?.uid === event?.proposedBy;
  const canEdit = isAdmin || isProposer;

  // RSVP handler
  const handleRSVP = async (status) => {
    if (!event || !user) return;
    hapticFeedback('medium');

    try {
      const ref = doc(db, "events", event.id);
      const newResponses = { ...responses };
      
      if (status === null) {
        delete newResponses[user.uid];
      } else {
        newResponses[user.uid] = {
          status,
          updatedAt: new Date().toISOString(),
        };
      }
      
      await updateDoc(ref, { responses: newResponses });
      
      if (status === 'available') {
        showToast("You're in! ⛳", 'success');
      } else if (status === 'unavailable') {
        showToast("Response saved", 'default');
      }
    } catch (err) {
      console.error("Error updating RSVP:", err);
      showToast("Failed to save response", 'error');
    }
  };

  // Remove player (admin only)
  const removePlayer = async (uid) => {
    if (!event || !uid) return;
    hapticFeedback('medium');
    
    try {
      const ref = doc(db, "events", event.id);
      const newResponses = { ...responses };
      delete newResponses[uid];
      await updateDoc(ref, { responses: newResponses });
      showToast("Player removed", 'default');
    } catch (err) {
      console.error("Error removing player:", err);
      showToast("Failed to remove player", 'error');
    }
  };

  // Mark as booked
  const markBooked = async () => {
    if (!event) return;
    hapticFeedback('success');
    
    try {
      const ref = doc(db, "events", event.id);
      await updateDoc(ref, { booked: true, bookedAt: new Date().toISOString() });
      triggerConfetti();
      showToast("Round confirmed! ⛳🎉", 'success');
    } catch (err) {
      console.error("Error booking:", err);
      showToast("Failed to book", 'error');
    }
  };

  // Unmark booked
  const unmarkBooked = async () => {
    if (!event) return;
    hapticFeedback('medium');
    
    try {
      const ref = doc(db, "events", event.id);
      await updateDoc(ref, { booked: false, bookedAt: null });
      showToast("Booking removed", 'default');
    } catch (err) {
      console.error("Error:", err);
      showToast("Failed to update", 'error');
    }
  };

  // Save edits
  const saveEdits = async () => {
    if (!event) return;
    setSaving(true);
    
    try {
      const ref = doc(db, "events", event.id);
      await updateDoc(ref, {
        tee: form.tee || null,
        courseName: form.courseName || null,
        notes: form.notes || null,
      });
      setEditing(false);
      showToast("Changes saved", 'success');
    } catch (err) {
      console.error("Error saving:", err);
      showToast("Failed to save", 'error');
    } finally {
      setSaving(false);
    }
  };

  // Delete event
  const deleteEvent = async () => {
    if (!event) return;
    if (!confirm("Are you sure you want to delete this event?")) return;
    
    hapticFeedback('heavy');
    
    try {
      await deleteDoc(doc(db, "events", event.id));
      showToast("Event deleted", 'default');
      navigate("/");
    } catch (err) {
      console.error("Error deleting:", err);
      showToast("Failed to delete", 'error');
    }
  };

  // Share event
  const shareEvent = async () => {
    hapticFeedback('light');
    
    const date = event.date?.toDate?.();
    const dateStr = formatEventDate(date);
    const baseUrl = window.location.origin + (window.location.pathname.includes('/golfgang') ? '/golfgang' : import.meta.env.BASE_URL);
    const eventUrl = `${baseUrl}/event/${event.id}`;
    
    const playerNames = confirmedIds.map(uid => getUserName(uid)).join(', ');
    
    let msg = `⛳ Golf - ${event.booked ? "Booked" : "Proposed"}!\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕐 ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${event.courseName}\n`;
    if (playerNames) msg += `🏌️ ${playerNames}\n`;
    if (event.notes) msg += `\n📝 ${event.notes}\n`;
    msg += `\n🔗 ${eventUrl}`;
    
    if (event.booked) {
      msg += `\n\n📅 Add to Calendar:\n${buildGoogleCalendarUrl(event, eventUrl)}`;
    }
    
    try {
      await navigator.clipboard.writeText(msg);
      showToast("Copied to clipboard! 📋", 'success');
    } catch {
      showToast("Could not copy", 'error');
    }
  };

  if (loading) {
    return (
      <div className="page">
        <div className="page-content">
          <div className="skeleton" style={{ height: 32, width: '60%', marginBottom: 16 }}></div>
          <div className="skeleton" style={{ height: 120, marginBottom: 16 }}></div>
          <div className="skeleton" style={{ height: 80 }}></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="page">
        <div className="page-content">
          <div className="card">
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <div className="empty-state-title">Event not found</div>
              <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const date = event.date?.toDate?.();
  const dateStr = formatEventDate(date);

  return (
    <div className="page">
      <div className="page-content">
        {/* Back link */}
        <Link to="/" className="back-link">← Back to rounds</Link>

        {/* Event Header */}
        <div className="event-header">
          <h1 className="event-title">{event.title || "Golf Round"}</h1>
          <div className="event-status">
            {event.booked ? (
              <span className="badge badge-success">✓ Booked</span>
            ) : (
              <span className="badge badge-info">Proposed</span>
            )}
          </div>
        </div>

        {/* Event Details Card */}
        <div className="card">
          {!editing ? (
            <div className="event-details">
              <div className="event-detail">
                <span className="event-detail-icon">📅</span>
                <span>{dateStr}</span>
              </div>
              <div className="event-detail">
                <span className="event-detail-icon">🕐</span>
                <span>{event.tee || "Time TBA"}</span>
              </div>
              <div className="event-detail">
                <span className="event-detail-icon">📍</span>
                <span>{event.courseName || "Course TBA"}</span>
              </div>
              <div className="event-detail">
                <span className="event-detail-icon">👥</span>
                <span>{confirmedIds.length}/{MAX_PLAYERS} players</span>
              </div>
              {event.notes && (
                <div className="event-detail event-notes">
                  <span className="event-detail-icon">📝</span>
                  <span>{event.notes}</span>
                </div>
              )}
              
              <div className="event-actions">
                <button className="btn btn-ghost btn-sm" onClick={shareEvent}>
                  Share
                </button>
                {canEdit && (
                  <button className="btn btn-ghost btn-sm" onClick={() => setEditing(true)}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="event-edit-form">
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
                <input
                  type="text"
                  className="input"
                  value={form.courseName}
                  onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                  placeholder="Course name"
                />
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  className="input"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Additional details..."
                />
              </div>
              <div className="form-actions">
                <button className="btn btn-ghost" onClick={() => setEditing(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={saveEdits} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RSVP Section */}
        {!event.booked && (
          <div className="card">
            <h3 className="card-title">Are you in?</h3>
            {confirmedIds.length >= MAX_PLAYERS && !myStatus && (
              <div className="toast toast-warning" style={{ marginBottom: 12 }}>
                Group is full — you'll be on the reserve list
              </div>
            )}
            <div className="rsvp-buttons">
              <button
                className={`rsvp-btn rsvp-btn-available ${myStatus === 'available' ? 'active' : ''}`}
                onClick={() => handleRSVP(myStatus === 'available' ? null : 'available')}
              >
                ✓ I'm in
              </button>
              <button
                className={`rsvp-btn rsvp-btn-unavailable ${myStatus === 'unavailable' ? 'active' : ''}`}
                onClick={() => handleRSVP(myStatus === 'unavailable' ? null : 'unavailable')}
              >
                ✗ Can't make it
              </button>
            </div>
          </div>
        )}

        {/* Confirmed status for booked events */}
        {event.booked && myStatus === 'available' && (
          <div className="card card-success">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>✓</span>
              <span style={{ fontWeight: 600 }}>You're confirmed for this round</span>
            </div>
          </div>
        )}

        {/* Players List */}
        <div className="card">
          <h3 className="card-title">Players ({confirmedIds.length}/{MAX_PLAYERS})</h3>
          
          {confirmedIds.length === 0 ? (
            <p className="text-secondary">No one has RSVP'd yet</p>
          ) : (
            <div className="player-list">
              {confirmedIds.map((uid) => {
                const name = getUserName(uid);
                const style = getAvatarStyle(name);
                const isMe = uid === user?.uid;
                
                return (
                  <div key={uid} className="player-item">
                    <div className="player-info">
                      <div 
                        className="avatar"
                        style={{ backgroundColor: style.bg, color: style.text }}
                      >
                        {getInitials(name)}
                      </div>
                      <span className="player-name">
                        {name} {isMe && <span className="text-secondary">(you)</span>}
                      </span>
                    </div>
                    {isAdmin && !isMe && (
                      <button 
                        className="btn btn-ghost btn-sm btn-danger"
                        onClick={() => removePlayer(uid)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          
          {unavailableIds.length > 0 && (
            <>
              <h4 className="card-subtitle">Can't make it</h4>
              <div className="player-list player-list-unavailable">
                {unavailableIds.map((uid) => {
                  const name = getUserName(uid);
                  const style = getAvatarStyle(name);
                  return (
                    <div key={uid} className="player-item">
                      <div className="player-info">
                        <div 
                          className="avatar avatar-muted"
                          style={{ backgroundColor: '#e5e7eb', color: '#6b7280' }}
                        >
                          {getInitials(name)}
                        </div>
                        <span className="player-name text-secondary">{name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Admin Actions */}
        {canEdit && (
          <div className="card">
            <h3 className="card-title">Actions</h3>
            <div className="admin-actions">
              {!event.booked ? (
                <button 
                  className="btn btn-success btn-full"
                  onClick={markBooked}
                  disabled={confirmedIds.length === 0}
                >
                  ✓ Mark as Booked
                </button>
              ) : (
                <button 
                  className="btn btn-ghost btn-full"
                  onClick={unmarkBooked}
                >
                  Remove Booking
                </button>
              )}
              <button 
                className="btn btn-danger btn-full"
                onClick={deleteEvent}
              >
                Delete Event
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
