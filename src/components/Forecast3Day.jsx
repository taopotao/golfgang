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
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "16px",
      background: "var(--surface-elevated)",
    }}
  >
    <h3 style={{ margin: 0, marginBottom: "16px" }}>3-Day Forecast</h3>

    {daily.time.slice(0, 3).map((day, i) => {
      const temp = daily.temperature_2m_max[i];
      const rain = daily.precipitation_probability_max[i];
      const icon = iconForWeather(daily.weathercode[i]);
      const date = new Date(day).toLocaleDateString("en-AU", {
        weekday: "short",
      });

      return (
        <div
          key={day}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom:
              i < 2 ? "1px solid var(--color-border-subtle)" : "none",
            fontSize: "15px",
          }}
        >
          <div style={{ width: "60px", opacity: 0.9 }}>{date}</div>

          <div style={{ width: "40px", textAlign: "center", fontSize: "18px" }}>
            {icon}
          </div>

          <div style={{ width: "80px", fontWeight: 500 }}>{temp}°C</div>

          <div
            style={{
              width: "80px",
              textAlign: "right",
              color: "var(--text-muted)",
            }}
          >
            {rain}% rain
          </div>
        </div>
      );
    })}
  </div>
);
}
