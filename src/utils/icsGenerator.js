// src/utils/icsGenerator.js

/**
 * Generate an ICS file content string for an event
 * Works with Apple Calendar, Outlook, and any other calendar that supports .ics files
 */
export function generateICS(event, eventUrl) {
  const date = event.date?.toDate ? event.date.toDate() : new Date();
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const courseAddress = event.courseAddress || "";
  const notes = event.notes || "";

  // Calculate start time
  let startDateTime = new Date(date);
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
    startDateTime.setSeconds(0);
  }

  // End time = start + 4.5 hours (typical golf round)
  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  // Format to ICS date format (YYYYMMDDTHHMMSS)
  const formatDateLocal = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  };

  // Format for DTSTAMP (needs to be UTC)
  const formatDateUTC = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
  };

  // Generate a unique ID for the event
  const uid = `${event.id || Date.now()}-${Math.random().toString(36).substr(2, 9)}@golfgang.app`;
  const now = formatDateUTC(new Date());
  
  // Build title
  const title = `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`;
  
  // Location - use address if available, otherwise course name
  const location = courseAddress || courseName || "";
  
  // Description - escape special characters for ICS format
  const descriptionParts = [];
  if (notes) descriptionParts.push(notes);
  if (eventUrl) descriptionParts.push(`Event link: ${eventUrl}`);
  const description = descriptionParts.join("\\n\\n");

  // Build the ICS content
  // Using local time with TZID for better compatibility
  const icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GolfGang//Event//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${formatDateLocal(startDateTime)}`,
    `DTEND:${formatDateLocal(endDateTime)}`,
    `SUMMARY:${escapeICSText(title)}`,
  ];

  if (location) {
    icsLines.push(`LOCATION:${escapeICSText(location)}`);
  }
  
  if (description) {
    icsLines.push(`DESCRIPTION:${escapeICSText(description)}`);
  }

  // Add URL if provided
  if (eventUrl) {
    icsLines.push(`URL:${eventUrl}`);
  }

  // Add alarm/reminder 1 hour before
  icsLines.push(
    "BEGIN:VALARM",
    "TRIGGER:-PT1H",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeICSText(title)} starts in 1 hour`,
    "END:VALARM"
  );

  icsLines.push("END:VEVENT", "END:VCALENDAR");

  return icsLines.join("\r\n");
}

/**
 * Escape special characters for ICS format
 */
function escapeICSText(text) {
  if (!text) return "";
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * Download an ICS file to the user's device
 */
export function downloadICS(event, eventUrl) {
  const icsContent = generateICS(event, eventUrl);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  // Create filename from course name or event title
  const filename = sanitizeFilename(event.courseName || event.title || "golf-event");
  
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Sanitize a string to be used as a filename
 */
function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 50) || "golf-event";
}