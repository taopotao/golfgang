/**
 * Weather and Golf Conditions Utility Functions
 * 
 * This module fetches weather data and calculates golf condition scores
 * Using Open-Meteo API (free, no API key required!)
 */

/**
 * Fetch weather data for a specific date and location
 * @param {Date} date - The date of the golf round
 * @param {string} placeId - Google Places ID (optional)
 * @param {string} courseName - Course name for fallback search
 * @returns {Promise<Object>} Weather data
 */
export async function fetchWeatherData(date, placeId = null, courseName = '') {
  try {
    // Default to Sydney coordinates if no location provided
    let lat = -33.8688;
    let lon = 151.2093;

    // If we have a place ID, fetch coordinates from Google Places
    if (placeId) {
      // Note: You'll need to enable Google Places API and add the key
      // For now, we'll use default Sydney coordinates
      console.log('Place ID provided:', placeId);
    }

    // Check if date is in the future or past
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);
    const daysFromNow = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
    
    let weatherData;
    
    if (daysFromNow >= 0 && daysFromNow <= 16) {
      // Use forecast API (up to 16 days, free!)
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
      
      // Get the hourly data for the event time (default to 10 AM if no time specified)
      const eventHour = date.getHours() || 10;
      const hourlyIndex = eventHour;
      
      if (!data.hourly || !data.daily) {
        throw new Error('Invalid weather data');
      }
      
      // Extract hourly data for the specific time
      const temp = data.hourly.temperature_2m?.[hourlyIndex];
      const feelsLike = data.hourly.apparent_temperature?.[hourlyIndex];
      const humidity = data.hourly.relative_humidity_2m?.[hourlyIndex];
      const windSpeed = data.hourly.wind_speed_10m?.[hourlyIndex];
      const windGust = data.hourly.wind_gusts_10m?.[hourlyIndex];
      const weatherCode = data.hourly.weather_code?.[hourlyIndex];
      const pop = data.hourly.precipitation_probability?.[hourlyIndex];
      
      weatherData = {
        temp: Math.round(temp || data.daily.temperature_2m_max[0]),
        feelsLike: Math.round(feelsLike || temp || data.daily.temperature_2m_max[0]),
        humidity: Math.round(humidity || 65),
        windSpeed: Math.round(windSpeed || data.daily.wind_speed_10m_max[0]),
        windGust: windGust ? Math.round(windGust) : null,
        description: getWeatherDescription(weatherCode || 0),
        main: getWeatherMain(weatherCode || 0),
        pop: Math.round(pop || data.daily.precipitation_probability_max[0] || 0),
        icon: getWeatherIcon(weatherCode || 0),
      };
    } else if (daysFromNow < 0) {
      // Past date - could use historical API but for now use seasonal average
      weatherData = getSeasonalAverageData(date);
    } else {
      // Beyond 16 days - use seasonal average
      weatherData = getSeasonalAverageData(date);
    }
    
    return weatherData;
    
  } catch (error) {
    console.error('Error fetching weather:', error);
    return getSampleWeatherData();
  }
}

/**
 * Convert WMO weather code to description
 * https://open-meteo.com/en/docs
 */
function getWeatherDescription(code) {
  const descriptions = {
    0: 'clear sky',
    1: 'mainly clear',
    2: 'partly cloudy',
    3: 'overcast',
    45: 'foggy',
    48: 'depositing rime fog',
    51: 'light drizzle',
    53: 'moderate drizzle',
    55: 'dense drizzle',
    61: 'slight rain',
    63: 'moderate rain',
    65: 'heavy rain',
    71: 'slight snow',
    73: 'moderate snow',
    75: 'heavy snow',
    77: 'snow grains',
    80: 'slight rain showers',
    81: 'moderate rain showers',
    82: 'violent rain showers',
    85: 'slight snow showers',
    86: 'heavy snow showers',
    95: 'thunderstorm',
    96: 'thunderstorm with slight hail',
    99: 'thunderstorm with heavy hail',
  };
  return descriptions[code] || 'clear';
}

/**
 * Convert WMO weather code to main category
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
 * Get weather icon emoji based on WMO code
 */
function getWeatherIcon(code) {
  if (code === 0 || code === 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌧️';
  if (code >= 85 && code <= 86) return '❄️';
  if (code >= 95 && code <= 99) return '⛈️';
  return '☀️';
}

/**
 * Calculate golf condition score (0-10) based on weather
 * 10 = Perfect conditions, 0 = Unplayable
 */
export function calculateGolfScore(weatherData) {
  let score = 10;
  
  // Temperature scoring (ideal: 18-26°C)
  const temp = weatherData.temp;
  if (temp < 10 || temp > 35) score -= 3;
  else if (temp < 15 || temp > 30) score -= 2;
  else if (temp < 18 || temp > 26) score -= 1;
  
  // Wind scoring (ideal: <15 km/h)
  const wind = weatherData.windSpeed;
  if (wind > 40) score -= 3;
  else if (wind > 30) score -= 2;
  else if (wind > 20) score -= 1;
  
  // Rain scoring
  const rain = weatherData.main.toLowerCase();
  const pop = weatherData.pop;
  
  if (rain.includes('thunderstorm')) score -= 5; // Dangerous
  else if (rain.includes('rain')) {
    if (pop > 70) score -= 3;
    else if (pop > 40) score -= 2;
    else score -= 1;
  } else if (rain.includes('drizzle')) score -= 1;
  
  // Humidity scoring (high humidity is uncomfortable)
  if (weatherData.humidity > 80) score -= 1;
  
  // Ensure score stays within 0-10
  return Math.max(0, Math.min(10, score));
}

/**
 * Get a descriptive message based on the golf score
 */
export function getConditionMessage(score) {
  if (score >= 9) return "Perfect golf weather! ⛳";
  if (score >= 7) return "Great conditions for golf";
  if (score >= 5) return "Good, playable conditions";
  if (score >= 3) return "Challenging conditions";
  if (score >= 1) return "Difficult conditions";
  return "Poor conditions - consider rescheduling";
}

/**
 * Get an emoji representing the condition score
 */
export function getConditionEmoji(score) {
  if (score >= 9) return "😎";
  if (score >= 7) return "🙂";
  if (score >= 5) return "😐";
  if (score >= 3) return "😬";
  if (score >= 1) return "😰";
  return "☔";
}

/**
 * Sample weather data for demo/fallback
 */
function getSampleWeatherData() {
  return {
    temp: 24,
    feelsLike: 23,
    humidity: 65,
    windSpeed: 15,
    windGust: null,
    description: "partly cloudy",
    main: "Clouds",
    pop: 20,
    icon: "02d",
  };
}

/**
 * Get seasonal average data for dates beyond forecast range
 */
function getSeasonalAverageData(date) {
  const month = date.getMonth();
  
  // Sydney seasonal averages (approximate)
  const seasonalData = {
    // Summer (Dec-Feb)
    11: { temp: 26, humidity: 65, windSpeed: 20 },
    0: { temp: 27, humidity: 65, windSpeed: 20 },
    1: { temp: 27, humidity: 70, windSpeed: 18 },
    // Autumn (Mar-May)
    2: { temp: 25, humidity: 70, windSpeed: 15 },
    3: { temp: 22, humidity: 70, windSpeed: 15 },
    4: { temp: 19, humidity: 65, windSpeed: 15 },
    // Winter (Jun-Aug)
    5: { temp: 17, humidity: 65, windSpeed: 18 },
    6: { temp: 16, humidity: 60, windSpeed: 20 },
    7: { temp: 18, humidity: 60, windSpeed: 20 },
    // Spring (Sep-Nov)
    8: { temp: 20, humidity: 65, windSpeed: 20 },
    9: { temp: 22, humidity: 65, windSpeed: 22 },
    10: { temp: 24, humidity: 65, windSpeed: 22 },
  };
  
  const base = seasonalData[month];
  
  return {
    temp: base.temp,
    feelsLike: base.temp,
    humidity: base.humidity,
    windSpeed: base.windSpeed,
    windGust: null,
    description: "seasonal average",
    main: "Clear",
    pop: 30,
    icon: "01d",
    isEstimate: true,
  };
}
