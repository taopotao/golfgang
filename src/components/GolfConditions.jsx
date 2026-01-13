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
      <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
        <div className="spinner"></div>
        <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
          Loading weather...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-3)',
        padding: 'var(--space-3)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'var(--text-2xl)' }}>
            {getWeatherEmoji(weather.weatherCode)}
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            {weather.conditions}
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>
            {weather.temperature}°C
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            Temperature
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 600,
            color: getPlayabilityColor(weather.playabilityScore)
          }}>
            {weather.playabilityScore}/10
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            {getPlayabilityLabel(weather.playabilityScore)}
          </div>
        </div>
      </div>
    );
  }

  // Full expanded view
  return (
    <div style={{ padding: 'var(--space-4)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-4)',
      }}>
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-4)',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
        }}>
          <div style={{ fontSize: '48px', marginBottom: 'var(--space-2)' }}>
            {getWeatherEmoji(weather.weatherCode)}
          </div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>
            {weather.conditions}
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          padding: 'var(--space-4)',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
        }}>
          <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700 }}>
            {weather.temperature}°C
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            {weather.tempMin}° - {weather.tempMax}°
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-3)',
      }}>
        <div style={{
          padding: 'var(--space-3)',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            Wind
          </div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginTop: 'var(--space-1)' }}>
            {weather.windSpeed} km/h
          </div>
        </div>

        <div style={{
          padding: 'var(--space-3)',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            Rain
          </div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginTop: 'var(--space-1)' }}>
            {weather.precipitation} mm
          </div>
        </div>

        <div style={{
          padding: 'var(--space-3)',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            Playability
          </div>
          <div style={{ 
            fontSize: 'var(--text-lg)', 
            fontWeight: 700, 
            marginTop: 'var(--space-1)',
            color: getPlayabilityColor(weather.playabilityScore)
          }}>
            {weather.playabilityScore}/10
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
            {getPlayabilityLabel(weather.playabilityScore)}
          </div>
        </div>
      </div>
    </div>
  );
}