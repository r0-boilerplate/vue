export function getImageUrl(path) {
  const href = new URL(`../assets/${path}`, import.meta.url).href;
  console.log("href", href);
  return href;
}
