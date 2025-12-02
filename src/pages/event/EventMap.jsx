import CourseMiniMap from "../../components/CourseMiniMap";

export default function EventMap({ placeId }) {
  if (!placeId) return null;

  return (
    <div className="card simple" style={{ marginBottom: 20 }}>
      <CourseMiniMap placeId={placeId} />
    </div>
  );
}
