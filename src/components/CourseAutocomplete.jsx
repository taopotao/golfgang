import { useState, useEffect, useRef } from 'react';

export default function CourseAutocomplete({ value, onSelect }) {
  const [searchValue, setSearchValue] = useState(value || '');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const timeoutRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setSearchValue(value || '');
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search using Nominatim (OpenStreetMap) - Free, no API key needed
  async function searchCourses(query) {
    if (!query || query.length < 3) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?` +
        `q=${encodeURIComponent(query + ' golf course')}&` +
        `format=json&` +
        `limit=5&` +
        `addressdetails=1`,
        {
          headers: {
            'User-Agent': 'GolfGang App'
          }
        }
      );
      
      const data = await response.json();
      
      const courses = data.map(place => ({
        name: place.display_name.split(',')[0], // First part is usually the name
        address: place.display_name,
        placeId: place.place_id.toString(),
        lat: parseFloat(place.lat),
        lng: parseFloat(place.lon),
      }));
      
      setResults(courses);
      setShowResults(courses.length > 0);
    } catch (error) {
      console.error('Error searching courses:', error);
      setResults([]);
    }
    
    setIsSearching(false);
  }

  function handleInputChange(e) {
    const newValue = e.target.value;
    setSearchValue(newValue);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      searchCourses(newValue);
    }, 400);
  }

  function handleSelect(course) {
    setSearchValue(course.name);
    setShowResults(false);
    setResults([]);
    onSelect(course);
  }

  function handleBlur() {
    if (searchValue && searchValue !== value) {
      onSelect({
        name: searchValue,
        address: '',
        placeId: '',
        lat: null,
        lng: null,
      });
    }
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
      />
      
      {isSearching && (
        <div style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}>
          <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div>
        </div>
      )}
      
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
          maxHeight: '240px',
          overflowY: 'auto',
          zIndex: 1000,
          boxShadow: '0 8px 24px rgba(15, 123, 108, 0.15)'
        }}>
          {results.map((course, idx) => (
            <div
              key={idx}
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
      
      {showResults && results.length === 0 && !isSearching && searchValue.length >= 3 && (
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
          No golf courses found. Try a different search.
        </div>
      )}
    </div>
  );
}