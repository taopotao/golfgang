import { getRandomBackground, SHARE_BACKGROUNDS } from "../../utils/shareBackgrounds";

export async function createSharePoster(event, responses) {
  if (!event) return;

  const wrapper = document.getElementById("share-card-wrapper");
  if (wrapper) wrapper.innerHTML = "";

  return new Promise(async (resolve, reject) => {
    try {
      const bgUrl = getRandomBackground() || SHARE_BACKGROUNDS[0];

      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d");

      const bgImg = new Image();
      bgImg.crossOrigin = "anonymous";
      bgImg.src = bgUrl;

      await new Promise((ok, err) => {
        bgImg.onload = ok;
        bgImg.onerror = err;
      });

      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(60, 120, canvas.width - 120, 520);

      ctx.fillStyle = "#fff";
      ctx.font = "bold 48px system-ui";
      ctx.fillText("GolfGang Round", 90, 180);

      const date = event.date?.toDate ? event.date.toDate() : null;
      const dateStr = date
        ? date.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
        : "";

      ctx.font = "36px system-ui";
      ctx.fillText(dateStr, 90, 240);

      if (event.tee) ctx.fillText(`Tee time: ${event.tee}`, 90, 300);
      if (event.courseName) ctx.fillText(event.courseName, 90, 360);

      const attendingIds = Object.entries(responses)
        .filter(([_, st]) => st === "available")
        .map(([id]) => id);

      ctx.font = "32px system-ui";
      ctx.fillText(`${attendingIds.length} going so far`, 90, 420);

      const url = window.location.href;
      ctx.font = "24px system-ui";
      ctx.fillText("Open in GolfGang", 90, 480);
      ctx.fillText(url, 90, 520);

      resolve(canvas.toDataURL("image/png"));
    } catch (e) {
      reject(e);
    }
  });
}
