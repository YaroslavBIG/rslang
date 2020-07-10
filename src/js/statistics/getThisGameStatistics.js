import { fetchStatisticsData } from './fetchStatisticsData';
import { calculationOfPercentage } from './calculationOfPercentage';

export const getThisGameStatistics = async (gameName) => {
  const thisData = await fetchStatisticsData();
  const thisGameStatisticsArr = thisData.optional.games[gameName];

  if (thisGameStatisticsArr) {
    if (thisGameStatisticsArr.length === 1) {
      const { total } = thisGameStatisticsArr[0];
      const { right } = thisGameStatisticsArr[0];
      const { wrong } = thisGameStatisticsArr[0];
      return {
        total,
        right,
        wrong,
        percent: calculationOfPercentage(total, right),
      };
    }

    const totalData = {
      total: 0,
      right: 0,
      wrong: 0,
    };
    thisGameStatisticsArr.forEach((el) => {
      const arrayOfDays = Object.keys(el);
      arrayOfDays.forEach((key) => {
        if (key !== 'date') {
          totalData[key] += el[key];
        }
      });
    });
    totalData.percent = calculationOfPercentage(totalData.total, totalData.right);
    return totalData;
  }
  // eslint-disable-next-line no-console
  console.log('Не успели сделать эту игру');
};
