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

        // determine tee-time index (hour of day)
        let idx = null;
        if (tee) {
          const [h] = tee.split(":").map(Number);
          idx = h; // hour index
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
    padding: "12px 14px",
    background: "var(--color-surface-soft)",
    borderRadius: 10,
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "background 0.15s ease",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
          Loading weather for {eventDateStr || "event day"}...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
          {error}
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { weather, idx } = data;

  // fallback if tee missing
  const t = idx ?? 9;

  const temp = Math.round(weather.hourly.temperature_2m[t]);
  const rain = weather.hourly.precipitation_probability[t];
  const wind = Math.round(weather.hourly.windspeed_10m[t]);
  const cloud = weather.hourly.cloudcover[t];

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
      {/* Header showing this is for event day */}
      <div style={{ 
        fontSize: 11, 
        color: "var(--color-text-muted)", 
        marginBottom: 6,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}>
        Weather for {eventDateStr || "event day"} {tee && `@ ${tee}`}
      </div>

      {/* Summary line */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: 8,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>{icon}</span>
          <div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
            <span style={{ fontSize: 13, color: "var(--color-text-muted)", marginLeft: 8 }}>
              {temp}°C • {wind} km/h
            </span>
          </div>
        </div>
        <span style={{ 
          fontSize: 12, 
          color: "var(--color-text-muted)",
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
          marginTop: 6,
        }}>
          ⚠️ {warnings.join(", ")}
        </div>
      )}

      {/* Expanded details */}
      {expanded && (
        <div style={{ 
          marginTop: 12, 
          paddingTop: 12, 
          borderTop: "1px solid var(--color-border-subtle)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px 16px",
          fontSize: 13,
        }}>
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Temperature</span>
            <div style={{ fontWeight: 500 }}>{temp}°C</div>
          </div>
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Rain chance</span>
            <div style={{ fontWeight: 500 }}>{rain}%</div>
          </div>
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Wind</span>
            <div style={{ fontWeight: 500 }}>{wind} km/h</div>
          </div>
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Cloud cover</span>
            <div style={{ fontWeight: 500 }}>{cloud}%</div>
          </div>
        </div>
      )}
    </div>
  );
}
