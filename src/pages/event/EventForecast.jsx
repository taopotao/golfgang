import Forecast3Day from "../../components/Forecast3Day";

export default function EventForecast({ placeId }) {
  if (!placeId) return null;

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3 style={{ marginBottom: 10 }}>3-Day Forecast</h3>
      <Forecast3Day placeId={placeId} />
    </div>
  );
}
