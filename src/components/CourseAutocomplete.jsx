import { useState, useEffect, useRef } from 'react';

/**
 * CourseAutocomplete - Google Places Autocomplete for golf courses
 * 
 * Uses Google Places API to search for golf courses and returns:
 * - name: Just the course name (not full address)
 * - address: Full formatted address
 * - placeId: Google Place ID (for photos)
 * - lat/lng: Coordinates (for weather)
 */
export default function CourseAutocomplete({ value, onSelect, initialValue }) {
  const [searchValue, setSearchValue] = useState(value || initialValue || '');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);
  
  const wrapperRef = useRef(null);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const sessionTokenRef = useRef(null);

  // Update search value when prop changes
  useEffect(() => {
    setSearchValue(value || initialValue || '');
  }, [value, initialValue]);

  // Initialize Google Places services
  useEffect(() => {
    function initGooglePlaces() {
      if (window.google?.maps?.places) {
        autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
        placesServiceRef.current = new window.google.maps.places.PlacesService(
          document.createElement('div')
        );
        sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
        setIsGoogleReady(true);
      }
    }

    // Check if Google is already loaded
    if (window.google?.maps?.places) {
      initGooglePlaces();
    } else {
      // Wait for Google Maps to load
      const checkGoogle = setInterval(() => {
        if (window.google?.maps?.places) {
          initGooglePlaces();
          clearInterval(checkGoogle);
        }
      }, 100);

      // Clear interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogle), 10000);
    }
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search for golf courses using Google Places
  async function searchCourses(query) {
    if (!query || query.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    if (!isGoogleReady || !autocompleteServiceRef.current) {
      console.warn('Google Places not ready yet');
      return;
    }

    setIsSearching(true);

    try {
      const request = {
        input: query,
        types: ['establishment'],
        // Bias towards golf-related places
        // You can add location bias here if needed:
        // locationBias: { center: { lat: -33.8688, lng: 151.2093 }, radius: 50000 }
      };

      autocompleteServiceRef.current.getPlacePredictions(
        {
          ...request,
          sessionToken: sessionTokenRef.current,
        },
        (predictions, status) => {
          if (status === 'OK' && predictions) {
            // Filter for golf-related places
            const golfPredictions = predictions.filter(p => 
              p.description.toLowerCase().includes('golf') ||
              p.types?.includes('golf_course') ||
              p.types?.includes('establishment')
            );

            const courses = golfPredictions.map(prediction => ({
              name: prediction.structured_formatting?.main_text || prediction.description.split(',')[0],
              address: prediction.description,
              placeId: prediction.place_id,
              // We'll get lat/lng when selected
              lat: null,
              lng: null,
            }));

            setResults(courses);
            setShowResults(courses.length > 0);
          } else {
            setResults([]);
            setShowResults(false);
          }
          setIsSearching(false);
        }
      );
    } catch (error) {
      console.error('Error searching courses:', error);
      setResults([]);
      setIsSearching(false);
    }
  }

  // Get place details (for lat/lng) when a course is selected
  function getPlaceDetails(placeId, callback) {
    if (!placesServiceRef.current) {
      callback(null);
      return;
    }

    placesServiceRef.current.getDetails(
      {
        placeId,
        fields: ['geometry', 'formatted_address', 'name', 'photos'],
        sessionToken: sessionTokenRef.current,
      },
      (place, status) => {
        // Create new session token after a place is selected
        sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
        
        if (status === 'OK' && place) {
          callback({
            lat: place.geometry?.location?.lat(),
            lng: place.geometry?.location?.lng(),
            formattedAddress: place.formatted_address,
            name: place.name,
          });
        } else {
          callback(null);
        }
      }
    );
  }

  // Handle input change with debounce
  const debounceRef = useRef(null);
  function handleInputChange(e) {
    const newValue = e.target.value;
    setSearchValue(newValue);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchCourses(newValue);
    }, 300);
  }

  // Handle course selection
  function handleSelect(course) {
    setSearchValue(course.name);
    setShowResults(false);
    setResults([]);

    // Get full place details including lat/lng
    if (course.placeId) {
      getPlaceDetails(course.placeId, (details) => {
        onSelect({
          name: course.name,
          address: details?.formattedAddress || course.address,
          placeId: course.placeId,
          lat: details?.lat || null,
          lng: details?.lng || null,
        });
      });
    } else {
      onSelect(course);
    }
  }

  // Handle blur - allow manual entry
  function handleBlur() {
    // Small delay to allow click events on results
    setTimeout(() => {
      if (searchValue && searchValue !== (value || initialValue)) {
        // Manual entry without selecting from dropdown
        onSelect({
          name: searchValue,
          address: '',
          placeId: '',
          lat: null,
          lng: null,
        });
      }
    }, 200);
  }

  // Handle clear
  function handleClear() {
    setSearchValue('');
    setResults([]);
    setShowResults(false);
    onSelect({
      name: '',
      address: '',
      placeId: '',
      lat: null,
      lng: null,
    });
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        className="input"
        value={searchValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => {
          if (results.length > 0) {
            setShowResults(true);
          }
        }}
        placeholder="Search for golf course..."
        autoComplete="off"
        style={{ paddingRight: searchValue ? 36 : undefined }}
      />

      {/* Clear button */}
      {searchValue && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
            color: 'var(--color-text-tertiary)',
            padding: 4,
            lineHeight: 1,
            zIndex: 1,
          }}
          aria-label="Clear"
        >
          ✕
        </button>
      )}

      {/* Loading spinner */}
      {isSearching && (
        <div style={{
          position: 'absolute',
          right: searchValue ? '36px' : '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}>
          <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div>
        </div>
      )}

      {/* Results dropdown */}
      {showResults && results.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          border: '2px solid var(--color-primary)',
          borderRadius: 'var(--radius-md)',
          marginTop: 'var(--space-1)',
          maxHeight: '280px',
          overflowY: 'auto',
          zIndex: 1000,
          boxShadow: '0 8px 24px rgba(15, 123, 108, 0.15)'
        }}>
          {results.map((course, idx) => (
            <div
              key={course.placeId || idx}
              onClick={() => handleSelect(course)}
              onMouseDown={(e) => e.preventDefault()}
              style={{
                padding: 'var(--space-3)',
                cursor: 'pointer',
                borderBottom: idx < results.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                transition: 'background-color var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{
                fontWeight: 500,
                marginBottom: '2px',
                color: 'var(--color-text)'
              }}>
                {course.name}
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                📍 {course.address}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {showResults && results.length === 0 && !isSearching && searchValue.length >= 2 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          marginTop: 'var(--space-1)',
          padding: 'var(--space-4)',
          zIndex: 1000,
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--text-sm)',
        }}>
          No golf courses found. Try a different search or enter manually.
        </div>
      )}

      {/* Google not ready message */}
      {!isGoogleReady && searchValue.length >= 2 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          marginTop: 'var(--space-1)',
          padding: 'var(--space-4)',
          zIndex: 1000,
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--text-sm)',
        }}>
          Loading search... You can also type the course name manually.
        </div>
      )}
    </div>
  );
}