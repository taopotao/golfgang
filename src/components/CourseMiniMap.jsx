export default function CourseMiniMap({ placeId }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey || !placeId) return null;

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;

  return (
    <div
      className="surface"
      style={{
        padding: 0,
        overflow: "hidden",
        marginBottom: "1.5rem",
        height: "220px",
      }}
    >
      <iframe
        title="Course location"
        src={src}
        style={{ border: 0, width: "100%", height: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
