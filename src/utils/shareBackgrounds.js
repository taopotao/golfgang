
// Points to the images inside /public
// When Vite builds, these resolve automatically.
export const SHARE_BACKGROUNDS = [
  "/share-bg-1.jpg",
  "/share-bg-2.jpg",
  "/share-bg-3.jpg",
  "/share-bg-4.jpg",
  "/share-bg-5.jpg",
  "/share-bg-6.jpg",
];

// Return a random one
export function getRandomBackground() {
  const index = Math.floor(Math.random() * SHARE_BACKGROUNDS.length);
  return SHARE_BACKGROUNDS[index];
}
