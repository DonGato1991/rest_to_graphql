import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    async seasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons
        .getSeasons()
        .then((data: any) => data.MRData.SeasonTable.Seasons);
    },
    async racesByYear(_: void, { year }, { dataSources }) {
      return await dataSources.races
        .getRacesByYear(year)
        .then((data: any) => data.MRData.RaceTable.Races);
    },
    async raceSelect(_: void, { year, round }, { dataSources }) {
      return await dataSources.races
        .getRacesByYearAndRound(year, round)
        .then((data: any) => data.MRData.RaceTable.Races[0]);
    },
    async driversList(_: void, { pageElements, page }, { dataSources }) {
      return await dataSources.drivers
        .getDrivers(pageElements, page)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async driversByYear(_: void, { year }, { dataSources }) {
      return await dataSources.drivers
        .getDriversByYear(year)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async driversByYearAndRound(_: void, { year, round }, { dataSources }) {
      return await dataSources.drivers
        .getDriversByYearAndRound(year, round)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async getInfoDriver(_: void, { id }, { dataSources }) {
      return await dataSources.drivers
        .getDriverById(id)
        .then((data: any) => data.MRData.DriverTable.Drivers[0]);
    },
    async getStandings(_: void, { year }, { dataSources }) {
      return await dataSources.standings
        .getStandings(year)
        .then(
          (data: any) =>
            data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
    },
    async circuitList(_: void, { pageElements, page }, { dataSources }) {
      return await dataSources.circuits
        .getCircuits(pageElements, page)
        .then((data: any) => data.MRData.CircuitTable.Circuits);
    },
  },
};

export default query;
