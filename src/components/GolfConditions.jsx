import { useEffect, useState } from "react";
import { getLatLngWithJS, getWeather } from "../utils/weather";

// Get a human-readable condition summary
function getConditionSummary(score, temp, rain, wind) {
  let icon = "⛳";
  let label = "Good";
  
  if (score >= 8) {
    icon = "☀️";
    label = "Great conditions";
  } else if (score >= 6) {
    icon = "⛅";
    label = "Good conditions";
  } else if (score >= 4) {
    icon = "🌥️";
    label = "Fair conditions";
  } else {
    icon = "🌧️";
    label = "Challenging";
  }
  
  // Add specific warnings
  const warnings = [];
  if (rain > 50) warnings.push("rain likely");
  if (wind > 25) warnings.push("windy");
  if (temp > 35) warnings.push("hot");
  if (temp < 10) warnings.push("cold");
  
  return { icon, label, warnings };
}

/**
 * Calculate the hourly index into Open-Meteo's hourly array
 * Open-Meteo returns hourly data starting from midnight of the current day
 * So for future dates, we need to offset by (days difference * 24) + hour
 */
function getHourlyIndex(eventDate, teeTime) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Get the event date (strip time component)
  const eventJs = eventDate?.toDate ? eventDate.toDate() : new Date(eventDate);
  const eventDay = new Date(eventJs.getFullYear(), eventJs.getMonth(), eventJs.getDate());
  
  // Calculate days difference
  const daysDiff = Math.round((eventDay - today) / (1000 * 60 * 60 * 24));
  
  // Get hour from tee time (default to 9am if not specified)
  let hour = 9;
  if (teeTime) {
    const [h] = teeTime.split(":").map(Number);
    if (!isNaN(h)) hour = h;
  }
  
  // Calculate the index: (days * 24 hours) + hour of day
  const index = Math.max(0, daysDiff * 24 + hour);
  
  return index;
}

export default function GolfConditions({ placeId, date, tee }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Format the event date for display
  const eventDateStr = date?.toDate 
    ? date.toDate().toLocaleDateString("en-AU", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : null;

  useEffect(() => {
    if (!placeId) return;

    async function load() {
      setLoading(true);
      setError(null);
      
      try {
        const coords = await getLatLngWithJS(placeId);
        if (!coords) {
          setError("Could not get course location");
          return;
        }

        const weather = await getWeather(coords.lat, coords.lng);
        
        // Calculate the correct hourly index based on event date and tee time
        const idx = getHourlyIndex(date, tee);
        
        // Check if we have data for this index (Open-Meteo typically returns 7 days = 168 hours)
        const maxIndex = weather.hourly?.temperature_2m?.length || 0;
        if (idx >= maxIndex) {
          setError("Forecast not available for this date");
          return;
        }

        setData({ coords, weather, idx });
      } catch (err) {
        console.error("Failed to load golf conditions:", err);
        setError("Could not load conditions");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [placeId, tee, date]);

  if (!placeId) return null;

  const containerStyle = {
    padding: "14px 16px",
    background: "var(--color-bg-secondary)",
    borderRadius: "var(--radius-lg)",
    cursor: "pointer",
    transition: "background 0.15s ease",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
          Loading weather...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
          {error}
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { weather, idx } = data;

  const temp = Math.round(weather.hourly.temperature_2m[idx]);
  const rain = weather.hourly.precipitation_probability[idx];
  const wind = Math.round(weather.hourly.windspeed_10m[idx]);
  const cloud = weather.hourly.cloudcover[idx];

  // score calculation
  const score =
    10 -
    (Math.abs(temp - 22) * 0.1 + rain * 0.05 + wind * 0.05 + cloud * 0.01);

  const cleanScore = Math.max(0, Math.min(10, score));
  const { icon, label, warnings } = getConditionSummary(cleanScore, temp, rain, wind);

  return (
    <div 
      style={containerStyle}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div style={{ 
        fontSize: 11, 
        color: "var(--color-text-tertiary)", 
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        fontWeight: 500,
      }}>
        Weather {eventDateStr && `• ${eventDateStr}`} {tee && `@ ${tee}`}
      </div>

      {/* Summary */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>{icon}</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text)" }}>
              {label}
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              {temp}°C • {wind} km/h wind • {rain}% rain
            </div>
          </div>
        </div>
        <span style={{ 
          fontSize: 12, 
          color: "var(--color-text-tertiary)",
          transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}>
          ▼
        </span>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div style={{ 
          fontSize: 12, 
          color: "var(--color-danger)", 
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}>
          ⚠️ {warnings.join(", ")}
        </div>
      )}

      {/* Expanded details */}
      {expanded && (
        <div style={{ 
          marginTop: 12, 
          paddingTop: 12, 
          borderTop: "1px solid var(--color-border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px 20px",
          fontSize: 13,
        }}>
          <div>
            <div style={{ color: "var(--color-text-tertiary)", fontSize: 11, marginBottom: 2 }}>Temperature</div>
            <div style={{ fontWeight: 500, color: "var(--color-text)" }}>{temp}°C</div>
          </div>
          <div>
            <div style={{ color: "var(--color-text-tertiary)", fontSize: 11, marginBottom: 2 }}>Rain chance</div>
            <div style={{ fontWeight: 500, color: "var(--color-text)" }}>{rain}%</div>
          </div>
          <div>
            <div style={{ color: "var(--color-text-tertiary)", fontSize: 11, marginBottom: 2 }}>Wind</div>
            <div style={{ fontWeight: 500, color: "var(--color-text)" }}>{wind} km/h</div>
          </div>
          <div>
            <div style={{ color: "var(--color-text-tertiary)", fontSize: 11, marginBottom: 2 }}>Cloud cover</div>
            <div style={{ fontWeight: 500, color: "var(--color-text)" }}>{cloud}%</div>
          </div>
        </div>
      )}
    </div>
  );
}
