import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/utils';

export class RaceData extends F1 {
  constructor() {
    super();
  }

  async getRacesByYear(year: string) {
    year = checkYear(year);
    return await this.get(`${year}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getRacesByYearAndRound(year: string, round: number) {
    year = checkYear(year);
    round = checkRound(round);
    return await this.get(`${year}/${round}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
