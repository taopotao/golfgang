import { useEffect, useRef, useState } from "react";

const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY
}&libraries=places`;

let scriptLoadingPromise = null;

function loadGoogleMapsScript() {
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve, reject) => {
    if (window.google && window.google.maps && window.google.maps.places) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = GOOGLE_MAPS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

/**
 * Props:
 *  onSelect({ name, address, placeId, photoUrl })
 *  initialValue (string)
 */
export default function CourseAutocomplete({ onSelect, initialValue = "" }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    let autocomplete;

    loadGoogleMapsScript()
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
          if (!place || !place.place_id) return;

          let photoUrl = "";
          if (place.photos && place.photos.length > 0) {
            photoUrl = place.photos[0].getUrl({
              maxWidth: 1000,
              maxHeight: 600,
            });
          }

          const payload = {
            name: place.name || "",
            address: place.formatted_address || "",
            placeId: place.place_id,
            photoUrl,
          };

          setValue(payload.name);
          onSelect?.(payload);
        });
      })
      .catch((err) => {
        console.error("Error loading Google Maps script", err);
      });

    return () => {
      // nothing to clean up; autocomplete is attached to input lifecycle
    };
  }, [onSelect]);

  return (
    <input
  ref={inputRef}
  className="input"
  style={{ width: "100%" }}   // ❤️ THIS FIXES EVERYTHING
  placeholder="Search golf course"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
  );
}
