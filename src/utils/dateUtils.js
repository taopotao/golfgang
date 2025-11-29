// utils/dateUtils.js

/**
 * Ensures we always get a real JS Date object,
 * even if Firestore gave us a Timestamp.
 */
export function toJsDate(value) {
  if (!value) return null;

  // Firestore Timestamp
  if (value.toDate) {
    return value.toDate();
  }

  // Already a JS Date
  if (value instanceof Date) {
    return value;
  }

  // ISO string or number
  return new Date(value);
}

/**
 * Format a date like:
 * "Saturday, Feb 3 • 7:20 AM"
 */
export function formatEventDate(rawDate) {
  const date = toJsDate(rawDate);
  if (!date) return "Unknown date";

  return date.toLocaleString("en-AU", {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Format only the date part:
 * "Sat, Feb 3"
 */
export function formatShortDate(rawDate) {
  const date = toJsDate(rawDate);
  if (!date) return "";

  return date.toLocaleDateString("en-AU", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

/**
 * Format only time:
 * "7:20 AM"
 */
export function formatTime(rawDate) {
  const date = toJsDate(rawDate);
  if (!date) return "";

  return date.toLocaleTimeString("en-AU", {
    hour: "numeric",
    minute: "2-digit",
  });
}

