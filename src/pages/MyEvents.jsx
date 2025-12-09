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

  // Refined colour palette - matches Dashboard
  const colors = {
    booked: {
      bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      border: '#10b981',
      badge: '#059669',
      badgeText: '#ffffff',
    },
    proposed: {
      bg: '#ffffff',
      border: '#e5e7eb',
      accent: '#3b82f6',
      badge: '#eff6ff',
      badgeText: '#2563eb',
      badgeBorder: '#bfdbfe',
    }
  };

  // Event card styles based on booked status
  const getEventCardStyle = (isBooked) => {
    const baseStyle = {
      textDecoration: "none",
      display: 'block',
      padding: 16,
      borderRadius: 12,
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (isBooked) {
      return {
        ...baseStyle,
        background: colors.booked.bg,
        border: `2px solid ${colors.booked.border}`,
        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.12)',
      };
    } else {
      return {
        ...baseStyle,
        background: colors.proposed.bg,
        border: `1px solid ${colors.proposed.border}`,
        borderLeft: `4px solid ${colors.proposed.accent}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      };
    }
  };

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {myEvents.map((ev) => {
            const dateObj = ev.date.toDate();
            const attendingCount = ev.responses 
              ? Object.values(ev.responses).filter(r => getResponseStatus(r) === 'available').length 
              : 0;
            
            return (
              <Link 
                key={ev.id} 
                to={`/event/${ev.id}`}
                style={getEventCardStyle(ev.booked)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = ev.booked 
                    ? '0 6px 16px rgba(16, 185, 129, 0.2)' 
                    : '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = ev.booked 
                    ? '0 2px 8px rgba(16, 185, 129, 0.12)' 
                    : '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                {/* Status indicator bar for booked events */}
                {ev.booked && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: colors.booked.border,
                  }} />
                )}

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ 
                      fontWeight: 600, 
                      fontSize: 15,
                      color: "var(--color-text)",
                      display: 'block',
                      marginBottom: 4,
                    }}>
                      {ev.title}
                    </span>
                    <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                      {dateObj.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
                      {ev.tee && ` • ${ev.tee}`}
                    </div>
                    {ev.courseName && (
                      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 2 }}>
                        📍 {ev.courseName}
                      </div>
                    )}
                  </div>
                  
                  {/* Status badge */}
                  <div style={{
                    padding: '5px 10px',
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap',
                    ...(ev.booked ? {
                      background: colors.booked.badge,
                      color: colors.booked.badgeText,
                    } : {
                      background: colors.proposed.badge,
                      color: colors.proposed.badgeText,
                      border: `1px solid ${colors.proposed.badgeBorder}`,
                    })
                  }}>
                    {ev.booked ? '✓ Booked' : 'Proposed'}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
                    <span style={{ 
                      color: "var(--color-text-secondary)",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                      👥 {attendingCount}/4
                    </span>
                    <span style={{ 
                      color: colors.booked.badge, 
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                      ✓ You're in
                    </span>
                  </div>
                  <span style={{ fontSize: 18, color: "var(--color-text-tertiary)" }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
