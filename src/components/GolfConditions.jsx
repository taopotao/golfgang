import { useState, useEffect, useRef } from 'react'

export default function CourseAutocomplete({ value, onSelect }) {
  const [query, setQuery] = useState(value || '')
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const wrapperRef = useRef(null)
  const debounceRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Update query when value prop changes
  useEffect(() => {
    setQuery(value || '')
  }, [value])

  // Search for golf courses using Google Places Autocomplete
  const searchCourses = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 3) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)

    try {
      // Check if Google Maps API is loaded
      if (window.google && window.google.maps && window.google.maps.places) {
        const service = new window.google.maps.places.AutocompleteService()
        
        service.getPlacePredictions(
          {
            input: searchQuery,
            types: ['establishment'],
            // Bias towards golf-related places
            componentRestrictions: { country: 'au' }, // Change to your country or remove for global
          },
          (predictions, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
              // Filter for golf-related places
              const golfPlaces = predictions.filter(p => 
                p.description.toLowerCase().includes('golf') ||
                p.types?.includes('golf_course')
              )
              
              // If no golf-specific results, show all results
              const results = golfPlaces.length > 0 ? golfPlaces : predictions.slice(0, 5)
              
              setSuggestions(results.map(p => ({
                name: p.structured_formatting?.main_text || p.description,
                address: p.structured_formatting?.secondary_text || '',
                placeId: p.place_id,
                fullDescription: p.description,
              })))
              setIsOpen(true)
            } else {
              setSuggestions([])
            }
            setIsLoading(false)
          }
        )
      } else {
        // Fallback: Just use the typed value
        console.warn('Google Maps API not loaded - using manual entry')
        setSuggestions([])
        setIsLoading(false)
      }
    } catch (err) {
      console.error('Search error:', err)
      setSuggestions([])
      setIsLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setQuery(newValue)

    // Debounce the search
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      searchCourses(newValue)
    }, 300)
  }

  const handleSelect = (suggestion) => {
    setQuery(suggestion.name)
    setIsOpen(false)
    setSuggestions([])

    // Get place details for coordinates
    if (window.google && window.google.maps && window.google.maps.places && suggestion.placeId) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      )
      
      service.getDetails(
        {
          placeId: suggestion.placeId,
          fields: ['name', 'formatted_address', 'geometry', 'place_id'],
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
            onSelect({
              name: place.name || suggestion.name,
              address: place.formatted_address || suggestion.address,
              placeId: place.place_id || suggestion.placeId,
              lat: place.geometry?.location?.lat(),
              lng: place.geometry?.location?.lng(),
            })
          } else {
            onSelect({
              name: suggestion.name,
              address: suggestion.address,
              placeId: suggestion.placeId,
            })
          }
        }
      )
    } else {
      onSelect({
        name: suggestion.name,
        address: suggestion.address,
        placeId: suggestion.placeId,
      })
    }
  }

  const handleManualEntry = () => {
    // Allow manual entry without selecting from dropdown
    onSelect({
      name: query,
      address: '',
      placeId: '',
    })
    setIsOpen(false)
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <input
        type="text"
        className="input"
        value={query}
        onChange={handleInputChange}
        onBlur={() => {
          // Delay to allow click on suggestion
          setTimeout(() => {
            if (query && !isOpen) {
              handleManualEntry()
            }
          }, 200)
        }}
        placeholder="Search for a golf course..."
      />
      
      {isLoading && (
        <div style={{ 
          position: 'absolute', 
          right: 12, 
          top: '50%', 
          transform: 'translateY(-50%)',
        }}>
          <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
        </div>
      )}
      
      {isOpen && suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          marginTop: 4,
          padding: 0,
          listStyle: 'none',
          zIndex: 100,
          maxHeight: 250,
          overflowY: 'auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.placeId || index}
              onClick={() => handleSelect(suggestion)}
              style={{
                padding: '12px 14px',
                cursor: 'pointer',
                borderBottom: index < suggestions.length - 1 ? '1px solid var(--color-border-light)' : 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                ⛳ {suggestion.name}
              </div>
              {suggestion.address && (
                <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>
                  {suggestion.address}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      
      {isOpen && suggestions.length === 0 && query.length >= 3 && !isLoading && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          marginTop: 4,
          padding: '12px 14px',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontSize: 14,
          color: 'var(--color-text-secondary)',
        }}>
          No results found. Press Enter to use "{query}"
        </div>
      )}
    </div>
  )
}