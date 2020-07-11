import { calculationOfPercentage } from './calculationOfPercentage';
import { concatObjects } from './concatObjects';
import { emptyGameObj } from './constants';
import { dataArraySelection } from './dataArraySelection';

export const getThisGameStatistics = async (gameName) => {
  const thisGameStatisticsArr = await dataArraySelection(gameName);

  if (thisGameStatisticsArr && thisGameStatisticsArr.length === 1) {
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
  if (thisGameStatisticsArr && thisGameStatisticsArr.length > 1) {
    const totalData = { ...emptyGameObj };
    concatObjects(thisGameStatisticsArr, totalData);
    totalData.percent = calculationOfPercentage(totalData.total, totalData.right);
    return totalData;
  }
  return emptyGameObj;
};
