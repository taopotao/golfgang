import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

// Helper to get two initials from name/email
const getInitials = (name) => {
  if (!name) return "??";
  const parts = name.split(/[\s@._-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

// Consistent avatar colours based on name
const getAvatarColor = (name) => {
  const colors = [
    ['#10b981', '#059669'], // green
    ['#3b82f6', '#2563eb'], // blue
    ['#8b5cf6', '#7c3aed'], // purple
    ['#f59e0b', '#d97706'], // amber
    ['#ec4899', '#db2777'], // pink
    ['#06b6d4', '#0891b2'], // cyan
    ['#f97316', '#ea580c'], // orange
  ];
  const index = (name || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Colour palette matching Dashboard
  const colors = {
    booked: {
      badge: '#059669',
      badgeText: '#ffffff',
    },
    proposed: {
      badge: '#eff6ff',
      badgeText: '#2563eb',
      badgeBorder: '#bfdbfe',
    }
  };

  useEffect(() => {
    async function load() {
      const evSnap = await getDocs(collection(db, "events"));
      const eventList = evSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      const userSnap = await getDocs(collection(db, "users"));
      const userList = userSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

      setEvents(eventList);
      setUsers(userList);
      setLoading(false);
    }
    load();
  }, []);

  const deleteEvent = async (id) => {
    if (!confirm("Delete this event?")) return;
    await deleteDoc(doc(db, "events", id));
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const toggleAdmin = async (uid, isAdmin) => {
    const ref = doc(db, "users", uid);
    await updateDoc(ref, { isAdmin: !isAdmin });
    setUsers((prev) =>
      prev.map((u) => (u.id === uid ? { ...u, isAdmin: !isAdmin } : u))
    );
  };

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          Loading…
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Admin</h1>
          <p>Manage events and users</p>
        </div>
      </div>

      {/* EVENTS */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="section-header">
          <span className="section-title">Events</span>
          <span className="section-count">{events.length}</span>
        </div>

        {events.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)", padding: "12px 0" }}>
            No events yet
          </p>
        ) : (
          events.map((ev, idx) => {
            const dateString = ev.date?.toDate?.().toLocaleString("en-AU", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: idx < events.length - 1 ? "1px solid var(--color-divider)" : "none",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 500 }}>{ev.title}</span>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: 6,
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      ...(ev.booked ? {
                        background: colors.booked.badge,
                        color: colors.booked.badgeText,
                      } : {
                        background: colors.proposed.badge,
                        color: colors.proposed.badgeText,
                        border: `1px solid ${colors.proposed.badgeBorder}`,
                      })
                    }}>
                      {ev.booked ? "Booked" : "Proposed"}
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                    {dateString}
                  </span>
                </div>

                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <Link to={`/event/${ev.id}`} className="btn btn-ghost btn-sm">
                    Open
                  </Link>
                  <button 
                    className="btn btn-ghost btn-sm" 
                    style={{ color: "var(--color-danger)" }} 
                    onClick={() => deleteEvent(ev.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* USERS */}
      <div className="card">
        <div className="section-header">
          <span className="section-title">Users</span>
          <span className="section-count">{users.length}</span>
        </div>

        {users.map((u, idx) => {
          const displayName = u.username || u.email || "?";
          const initials = getInitials(displayName);
          const [colorLight, colorDark] = getAvatarColor(displayName);
          
          return (
            <div
              key={u.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: idx < users.length - 1 ? "1px solid var(--color-divider)" : "none",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colorLight} 0%, ${colorDark} 100%)`,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 13,
                  flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div>
                  <span style={{ fontWeight: 500 }}>{displayName}</span>
                  {u.isAdmin && (
                    <span style={{
                      marginLeft: 8,
                      fontSize: 11,
                      padding: "2px 6px",
                      borderRadius: 4,
                      background: "var(--color-primary-soft)",
                      color: "var(--color-primary)",
                      fontWeight: 500,
                    }}>
                      Admin
                    </span>
                  )}
                </div>
              </div>

              <button
                className="btn btn-ghost btn-sm"
                onClick={() => toggleAdmin(u.id, u.isAdmin)}
              >
                {u.isAdmin ? "Remove Admin" : "Make Admin"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
