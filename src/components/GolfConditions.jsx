import { useState, useEffect } from 'react';
import { 
  fetchWeatherData, 
  calculateGolfScore, 
  getConditionMessage, 
  getConditionEmoji 
} from '../utils/weatherUtils';
import './GolfConditions.css';

/**
 * Golf Conditions Component
 * Displays weather information and golf condition score for an event
 */
export default function GolfConditions({ event }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      if (!event?.date) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const eventDate = event.date.toDate ? event.date.toDate() : event.date;
        const weatherData = await fetchWeatherData(
          eventDate, 
          event.coursePlaceId, 
          event.courseName
        );
        
        setWeather(weatherData);
      } catch (err) {
        console.error('Error loading weather:', err);
        setError('Unable to load weather');
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [event?.date, event?.coursePlaceId, event?.courseName]);

  if (loading) {
    return (
      <div className="card golf-conditions-loading">
        <div className="loading-spinner"></div>
        <span>Loading conditions...</span>
      </div>
    );
  }

  if (error || !weather) {
    return null; // Silently fail - weather is optional
  }

  const score = calculateGolfScore(weather);
  const message = getConditionMessage(score);
  const emoji = getConditionEmoji(score);

  return (
    <div className="card golf-conditions">
      <h3 className="card-title">⛳ Golf Conditions</h3>
      
      {/* Main Score Display */}
      <div className="conditions-score">
        <div className="score-emoji">{emoji}</div>
        <div className="score-details">
          <div className="score-number">{score}/10</div>
          <div className="score-message">{message}</div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="weather-details">
        <div className="weather-item">
          <span className="weather-icon">🌡️</span>
          <div className="weather-info">
            <span className="weather-label">Temperature</span>
            <span className="weather-value">{weather.temp}°C</span>
            {weather.feelsLike !== weather.temp && (
              <span className="weather-subvalue">Feels like {weather.feelsLike}°C</span>
            )}
          </div>
        </div>

        <div className="weather-item">
          <span className="weather-icon">💨</span>
          <div className="weather-info">
            <span className="weather-label">Wind</span>
            <span className="weather-value">{weather.windSpeed} km/h</span>
            {weather.windGust && (
              <span className="weather-subvalue">Gusts to {weather.windGust} km/h</span>
            )}
          </div>
        </div>

        <div className="weather-item">
          <span className="weather-icon">☔</span>
          <div className="weather-info">
            <span className="weather-label">Rain Chance</span>
            <span className="weather-value">{weather.pop}%</span>
          </div>
        </div>

        <div className="weather-item">
          <span className="weather-icon">💧</span>
          <div className="weather-info">
            <span className="weather-label">Humidity</span>
            <span className="weather-value">{weather.humidity}%</span>
          </div>
        </div>
      </div>

      {/* Weather Description */}
      <div className="weather-description">
        <span className="weather-summary">{weather.description}</span>
        {weather.isEstimate && (
          <span className="weather-estimate">
            (Seasonal average - beyond 5-day forecast)
          </span>
        )}
      </div>

      {/* Condition Breakdown */}
      <details className="conditions-breakdown">
        <summary>Score Breakdown</summary>
        <div className="breakdown-content">
          <p><strong>How the score is calculated:</strong></p>
          <ul>
            <li>🌡️ Ideal temperature: 18-26°C</li>
            <li>💨 Ideal wind: &lt;15 km/h</li>
            <li>☔ Rain reduces score significantly</li>
            <li>💧 High humidity (80%+) reduces comfort</li>
          </ul>
        </div>
      </details>
    </div>
  );
}
