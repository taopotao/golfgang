import { useEffect, useRef, useState } from "react";

/**
 * Wait for Google Maps to be loaded (from index.html script tag)
 */
function waitForGoogleMaps(timeout = 10000) {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      resolve();
      return;
    }

    // Poll for it to be ready
    const startTime = Date.now();
    const interval = setInterval(() => {
      if (window.google && window.google.maps && window.google.maps.places) {
        clearInterval(interval);
        resolve();
      } else if (Date.now() - startTime > timeout) {
        clearInterval(interval);
        reject(new Error("Google Maps failed to load within timeout"));
      }
    }, 100);
  });
}

/**
 * Props:
 *  onSelect({ name, address, placeId, photoUrl })
 *  initialValue (string)
 */
export default function CourseAutocomplete({ onSelect, initialValue = "" }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  useEffect(() => {
    let autocomplete;

    waitForGoogleMaps()
      .then(() => {
        if (!inputRef.current) return;

        autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["establishment"],
            fields: ["name", "formatted_address", "place_id", "photos"],
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          console.log("Place selected:", place); // Debug log
          
          if (!place || !place.place_id) return;

          let photoUrl = "";
          if (place.photos && place.photos.length > 0) {
            photoUrl = place.photos[0].getUrl({
              maxWidth: 1000,
              maxHeight: 600,
            });
            console.log("Photo URL:", photoUrl); // Debug log
          } else {
            console.log("No photos available for this place"); // Debug log
          }

          const payload = {
            name: place.name || "",
            address: place.formatted_address || "",
            placeId: place.place_id,
            photoUrl,
          };
          
          console.log("Payload being sent:", payload); // Debug log

          setValue(payload.name);
          onSelect?.(payload);
        });

        setError(null);
      })
      .catch((err) => {
        console.error("Error loading Google Maps:", err);
        setError("Google Maps failed to load. Please refresh the page.");
      });

    return () => {
      // Cleanup: Google Autocomplete doesn't have a destroy method,
      // but it will be garbage collected when input is removed
    };
  }, [onSelect]);

  return (
  <div style={{ position: "relative" }}>
    <input
      ref={inputRef}
      className="input"
      style={{ width: "100%", paddingRight: value ? 32 : undefined }}
      placeholder="Search golf course"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    {value && (
      <button
        type="button"
        onClick={() => {
          setValue("");
          onSelect?.({
            name: "",
            address: "",
            placeId: "",
            photoUrl: "",
          });
        }}
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
          color: "var(--color-text-tertiary)",
          padding: 4,
        }}
        aria-label="Clear course"
      >
        ✕
      </button>
    )}
    {error && (
      <p style={{ color: "var(--danger)", fontSize: 12, marginTop: 4 }}>
        {error}
      </p>
    )}
  </div>
);
}
