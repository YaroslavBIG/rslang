import { fetchStatisticsData } from './fetchStatisticsData';

export const dataArraySelection = async (nameGame) => {
  const thisData = await fetchStatisticsData();
  return thisData.optional.games[nameGame];
};
