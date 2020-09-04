export function getWikipediaMobile(url: String) {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export function checkYear(year: string) {
  const currentYear = new Date().getFullYear();
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear);
  }
  return year;
}

export function checkRound(round: number) {
  if (round >= 100) {
    round = 1;
  }
  return round;
}

export function paginatorProperty(pageElements: number, page: number) {
  if (pageElements === -1) {
    return 'limit=1000';
  }
  const offset = (page - 1) * pageElements;
  const limit = pageElements;
  const filter = `limit=${limit}&offset=${offset}`;
  return filter;
}
