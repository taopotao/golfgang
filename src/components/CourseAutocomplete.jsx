import { useState, useRef, useEffect } from 'react'

export default function CourseAutocomplete({ value, onChange, placeholder = "Search for a golf course..." }) {
  const [query, setQuery] = useState(value || '')
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const wrapperRef = useRef(null)

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

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setQuery(newValue)
    onChange(newValue)
    
    // For now, just use the typed value (no API autocomplete)
    // You can add Google Places API integration later
    if (newValue.length > 0) {
      setIsOpen(false)
    }
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <input
        type="text"
        className="input"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={() => suggestions.length > 0 && setIsOpen(true)}
      />
      
      {isLoading && (
        <div style={{ 
          position: 'absolute', 
          right: '12px', 
          top: '50%', 
          transform: 'translateY(-50%)' 
        }}>
          <div className="spinner" style={{ width: '16px', height: '16px' }}></div>
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
          marginTop: '4px',
          padding: '4px 0',
          listStyle: 'none',
          zIndex: 100,
          maxHeight: '200px',
          overflowY: 'auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(suggestion)
                onChange(suggestion)
                setIsOpen(false)
              }}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: 'var(--text-md)'
              }}
              onMouseEnter={(e) => e.target.style.background = 'var(--color-bg)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
