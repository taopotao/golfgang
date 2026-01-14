/**
 * Shared Weather Utility
 * 
 * This uses the EXACT same calculation as GolfConditions.jsx
 * to ensure consistent scores between Home page and Event page.
 */

// Default coordinates (Sydney) - used when course has no coordinates
const DEFAULT_LAT = -33.87;
const DEFAULT_LNG = 151.21;

/**
 * Fetch weather data for a specific date and location
 * Uses the SAME API parameters and calculation as GolfConditions.jsx
 * 
 * @param {Date|string} date - The date to fetch weather for
 * @param {number|null} lat - Latitude (uses default if not provided)
 * @param {number|null} lng - Longitude (uses default if not provided)
 * @returns {Promise<Object|null>} Weather data or null on error
 */
export async function fetchWeatherForDate(date, lat = null, lng = null) {
  try {
    // Use provided coordinates or fall back to default
    const latitude = lat || DEFAULT_LAT;
    const longitude = lng || DEFAULT_LNG;

    // Parse date
    const targetDate = new Date(date);
    const dateStr = targetDate.toISOString().split('T')[0];

    // Check if date is within forecast range (16 days)
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const daysFromNow = Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));
    
    if (daysFromNow < 0 || daysFromNow > 16) {
      return null; // Date out of forecast range
    }

    // SAME API call as GolfConditions.jsx
    const url = `https://api.open-meteo.com/v1/forecast?` +
      `latitude=${latitude}&` +
      `longitude=${longitude}&` +
      `daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max&` +
      `timezone=auto&` +
      `start_date=${dateStr}&` +
      `end_date=${dateStr}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Weather API error');
    }

    const data = await response.json();

    if (!data.daily) {
      throw new Error('Invalid weather data');
    }

    // SAME data extraction as GolfConditions.jsx
    const weatherCode = data.daily.weathercode?.[0] || 0;
    const tempMax = data.daily.temperature_2m_max?.[0] || 0;
    const tempMin = data.daily.temperature_2m_min?.[0] || 0;
    const precipitation = data.daily.precipitation_sum?.[0] || 0;
    const windSpeed = data.daily.windspeed_10m_max?.[0] || 0;

    // SAME temperature calculation as GolfConditions.jsx
    const tempAvg = Math.round((tempMax + tempMin) / 2);

    // EXACT SAME score calculation as GolfConditions.jsx
    let score = 10;

    // Temperature penalties (SAME as GolfConditions.jsx)
    if (tempMax > 35) score -= 2;
    else if (tempMax > 30) score -= 1;
    if (tempMax < 5) score -= 2;
    else if (tempMax < 10) score -= 1;

    // Precipitation penalties (SAME as GolfConditions.jsx - uses mm, not probability!)
    if (precipitation > 10) score -= 3;
    else if (precipitation > 5) score -= 2;
    else if (precipitation > 1) score -= 1;

    // Wind penalties (SAME as GolfConditions.jsx)
    if (windSpeed > 40) score -= 2;
    else if (windSpeed > 25) score -= 1;

    score = Math.max(0, Math.min(10, score));

    return {
      // Temperature data (SAME as GolfConditions.jsx)
      temp: tempAvg,                    // Average temperature
      tempMax: Math.round(tempMax),
      tempMin: Math.round(tempMin),
      
      // Conditions
      code: weatherCode,
      conditions: getWeatherDescription(weatherCode),
      
      // Precipitation (SAME as GolfConditions.jsx - actual mm, not probability)
      precipitation: precipitation,
      rain: precipitation,  // Alias for compatibility
      
      // Wind
      windSpeed: Math.round(windSpeed),
      
      // Playability (SAME as GolfConditions.jsx)
      score: score,
      scoreLabel: getPlayabilityLabel(score),
      scoreColor: getPlayabilityColor(score),
    };

  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

/**
 * Fetch weather for multiple events efficiently
 * Groups events by date to minimize API calls
 * 
 * @param {Array} events - Array of event objects with date, courseLat, courseLng
 * @returns {Promise<Object>} Map of date strings to weather data
 */
export async function fetchWeatherForEvents(events) {
  const weatherCache = {};
  
  // Get unique dates with their coordinates
  const dateMap = new Map();
  
  events.forEach(event => {
    const d = event.date?.toDate ? event.date.toDate() : new Date(event.date);
    const dateStr = d.toISOString().split('T')[0];
    
    // Only process future dates
    if (d >= new Date()) {
      // Use event's course coordinates if available
      if (!dateMap.has(dateStr)) {
        dateMap.set(dateStr, {
          lat: event.courseLat || null,
          lng: event.courseLng || null,
        });
      }
    }
  });

  // Fetch weather for each unique date (limit to 7 for performance)
  const dates = Array.from(dateMap.entries()).slice(0, 7);
  
  await Promise.all(
    dates.map(async ([dateStr, coords]) => {
      const weather = await fetchWeatherForDate(dateStr, coords.lat, coords.lng);
      if (weather) {
        weatherCache[dateStr] = weather;
      }
    })
  );

  return weatherCache;
}

/**
 * Get weather description from WMO weather code
 * SAME as GolfConditions.jsx
 */
export function getWeatherDescription(code) {
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

/**
 * Get weather emoji from WMO weather code
 * SAME as GolfConditions.jsx
 */
export function getWeatherIcon(code) {
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

/**
 * Get playability label from score
 * SAME as GolfConditions.jsx
 */
export function getPlayabilityLabel(score) {
  if (score >= 8) return 'Excellent';
  if (score >= 6) return 'Good';
  if (score >= 4) return 'Fair';
  return 'Poor';
}

/**
 * Get playability color from score
 * SAME as GolfConditions.jsx
 */
export function getPlayabilityColor(score) {
  if (score >= 8) return '#10b981'; // green
  if (score >= 6) return '#f59e0b'; // orange
  return '#ef4444'; // red
}