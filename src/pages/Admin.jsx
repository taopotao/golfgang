import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
                    <span className={`status-badge ${ev.booked ? "status-badge--booked" : "status-badge--proposed"}`}>
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
                  <button className="btn btn-ghost btn-sm" style={{ color: "var(--color-danger)" }} onClick={() => deleteEvent(ev.id)}>
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

        {users.map((u, idx) => (
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
              <div className="avatar">
                {(u.username || u.email || "?").charAt(0).toUpperCase()}
              </div>
              <div>
                <span style={{ fontWeight: 500 }}>{u.username || u.email}</span>
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
        ))}
      </div>
    </div>
  );
}