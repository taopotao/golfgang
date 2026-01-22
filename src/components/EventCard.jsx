import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import {
  showToast,
  hapticFeedback,
  getInitials,
  getAvatarStyle,
  buildGoogleCalendarUrl,
  triggerConfetti,
} from "../utils/helpers";

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === "string") return response;
  return response.status;
};

export default function EventCard({
  event,
  users,
  weather,
  getWeatherIcon,
  relativeTime,
}) {
  const { user } = useAuth();

  const dateObj = event.date?.toDate ? event.date.toDate() : new Date(event.date);

  // Get user's response status
  const myStatus =
    user && event.responses ? getResponseStatus(event.responses[user.uid]) : null;

  // Count attending players
  const attendingCount = event.responses
    ? Object.values(event.responses).filter(
        (r) => getResponseStatus(r) === "available"
      ).length
    : 0;

  // Get attending user IDs for avatars
  const attendingIds = event.responses
    ? Object.entries(event.responses)
        .filter(([, r]) => getResponseStatus(r) === "available")
        .map(([uid]) => uid)
        .slice(0, 4)
    : [];

  // Check if group is full
  const isFull = attendingCount >= 4;

  // Get username from users array
  const getUserName = (uid) => {
    const u = users?.find((u) => u.id === uid);
    return u?.username || u?.email?.split("@")[0] || "User";
  };

  // Get creator name
  const creatorName = event.createdBy ? getUserName(event.createdBy) : null;

  // Share to clipboard function
  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    hapticFeedback("light");

    const date = event.date?.toDate ? event.date.toDate() : null;
    const dateStr =
      date?.toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }) || "";

    const baseUrl =
      window.location.origin +
      (window.location.pathname.includes("/golfgang") ? "/golfgang" : "");
    const eventUrl = `${baseUrl}/event/${event.id}`;

    const playerNames = attendingIds
      .map((uid) => getUserName(uid).toLowerCase())
      .join(", ");

    let msg = `⛳ Golf - ${event.booked ? "Booked" : "Proposed"}!\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕒 ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${event.courseName}\n`;
    if (playerNames) msg += `🏌️ ${playerNames}\n`;

    if (event.notes) {
      msg += `\n📝 ${event.notes}\n`;
    }

    msg += `\n🔗 RSVP here: ${eventUrl}`;

    if (event.booked) {
      const calUrl = buildGoogleCalendarUrl(event, eventUrl);
      msg += `\n\n📅 Add to Google Calendar:\n${calUrl}`;
    }

    try {
      await navigator.clipboard.writeText(msg);
      showToast("Copied to clipboard! 📋", "success");
    } catch {
      showToast("Could not copy", "error");
    }
  };

  // Add to calendar function
  const handleAddToCalendar = (e) => {
    e.preventDefault();
    e.stopPropagation();

    hapticFeedback("light");

    const baseUrl =
      window.location.origin +
      (window.location.pathname.includes("/golfgang") ? "/golfgang" : "");
    const eventUrl = `${baseUrl}/event/${event.id}`;
    const calUrl = buildGoogleCalendarUrl(event, eventUrl);

    window.open(calUrl, "_blank");
  };

  return (
    <Link
      to={`/event/${event.id}`}
      className={`event-card-new ${event.booked ? "booked" : "proposed"} ${
        isFull ? "full" : ""
      }`}
    >
      {/* Left accent bar */}
      <div className={`event-card-accent ${event.booked ? "booked" : "proposed"}`} />

      {/* Main content */}
      <div className="event-card-content">
        {/* Top row: Date + Weather + Actions */}
        <div className="event-card-top">
          <div className="event-card-date-box">
            <span className="event-card-day-num">{dateObj.getDate()}</span>
            <span className="event-card-month-abbr">
              {dateObj.toLocaleDateString("en-AU", { month: "short" }).toUpperCase()}
            </span>
          </div>

          <div className="event-card-main">
            <div className="event-card-title-row">
              <h3 className="event-card-title">
                {event.title || "Golf Round"}
              </h3>
              {event.booked && <span className="status-badge booked">Booked</span>}
              {!event.booked && <span className="status-badge proposed">Proposed</span>}
            </div>

            {/* Meta info */}
              <div className="event-card-meta">
                {relativeTime && (
                  <span className="meta-item countdown">{relativeTime}</span>
                )}
                {event.tee && <span className="meta-item">🕐 {event.tee}</span>}
                {event.courseName && (
                  <span className="meta-item">📍 {event.courseName}</span>
                )}
                {event.rsvpDeadline && (
                  <span className="meta-item">
                    ⏰ RSVP by {(event.rsvpDeadline.toDate ? event.rsvpDeadline.toDate() : new Date(event.rsvpDeadline)).toLocaleDateString("en-AU", {
                      weekday: "short",
                      day: "numeric",
                      month: "short"
                    })}
                  </span>
                )}
              </div>

            {/* Creator */}
            {creatorName && (
              <div className="event-card-creator">
                Proposed by {creatorName}
              </div>
            )}
          </div>

          {/* Weather + Actions */}
          <div className="event-card-right">
            {weather && (
          <div className="weather-badge">
            <span className="weather-icon">{getWeatherIcon(weather.code)}</span>
            <span className="weather-temp">{weather.tempMin}° - {weather.tempMax}°</span>
          </div>
        )}

            <div className="event-card-actions">
              <button
                onClick={handleShare}
                className="action-btn"
                title="Share event"
              >
                📤
              </button>
              {event.booked && (
                <button
                  onClick={handleAddToCalendar}
                  className="action-btn"
                  title="Add to calendar"
                >
                  📅
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom row: Players */}
        <div className="event-card-bottom">
          <div className="event-card-players">
            {/* Player avatars */}
            <div className="player-avatars">
              {attendingIds.map((uid) => {
                const name = getUserName(uid);
                const style = getAvatarStyle(name);
                return (
                  <div
                    key={uid}
                    className="player-avatar"
                    style={{ backgroundColor: style.bg, color: style.text }}
                    title={name}
                  >
                    {getInitials(name)}
                  </div>
                );
              })}
              {/* Empty slots */}
              {[...Array(Math.max(0, 4 - attendingCount))].map((_, i) => (
                <div key={`empty-${i}`} className="player-avatar empty">
                  ?
                </div>
              ))}
            </div>

            {/* Player count with progress bar */}
            <div className="player-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(attendingCount / 4) * 100}%` }}
                />
              </div>
              <span className="player-count">
                {attendingCount}/4 players
                {isFull && <span className="full-badge">🎉 Full!</span>}
              </span>
            </div>
          </div>

          {/* Your status */}
          {myStatus === "available" && (
            <span className="your-status in">✓ You're in</span>
          )}
          {!myStatus && user && (
            <span className="your-status pending">RSVP needed</span>
          )}
        </div>
      </div>
    </Link>
  );
}