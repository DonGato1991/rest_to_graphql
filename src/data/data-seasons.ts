import { F1 } from './data-source';

export class SeasonData extends F1 {
  constructor() {
    super();
  }

  async getSeasons() {
    return await this.get('seasons.json', {
      cacheOptions: { ttl: 60 },
    });
  }
}
