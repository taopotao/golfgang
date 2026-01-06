// src/components/EventCard.jsx
// Complete updated version with Add to Calendar button

import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { getInitials, getAvatarStyle, hapticFeedback, buildGoogleCalendarUrl } from "../utils/helpers";

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response;
  return response.status;
};

export default function EventCard({ event, users }) {
  const { user } = useAuth();
  
  const dateObj = event.date?.toDate();
  const myStatus = user && event.responses ? getResponseStatus(event.responses[user.uid]) : null;
  const attendingCount = event.responses
    ? Object.values(event.responses).filter((r) => getResponseStatus(r) === "available").length
    : 0;

  // Add to Calendar handler
  const handleAddToCalendar = (e) => {
    e.preventDefault(); // Prevent navigation to event page
    e.stopPropagation(); // Stop event bubbling
    hapticFeedback('light');
    
    const baseUrl = window.location.origin + (window.location.pathname.includes('/golfgang') ? '/golfgang' : import.meta.env.BASE_URL);
    const eventUrl = `${baseUrl}/event/${event.id}`;
    const calendarUrl = buildGoogleCalendarUrl(event, eventUrl);
    window.open(calendarUrl, '_blank');
  };

  return (
    <Link
      to={`/event/${event.id}`}
      style={{
        display: "block",
        padding: "16px 18px",
        borderRadius: 16,
        textDecoration: "none",
        color: "inherit",
        background: event.booked 
          ? "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" 
          : "white",
        border: event.booked 
          ? "1px solid #86efac" 
          : "1px solid var(--color-border)",
        boxShadow: event.booked
          ? "0 2px 8px rgba(34, 197, 94, 0.1)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.2s ease",
      }}
    >
      {/* Top row - date and badge */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 10,
      }}>
        <span style={{ 
          fontSize: 13, 
          color: "var(--color-text-secondary)",
          fontWeight: 500,
        }}>
          {dateObj?.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}
          {event.tee && <span style={{ color: "var(--color-text-tertiary)" }}> • {event.tee}</span>}
        </span>
        <span style={{
          padding: "5px 10px",
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 600,
          background: event.booked ? "#22c55e" : "#e0e7ff",
          color: event.booked ? "white" : "#4f46e5",
        }}>
          {event.booked ? "✓ Booked" : "Proposed"}
        </span>
      </div>

      {/* Course name */}
      {event.courseName && (
        <div style={{ 
          fontSize: 15, 
          fontWeight: 600, 
          color: "var(--color-text)",
          marginBottom: 8,
        }}>
          📍 {event.courseName}
        </div>
      )}

      {/* Bottom row - players and calendar button */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}>
        <span style={{ 
          fontSize: 13, 
          color: "var(--color-text-secondary)",
          fontWeight: 500,
        }}>
          👥 {attendingCount}/4 {myStatus === 'available' && '• You\'re in'}
        </span>

        {/* Add to Calendar Button */}
        <button
          onClick={handleAddToCalendar}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            background: event.booked ? "#3b82f6" : "#e0e7ff",
            color: event.booked ? "white" : "#4f46e5",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          📅 Add
        </button>
      </div>
    </Link>
  );
}
