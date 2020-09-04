import { F1 } from './data-source';
import { checkYear, checkRound, paginatorProperty } from '../lib/utils';

export class DriverData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElements: number = -1, page: number = 1) {
    return await this.get(`drivers.json?${ paginatorProperty(pageElements, page) }`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriversByYear(year: string) {
    year = checkYear(year);
    return await this.get(String(year).concat(`/drivers.json`), {
      cacheOptions: { ttl: 60 },
    });
  }
  async getDriversByYearAndRound(year: string, round: number) {
    year = checkYear(year);
    round = checkRound(round);
    return await this.get(String(year).concat('/').concat(String(round)).concat(`/drivers.json`), {
      cacheOptions: { ttl: 60 },
    });
  }
  async getDriverById(id: string ) {
    return await this.get(`/drivers/${id}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
