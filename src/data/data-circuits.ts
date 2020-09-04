import { F1 } from './data-source';
import { paginatorProperty } from '../lib/utils';

export class CircuitData extends F1 {
  constructor() {
    super();
  }

  async getCircuits(pageElements: number = -1, page: number = 1) {
    return await this.get(`circuits.json?${paginatorProperty(pageElements, page)}`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getCircuitById(id: string) {
    return await this.get(`/circuits/${id}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
