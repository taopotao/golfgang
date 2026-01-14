import { useState, useEffect, useRef } from 'react';

/**
 * PlacePhoto - Displays a course photo using Google Places API
 * 
 * Props:
 * - placeId: Google Place ID (required for photo fetch)
 * - courseName: Course name (used for alt text)
 * - alt: Alt text for image
 * - style: CSS styles
 * - className: CSS class name
 */
export default function PlacePhoto({ placeId, courseName, alt, style, className }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const placesServiceRef = useRef(null);

  useEffect(() => {
    // Reset state when placeId changes
    setPhotoUrl(null);
    setError(false);
    setLoading(false);

    if (!placeId) {
      setError(true);
      return;
    }

    async function fetchPhoto() {
      // Wait for Google Maps to be ready
      if (!window.google?.maps?.places) {
        // Try again after a short delay
        const timeout = setTimeout(() => {
          if (window.google?.maps?.places) {
            fetchPhoto();
          } else {
            setError(true);
          }
        }, 1000);
        return () => clearTimeout(timeout);
      }

      setLoading(true);

      try {
        // Create PlacesService if not exists
        if (!placesServiceRef.current) {
          placesServiceRef.current = new window.google.maps.places.PlacesService(
            document.createElement('div')
          );
        }

        placesServiceRef.current.getDetails(
          {
            placeId,
            fields: ['photos'],
          },
          (place, status) => {
            if (status === 'OK' && place?.photos?.length > 0) {
              // Get the first photo with a good size
              const url = place.photos[0].getUrl({ 
                maxWidth: 800,
                maxHeight: 400
              });
              setPhotoUrl(url);
              setError(false);
            } else {
              console.log('No photos found for place:', placeId, status);
              setError(true);
            }
            setLoading(false);
          }
        );
      } catch (err) {
        console.error('Error fetching place photo:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchPhoto();
  }, [placeId]);

  // Show gradient fallback while loading or on error
  if (loading || error || !photoUrl) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #0f7b6c 0%, #10b981 50%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading ? (
          <div className="spinner" style={{ 
            width: '32px', 
            height: '32px', 
            borderWidth: '3px',
            borderColor: 'rgba(255,255,255,0.3)',
            borderTopColor: 'rgba(255,255,255,0.8)',
          }}></div>
        ) : (
          <span style={{ fontSize: 48, opacity: 0.3 }}>⛳</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={alt || courseName || 'Golf course'}
      style={{
        ...style,
        objectFit: 'cover',
      }}
      className={className}
      onError={() => {
        console.log('Image failed to load, showing fallback');
        setError(true);
      }}
    />
  );
}