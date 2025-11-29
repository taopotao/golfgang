// ----------------------------------------------
// Google Places (Browser JS API version)
// Safe, no CORS issues
// ----------------------------------------------
export function getLatLngWithJS(placeId) {
  return new Promise((resolve, reject) => {
    if (!window.google || !window.google.maps) {
      reject("Google Maps JS not loaded");
      return;
    }

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.getDetails(
      { placeId, fields: ["geometry"] },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place.geometry.location.toJSON()); 
        } else {
          reject(status);
        }
      }
    );
  });
}

// ----------------------------------------------
// Open-Meteo forecast data
// ----------------------------------------------
export async function getWeather(lat, lng) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
    `&hourly=temperature_2m,precipitation_probability,windspeed_10m,cloudcover` +
    `&daily=temperature_2m_max,precipitation_probability_max,weathercode` +
    `&timezone=auto`;

  const res = await fetch(url);
  return await res.json();
}

// ----------------------------------------------
// Weather code → icon
// ----------------------------------------------
export function iconForWeather(code) {
  if (code === 0) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if (code === 3) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55].includes(code)) return "🌦️";
  if ([61, 63, 65].includes(code)) return "🌧️";
  if ([71, 73, 75].includes(code)) return "❄️";
  return "🌥️";
}
