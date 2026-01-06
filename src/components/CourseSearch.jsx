import { useEffect, useRef, useState, useCallback } from 'react';

export default function CourseSearch({ value, onChange, placeholder = "Search golf courses..." }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || '');
  const [status, setStatus] = useState('loading');

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Stable onChange callback
  const handlePlaceSelect = useCallback((place) => {
    if (place && place.name) {
      setInputValue(place.name);
      onChange({
        name: place.name,
        address: place.formatted_address || '',
        placeId: place.place_id || '',
        location: place.geometry?.location ? {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        } : null,
      });
    }
  }, [onChange]);

  // Load Google Maps script
  useEffect(() => {
    if (!apiKey) {
      console.error('❌ No API key found. Check your .env file has VITE_GOOGLE_MAPS_API_KEY');
      setStatus('error-no-key');
      return;
    }

    console.log('🔑 API Key found:', apiKey.substring(0, 10) + '...');

    // Already loaded
    if (window.google?.maps?.places) {
      console.log('✅ Google Maps already loaded');
      setStatus('ready');
      return;
    }

    // Check if script tag exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      console.log('⏳ Script exists, waiting for load...');
      const checkInterval = setInterval(() => {
        if (window.google?.maps?.places) {
          console.log('✅ Google Maps loaded');
          setStatus('ready');
          clearInterval(checkInterval);
        }
      }, 200);
      
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!window.google?.maps?.places) {
          console.error('❌ Timeout waiting for Google Maps');
          setStatus('error-timeout');
        }
      }, 10000);
      return;
    }

    // Load script
    console.log('📦 Loading Google Maps script...');
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;

    // Global callback
    window.initGoogleMaps = () => {
      console.log('✅ Google Maps loaded via callback');
      setStatus('ready');
    };

    script.onerror = (e) => {
      console.error('❌ Failed to load Google Maps script:', e);
      setStatus('error-load');
    };

    document.head.appendChild(script);

    return () => {
      delete window.initGoogleMaps;
    };
  }, [apiKey]);

  // Initialize autocomplete
  useEffect(() => {
    if (status !== 'ready' || !inputRef.current) return;
    if (autocompleteRef.current) return; // Already initialized

    try {
      console.log('🔧 Initializing Places Autocomplete...');
      
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['establishment'],
        fields: ['name', 'formatted_address', 'place_id', 'geometry', 'types'],
        componentRestrictions: { country: 'au' }, // Restrict to Australia
      });

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        console.log('📍 Place selected:', place);
        handlePlaceSelect(place);
      });

      console.log('✅ Autocomplete initialized successfully');
    } catch (err) {
      console.error('❌ Error initializing autocomplete:', err);
      setStatus('error-init');
    }
  }, [status, handlePlaceSelect]);

  // Sync external value changes
  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    // Save manual entry if user didn't select from dropdown
    if (inputValue) {
      onChange({
        name: inputValue,
        address: '',
        placeId: '',
        location: null,
      });
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'loading':
        return 'Loading Google Maps...';
      case 'error-no-key':
        return '⚠️ API key missing - check .env file';
      case 'error-load':
        return '⚠️ Failed to load Google Maps';
      case 'error-timeout':
        return '⚠️ Google Maps load timeout';
      case 'error-init':
        return '⚠️ Failed to initialize search';
      default:
        return null;
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <div className="course-search">
      <input
        ref={inputRef}
        type="text"
        className="input"
        placeholder={status === 'ready' ? placeholder : 'Loading...'}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {statusMessage && (
        <span className="input-hint" style={{ color: status.includes('error') ? 'var(--color-danger)' : 'var(--color-text-secondary)' }}>
          {statusMessage}
        </span>
      )}
    </div>
  );
}
