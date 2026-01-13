/**
 * Weather and Golf Conditions Utility Functions
 * Using Open-Meteo API (free, no API key required!)
 */

/**
 * Get weather description from WMO code
 */
function getWeatherDescription(code) {
  if (code === 0) return 'Clear sky';
  if (code === 1) return 'Mainly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if (code >= 45 && code <= 48) return 'Foggy';
  if (code >= 51 && code <= 55) return 'Drizzle';
  if (code >= 56 && code <= 57) return 'Freezing drizzle';
  if (code >= 61 && code <= 65) return 'Rain';
  if (code >= 66 && code <= 67) return 'Freezing rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain showers';
  if (code >= 85 && code <= 86) return 'Snow showers';
  if (code >= 95 && code <= 99) return 'Thunderstorm';
  return 'Clear';
}

/**
 * Get main weather category from WMO code
 */
function getWeatherMain(code) {
  if (code === 0 || code === 1) return 'Clear';
  if (code === 2 || code === 3) return 'Clouds';
  if (code >= 45 && code <= 48) return 'Fog';
  if (code >= 51 && code <= 57) return 'Drizzle';
  if (code >= 61 && code <= 67) return 'Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain';
  if (code >= 85 && code <= 86) return 'Snow';
  if (code >= 95 && code <= 99) return 'Thunderstorm';
  return 'Clear';
}

/**
 * Fetch weather data for a specific date and location
 */
export async function fetchWeatherData(date, placeId = null, courseName = '') {
  try {
    // Default to Melbourne coordinates
    let lat = -37.8136;
    let lon = 144.9631;

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);
    const daysFromNow = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
    
    // Only fetch forecast for dates within 16 days
    if (daysFromNow < 0 || daysFromNow > 16) {
      return null;
    }

    const dateStr = eventDate.toISOString().split('T')[0];
    
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?` +
      `latitude=${lat}&longitude=${lon}` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max` +
      `&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,wind_gusts_10m` +
      `&timezone=auto` +
      `&start_date=${dateStr}&end_date=${dateStr}`
    );
    
    if (!response.ok) throw new Error('Weather API error');
    
    const data = await response.json();
    
    // Get the hourly data for morning golf time (10 AM)
    const eventHour = date.getHours() || 10;
    const hourlyIndex = Math.min(eventHour, (data.hourly?.temperature_2m?.length || 24) - 1);
    
    if (!data.hourly || !data.daily) {
      throw new Error('Invalid weather data');
    }
    
    const temp = data.hourly.temperature_2m?.[hourlyIndex];
    const feelsLike = data.hourly.apparent_temperature?.[hourlyIndex];
    const humidity = data.hourly.relative_humidity_2m?.[hourlyIndex];
    const windSpeed = data.hourly.wind_speed_10m?.[hourlyIndex];
    const windGust = data.hourly.wind_gusts_10m?.[hourlyIndex];
    const weatherCode = data.hourly.weather_code?.[hourlyIndex];
    const pop = data.hourly.precipitation_probability?.[hourlyIndex] || 
                data.daily.precipitation_probability_max?.[0] || 0;
    
    return {
      temp: Math.round(temp),
      feelsLike: Math.round(feelsLike),
      humidity: Math.round(humidity),
      windSpeed: Math.round(windSpeed),
      windGust: windGust ? Math.round(windGust) : null,
      description: getWeatherDescription(weatherCode),
      main: getWeatherMain(weatherCode),
      pop: Math.round(pop),
      weatherCode,
    };
    
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

/**
 * Calculate golf playability score (0-10)
 */
export function calculateGolfScore(weatherData) {
  if (!weatherData) return 5;
  
  let score = 10;
  const { temp, windSpeed, pop, humidity, main } = weatherData;
  
  // Temperature scoring
  if (temp < 5 || temp > 38) score -= 3;
  else if (temp < 10 || temp > 35) score -= 2;
  else if (temp < 15 || temp > 30) score -= 1;
  
  // Wind scoring
  if (windSpeed > 40) score -= 3;
  else if (windSpeed > 30) score -= 2;
  else if (windSpeed > 20) score -= 1;
  
  // Rain scoring
  if (main === 'Thunderstorm') score -= 5;
  else if (main === 'Rain' || pop > 70) score -= 3;
  else if (main === 'Drizzle' || pop > 40) score -= 2;
  else if (pop > 20) score -= 1;
  
  // Humidity scoring
  if (humidity > 85) score -= 1;
  
  return Math.max(0, Math.min(10, score));
}

/**
 * Get condition message based on score
 */
export function getConditionMessage(score) {
  if (score >= 9) return "Perfect golf weather!";
  if (score >= 7) return "Great conditions";
  if (score >= 5) return "Good conditions";
  if (score >= 3) return "Challenging conditions";
  if (score >= 1) return "Difficult conditions";
  return "Consider rescheduling";
}

/**
 * Get emoji based on score
 */
export function getConditionEmoji(score) {
  if (score >= 9) return "😎";
  if (score >= 7) return "🙂";
  if (score >= 5) return "😐";
  if (score >= 3) return "😬";
  if (score >= 1) return "😰";
  return "☔";
}