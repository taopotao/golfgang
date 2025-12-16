// src/pages/event/shareViaWhatsApp.js

import { toJsDate } from "../../utils/dateUtils";

/**
 * Build Google Calendar URL for an event
 */
function buildGoogleCalendarUrl(event, eventUrl) {
  const date = event.date?.toDate ? event.date.toDate() : new Date();
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const notes = event.notes || "";

  let startDateTime = new Date(date);
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
  }

  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  const toGoogleDateTime = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
  };

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`,
    dates: `${toGoogleDateTime(startDateTime)}/${toGoogleDateTime(endDateTime)}`,
    details: notes ? `${notes}\n\nEvent: ${eventUrl}` : `Event: ${eventUrl}`,
    location: courseName,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Share an event to WhatsApp, using the poster image created by createSharePoster.
 *
 * @param {Object} event       The event document
 * @param {Object} responses   RSVP map (uid -> "available"/"unavailable"/etc.)
 * @param {string} imageDataUrl Data URL returned from createSharePoster(...)
 */
export default async function shareViaWhatsApp(event, responses, imageDataUrl) {
  try {
    const url = window.location.href;

    // ----- Date text -----
    const jsDate = toJsDate(event.date);
    const dateStr = jsDate
      ? jsDate.toLocaleDateString("en-AU", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      : "";

    // ----- Build message -----
    let msg = `⛳ *${event.title || "Golf round"}*\n`;
    if (dateStr) msg += `📅 ${dateStr}\n`;
    if (event.tee) msg += `🕒 Tee time: ${event.tee}\n`;
    if (event.courseName) msg += `📍 ${event.courseName}\n`;

    if (event.booked) {
      msg += "✅ *This round is booked*\n";
    } else {
      msg += "🟦 *RSVPs open*\n";
    }

    // Add notes if present
    if (event.notes) {
      msg += `\n📝 ${event.notes}\n`;
    }

    msg += `\n🔗 Event details:\n${url}`;

    // Add Google Calendar link for booked events
    if (event.booked) {
      const calUrl = buildGoogleCalendarUrl(event, url);
      msg += `\n\n📅 Add to Google Calendar:\n${calUrl}`;
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // ----- MOBILE: try Web Share API + image -----
    if (isMobile && navigator.share && navigator.canShare && imageDataUrl) {
      try {
        const response = await fetch(imageDataUrl);
        const blob = await response.blob();
        const file = new File([blob], "golfgang-event.png", {
          type: "image/png",
        });

        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: event.title || "Golf round",
            text: msg,
          });
          return;
        }
      } catch (err) {
        console.warn("Mobile share with image failed, falling back to text", err);
      }
    }

    // ----- Fallback: open WhatsApp with just the message -----
    const encoded = encodeURIComponent(msg);

    if (isMobile) {
      // Mobile WhatsApp
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
    } else {
      // Desktop WhatsApp Web
      window.open(`https://web.whatsapp.com/send?text=${encoded}`, "_blank");
    }
  } catch (err) {
    console.error("WhatsApp share error", err);
    alert("Could not share this event.");
  }
}