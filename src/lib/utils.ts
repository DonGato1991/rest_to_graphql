export function getWikipediaMobile(url: String) {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
}
