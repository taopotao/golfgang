import { useState, useEffect } from 'react';

export default function GolfConditions({ lat, lng, date, coursePlaceId, compact = false }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      // Validate inputs
      if (!lat || !lng || !date) {
        setLoading(false);
        setError('Missing location or date information');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Format date for API (YYYY-MM-DD)
        const targetDate = new Date(date);
        const dateStr = targetDate.toISOString().split('T')[0];

        // Open-Meteo API - Free weather API, no key required
        const url = `https://api.open-meteo.com/v1/forecast?` +
          `latitude=${lat}&` +
          `longitude=${lng}&` +
          `daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max&` +
          `timezone=auto&` +
          `start_date=${dateStr}&` +
          `end_date=${dateStr}`;

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        
        if (data.daily) {
          const weatherCode = data.daily.weathercode?.[0] || 0;
          const conditions = getWeatherDescription(weatherCode);
          const tempMax = data.daily.temperature_2m_max?.[0] || 0;
          const tempMin = data.daily.temperature_2m_min?.[0] || 0;
          const precipitation = data.daily.precipitation_sum?.[0] || 0;
          const windSpeed = data.daily.windspeed_10m_max?.[0] || 0;
          
          // Calculate playability score (0-10)
          let score = 10;
          
          // Temperature penalties
          if (tempMax > 35) score -= 2;
          else if (tempMax > 30) score -= 1;
          if (tempMax < 5) score -= 2;
          else if (tempMax < 10) score -= 1;
          
          // Precipitation penalties
          if (precipitation > 10) score -= 3;
          else if (precipitation > 5) score -= 2;
          else if (precipitation > 1) score -= 1;
          
          // Wind penalties
          if (windSpeed > 40) score -= 2;
          else if (windSpeed > 25) score -= 1;
          
          score = Math.max(0, Math.min(10, score));

          setWeather({
            temperature: Math.round((tempMax + tempMin) / 2),
            tempMax: Math.round(tempMax),
            tempMin: Math.round(tempMin),
            conditions,
            precipitation,
            windSpeed: Math.round(windSpeed),
            playabilityScore: score,
            weatherCode,
          });
        } else {
          throw new Error('Invalid weather data received');
        }
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Unable to load weather data');
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lng, date]);

  // Convert weather code to description
  function getWeatherDescription(code) {
    if (code === 0) return 'Clear';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Foggy';
    if (code <= 67) return 'Rainy';
    if (code <= 77) return 'Snow';
    if (code <= 82) return 'Rain Showers';
    if (code <= 86) return 'Snow Showers';
    if (code <= 99) return 'Thunderstorm';
    return 'Unknown';
  }

  // Get weather emoji
  function getWeatherEmoji(code) {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code <= 48) return '🌫️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '🌨️';
    if (code <= 82) return '🌦️';
    if (code <= 86) return '🌨️';
    if (code <= 99) return '⛈️';
    return '🌤️';
  }

  // Get playability color
  function getPlayabilityColor(score) {
    if (score >= 8) return '#10b981'; // green
    if (score >= 6) return '#f59e0b'; // orange
    return '#ef4444'; // red
  }

  // Get playability label
  function getPlayabilityLabel(score) {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Poor';
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div className="spinner"></div>
        <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Loading weather...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--color-text-secondary)' }}>
        <p>{error}</p>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  // Compact view for collapsed state
  if (compact) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>{getWeatherEmoji(weather.weatherCode)}</span>
          <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            {weather.conditions}
          </span>
        </div>
        
        <div style={{ fontSize: '16px', fontWeight: 600 }}>
          {weather.tempMin}° - {weather.tempMax}°
        </div>
        
        <div style={{ 
          fontSize: '14px', 
          fontWeight: 600,
          color: getPlayabilityColor(weather.playabilityScore)
        }}>
          {weather.playabilityScore}/10
        </div>
      </div>
    );
  }

  // Full expanded view - COMPACT LAYOUT
  return (
    <div style={{ padding: '12px 16px' }}>
      {/* Main weather display - horizontal layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        background: 'var(--color-bg)',
        borderRadius: '10px',
        marginBottom: '8px',
      }}>
        {/* Weather icon and condition */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '32px' }}>{getWeatherEmoji(weather.weatherCode)}</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)' }}>
              {weather.conditions}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
              {weather.tempMin}° - {weather.tempMax}°
            </div>
          </div>
        </div>
        
        {/* Temperature */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }}>
            {weather.temperature}°C
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6px',
      }}>
        {/* Wind */}
        <div style={{
          padding: '8px',
          background: 'var(--color-bg)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>
            Wind
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>
            {weather.windSpeed} km/h
          </div>
        </div>

        {/* Rain */}
        <div style={{
          padding: '8px',
          background: 'var(--color-bg)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>
            Rain
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>
            {weather.precipitation} mm
          </div>
        </div>

        {/* Score */}
        <div style={{
          padding: '8px',
          background: 'var(--color-bg)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>
            Score
          </div>
          <div style={{ 
            fontSize: '13px', 
            fontWeight: 700, 
            color: getPlayabilityColor(weather.playabilityScore)
          }}>
            {weather.playabilityScore}/10
          </div>
        </div>
      </div>
    </div>
  );
}