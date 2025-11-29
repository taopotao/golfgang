import { useEffect, useState } from "react";
import { getLatLngWithJS, getWeather, iconForWeather } from "../utils/weather";

export default function Forecast3Day({ placeId }) {
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    async function load() {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const coords = await getLatLngWithJS(placeId);
      if (!coords) return;

      const w = await getWeather(coords.lat, coords.lng);
      setDaily(w.daily);
    }
    load();
  }, [placeId]);

  if (!daily) return null;

  return (
  <div
    className="card"
    style={{
      padding: 20,
      marginBottom: 20,
      borderRadius: 16,
      background: "var(--color-surface)",
    }}
  >
    <h3 style={{ margin: 0, marginBottom: 12, fontSize: 16 }}>3-day forecast</h3>

    {daily.time.slice(0, 3).map((day, i) => {
      const temp = daily.temperature_2m_max[i];
      const rain = daily.precipitation_probability_max[i];
      const icon = iconForWeather(daily.weathercode[i]);
      const label = new Date(day).toLocaleDateString("en-AU", {
        weekday: "short",
      });

      return (
        <div
          key={day}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom:
              i < 2 ? "1px solid var(--color-border-subtle)" : "none",
            fontSize: 14,
          }}
        >
          <span style={{ width: 52 }}>{label}</span>
          <span style={{ fontSize: 18, width: 32, textAlign: "center" }}>
            {icon}
          </span>
          <span style={{ minWidth: 64, fontWeight: 500 }}>{temp}°C</span>
          <span
            style={{
              minWidth: 70,
              textAlign: "right",
              color: "var(--color-text-muted)",
            }}
          >
            {rain}% rain
          </span>
        </div>
      );
    })}
  </div>
);
}
