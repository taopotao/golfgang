import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { showToast, hapticFeedback, formatShortDate, getInitials, getAvatarStyle } from "../utils/helpers";

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load events
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort by date descending
      list.sort((a, b) => (b.date?.toMillis() || 0) - (a.date?.toMillis() || 0));
      setEvents(list);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Load users
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setUsers(list);
    });
    return () => unsub();
  }, []);

  // Delete event
  const deleteEvent = async (eventId) => {
    if (!confirm("Delete this event?")) return;
    hapticFeedback('medium');
    
    try {
      await deleteDoc(doc(db, "events", eventId));
      showToast("Event deleted", 'default');
    } catch (err) {
      console.error("Error deleting event:", err);
      showToast("Failed to delete", 'error');
    }
  };

  // Toggle admin status
  const toggleAdmin = async (userId, currentStatus) => {
    if (!confirm(`${currentStatus ? 'Remove' : 'Grant'} admin privileges?`)) return;
    hapticFeedback('medium');
    
    try {
      await updateDoc(doc(db, "users", userId), {
        isAdmin: !currentStatus
      });
      showToast(`Admin ${currentStatus ? 'removed' : 'granted'}`, 'success');
    } catch (err) {
      console.error("Error updating user:", err);
      showToast("Failed to update", 'error');
    }
  };

  if (loading) {
    return (
      <div className="page">
        <div className="page-content">
          <div className="skeleton" style={{ height: 32, width: '40%', marginBottom: 24 }}></div>
          <div className="skeleton" style={{ height: 200, marginBottom: 16 }}></div>
          <div className="skeleton" style={{ height: 200 }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Admin Panel</h1>

        {/* Events Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Events</h3>
            <span className="badge">{events.length}</span>
          </div>
          
          {events.length === 0 ? (
            <p className="text-secondary">No events yet</p>
          ) : (
            <div className="admin-list">
              {events.map((ev) => {
                const dateStr = formatShortDate(ev.date?.toDate?.());
                const attendingCount = ev.responses 
                  ? Object.values(ev.responses).filter(r => 
                      (typeof r === 'string' ? r : r?.status) === 'available'
                    ).length 
                  : 0;
                
                return (
                  <div key={ev.id} className="admin-list-item">
                    <div className="admin-list-info">
                      <div className="admin-list-title">
                        {ev.title || 'Golf Round'}
                        {ev.booked && (
                          <span className="badge badge-success badge-sm">Booked</span>
                        )}
                      </div>
                      <div className="admin-list-meta">
                        {dateStr} • {attendingCount}/4 players
                        {ev.courseName && ` • ${ev.courseName}`}
                      </div>
                    </div>
                    <div className="admin-list-actions">
                      <Link to={`/event/${ev.id}`} className="btn btn-ghost btn-sm">
                        View
                      </Link>
                      <button 
                        className="btn btn-ghost btn-sm btn-danger"
                        onClick={() => deleteEvent(ev.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Users Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Users</h3>
            <span className="badge">{users.length}</span>
          </div>
          
          {users.length === 0 ? (
            <p className="text-secondary">No users yet</p>
          ) : (
            <div className="admin-list">
              {users.map((u) => {
                const displayName = u.username || u.email?.split('@')[0] || 'User';
                const avatarStyle = getAvatarStyle(displayName);
                
                return (
                  <div key={u.id} className="admin-list-item">
                    <div className="admin-list-info">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div 
                          className="avatar avatar-sm"
                          style={{ backgroundColor: avatarStyle.bg, color: avatarStyle.text }}
                        >
                          {getInitials(displayName)}
                        </div>
                        <div>
                          <div className="admin-list-title">
                            {displayName}
                            {u.isAdmin && (
                              <span className="badge badge-success badge-sm">Admin</span>
                            )}
                          </div>
                          <div className="admin-list-meta">{u.email}</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-list-actions">
                      <button 
                        className={`btn btn-ghost btn-sm ${u.isAdmin ? 'btn-danger' : ''}`}
                        onClick={() => toggleAdmin(u.id, u.isAdmin)}
                      >
                        {u.isAdmin ? 'Remove Admin' : 'Make Admin'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
