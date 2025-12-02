// src/pages/event/shareViaWhatsApp.js

import { toJsDate } from "../../utils/dateUtils";

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

    msg += `\n🔗 Event details:\n${url}`;

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
