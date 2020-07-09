import { fetchStatisticsData } from './fetchStatisticsData';

export const getThisGameStatistics = () => {
  const thisData = fetchStatisticsData();
  // eslint-disable-next-line no-console
  console.log(thisData);
  // процент правильных считать так: (правильные ответы * 100) / общее кол-во
};
