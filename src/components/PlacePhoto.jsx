import { useEffect, useState } from "react";

/**
 * Fetches and displays a photo for a Google Place using the place_id.
 * This avoids 403 errors by fetching fresh photo URLs on each render.
 * 
 * Props:
 *  - placeId: Google Place ID
 *  - fallback: Fallback image URL if no photo available
 *  - style: CSS styles for the img element
 *  - alt: Alt text for the image
 */
export default function PlacePhoto({ 
  placeId, 
  fallback = "/share-bg-01.jpg", 
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

    // Check if Google Maps is loaded
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.warn("Google Maps not loaded, using fallback image");
      setPhotoUrl(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    // Create a temporary div for PlacesService (it requires a map or div)
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
          console.log("No photos found for place:", placeId, status);
          setPhotoUrl(null);
        }
        setLoading(false);
      }
    );
  }, [placeId]);

  if (loading) {
    return (
      <div
        style={{
          ...style,
          background: "var(--color-surface-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>
          Loading...
        </span>
      </div>
    );
  }

  return (
    <img
      src={photoUrl || fallback}
      alt={alt}
      style={style}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}
