import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response;
  return response.status;
};

export default function MyEvents() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setEvents(list);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Get events where user has RSVPd "available"
  const myEvents = events
    .filter(ev => {
      const myStatus = ev.responses ? getResponseStatus(ev.responses[user?.uid]) : null;
      return myStatus === 'available';
    })
    .sort((a, b) => a.date.toMillis() - b.date.toMillis());

  if (loading) {
    return (
      <div className="page">
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 'var(--text-xl)', marginBottom: 4 }}>My RSVPs</h1>
        </div>
        <div className="card">
          <div style={{ padding: 20, textAlign: 'center', color: 'var(--color-text-secondary)' }}>
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 'var(--text-xl)', marginBottom: 4 }}>My RSVPs</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', margin: 0 }}>
          Events you've said yes to
        </p>
      </div>

      {myEvents.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏌️</div>
          <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 8 }}>No RSVPs yet</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 20, maxWidth: 280, margin: '0 auto 20px' }}>
            When you respond "I'm in" to an event, it'll show up here so you can keep track of your rounds.
          </p>
          <Link to="/" className="btn btn-primary">
            Browse Events
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {myEvents.map((ev) => {
            const dateObj = ev.date.toDate();
            const attendingCount = ev.responses 
              ? Object.values(ev.responses).filter(r => getResponseStatus(r) === 'available').length 
              : 0;
            
            return (
              <Link 
                key={ev.id} 
                to={`/event/${ev.id}`} 
                style={{ 
                  textDecoration: "none",
                  display: 'block',
                  padding: 14,
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 500, color: "var(--color-text)" }}>{ev.title}</span>
                  <span className={`status-badge ${ev.booked ? "status-badge--booked" : "status-badge--proposed"}`}>
                    {ev.booked ? "Booked" : "Open"}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 6 }}>
                  {dateObj.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                  {ev.tee && ` • ${ev.tee}`}
                  {ev.courseName && ` • ${ev.courseName}`}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12 }}>
                    <span style={{ color: "var(--color-text-tertiary)" }}>👥 {attendingCount}/4</span>
                    <span style={{ color: "var(--color-success)", fontWeight: 500 }}>✓ You're in</span>
                  </div>
                  <span style={{ fontSize: 16, color: "var(--color-text-tertiary)" }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
