import { useEffect, useState } from "react";

export default function PlacePhoto({ 
  placeId, 
  style = {},
  alt = "Place photo"
}) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!placeId) {
      setPhotoUrl(null);
      setLoading(false);
      return;
    }

    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.warn("Google Maps not loaded");
      setPhotoUrl(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const tempDiv = document.createElement("div");
    const service = new window.google.maps.places.PlacesService(tempDiv);

    service.getDetails(
      {
        placeId: placeId,
        fields: ["photos"],
      },
      (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place?.photos?.length > 0
        ) {
          const url = place.photos[0].getUrl({
            maxWidth: 1000,
            maxHeight: 600,
          });
          setPhotoUrl(url);
        } else {
          setPhotoUrl(null);
        }
        setLoading(false);
      }
    );
  }, [placeId]);

  // Show placeholder for loading or no photo
  if (loading || !photoUrl) {
    return (
      <div
        style={{
          ...style,
          background: "linear-gradient(135deg, var(--color-surface-soft) 0%, var(--color-surface) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && (
          <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>
            Loading...
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={alt}
      style={style}
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  );
}