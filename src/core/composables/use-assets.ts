export function getImageUrl(file: string) : string {
  return new URL(`/src/assets/img/${file}`, import.meta.url).href
}