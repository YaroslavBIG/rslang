import { fetchStatisticsData } from './fetchStatisticsData';

export const getThisGameStatistics = async () => {
  const thisData = await fetchStatisticsData();
  // eslint-disable-next-line no-console
  console.log(thisData);
  // процент правильных считать так: (правильные ответы * 100) / общее кол-во
};
