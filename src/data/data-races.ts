import { F1 } from './data-source';

export class RaceData extends F1 {
  constructor() {
    super();
  }

  /*async getSeasons() {
    return await this.get('seasons.json?limit%20=80', {
      cacheOptions: { ttl: 60 },
    });
  }*/
}
