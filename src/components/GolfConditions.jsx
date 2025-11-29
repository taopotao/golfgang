import { useEffect, useState } from "react";
import { getLatLngWithJS, getWeather } from "../utils/weather";

export default function GolfConditions({ placeId, date, tee }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const coords = await getLatLngWithJS(placeId);
      if (!coords) return;

      const weather = await getWeather(coords.lat, coords.lng);

      // determine tee-time index (hour of day)
      let idx = null;
      if (tee) {
        const [h, m] = tee.split(":").map(Number);
        idx = h; // hour index
      }

      setData({ coords, weather, idx });
    }
    load();
  }, [placeId, tee, date]);

  if (!data) return null;

  const { weather, idx } = data;

  // fallback if tee missing
  const t = idx ?? 9;

  const temp = weather.hourly.temperature_2m[t];
  const rain = weather.hourly.precipitation_probability[t];
  const wind = weather.hourly.windspeed_10m[t];
  const cloud = weather.hourly.cloudcover[t];

  // score calculation
  const score =
    10 -
    (Math.abs(temp - 22) * 0.1 + rain * 0.05 + wind * 0.05 + cloud * 0.01);

  const cleanScore = Math.max(0, Math.min(10, score)).toFixed(1);

  return (
  <div
    style={{
      marginTop: "12px",
      padding: "12px 14px",
      background: "var(--color-surface-soft)",
      borderRadius: "12px",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <h4 style={{ margin: "0 0 4px 0", fontSize: "15px", fontWeight: 600 }}>
  Golf Conditions
</h4>

<div
  style={{
    fontSize: "12px",
    color: "var(--text-muted)",
    marginBottom: "8px",
  }}
>
  {date?.toDate
    ? date.toDate().toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Event date TBA"}{" "}
  {tee && `· Tee time ${tee}`}
</div>

    <div style={{ fontSize: "13px", lineHeight: 1.4 }}>
      <div><strong>Score:</strong> {cleanScore} / 10</div>
      <div><strong>Temp:</strong> {temp}°C</div>
      <div><strong>Rain:</strong> {rain}%</div>
      <div><strong>Wind:</strong> {wind} km/h</div>
      <div><strong>Cloud:</strong> {cloud}%</div>
    </div>
  </div>
);
}
