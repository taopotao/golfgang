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
    if (!confirm("Really delete this event?")) return;
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
        <div className="card">
          <p>Loading admin tools…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">

      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-title">
          <h1>Admin Panel</h1>
          <p>Manage events, users, and admin privileges.</p>
        </div>
      </div>


      {/* EVENTS SECTION */}
      <div className="card" style={{ marginBottom: 28 }}>

        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Events</h3>
            <p className="card-subtitle">Manage all scheduled rounds</p>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0 }}>
          {events.map((ev, idx) => {
            const dateString = ev.date?.toDate?.().toLocaleString("en-AU", {
              weekday: "long",
              month: "long",
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
                  padding: "14px 0",
                  borderBottom:
                    idx < events.length - 1
                      ? "1px solid var(--color-border-subtle)"
                      : "none",
                }}
              >
                {/* LEFT SIDE: Title + date */}
             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{ fontWeight: 600, fontSize: 15 }}>{ev.title}</span>

    <span
      className={`event-status-badge ${
        ev.booked ? "event-status-booked" : "event-status-proposed"
      }`}
    >
      {ev.booked ? "Booked" : "Proposed"}
    </span>
  </div>

  <span className="text-soft" style={{ fontSize: 13 }}>
    {dateString}
  </span>
</div>


                {/* RIGHT SIDE: Buttons */}
                <div style={{ display: "flex", gap: 10 }}>
                  <Link to={`/event/${ev.id}`} className="btn btn-primary btn-sm">
                    Open
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEvent(ev.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* USERS SECTION */}
      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <h3 className="card-title">Users</h3>
            <p className="card-subtitle">Manage member privileges</p>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0 }}>
          {users.map((u, idx) => (
            <div
              key={u.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom:
                  idx < users.length - 1
                    ? "1px solid var(--color-border-subtle)"
                    : "none",
              }}
            >
              {/* USER EMAIL + role badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 15 }}>{u.email}</span>

                {u.isAdmin && (
                  <span
                    style={{
                      background: "var(--color-primary-soft)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: 11,
                      color: "var(--color-primary)",
                      fontWeight: 500,
                    }}
                  >
                    admin
                  </span>
                )}
              </div>

              {/* ACTION BUTTON */}
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

    </div>
  );
}
