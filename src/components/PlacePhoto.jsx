import { useState } from 'react';

/**
 * PlacePhoto - Displays a course photo or fallback
 * 
 * If you have Google Places API integration, this can be enhanced
 * to fetch actual photos. For now, it shows a nice gradient fallback.
 */
export default function PlacePhoto({ placeId, alt, style, className }) {
  const [error, setError] = useState(false);
  
  // If you have a Google Places photo URL generator, uncomment and use this:
  // const photoUrl = placeId 
  //   ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${API_KEY}`
  //   : null;

  // For now, always show the fallback gradient
  const showFallback = true || error || !placeId;

  if (showFallback) {
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
        <span style={{ fontSize: 48, opacity: 0.3 }}>⛳</span>
      </div>
    );
  }

  // If you have actual photo URLs, use this:
  // return (
  //   <img 
  //     src={photoUrl}
  //     alt={alt}
  //     style={style}
  //     className={className}
  //     onError={() => setError(true)}
  //   />
  // );
}