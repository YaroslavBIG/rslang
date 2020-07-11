import { calculationOfPercentage } from './calculationOfPercentage';
import { concatObjects } from './concatObjects';
import { emptyStudyObj } from './constants';
import { dataArraySelection } from './dataArraySelection';

export const getStudyStatistics = async (name) => {
  const studyStatisticsArr = await dataArraySelection(name);

  if (studyStatisticsArr && studyStatisticsArr.length === 1) {
    const { newWords } = studyStatisticsArr[0];
    const { today } = studyStatisticsArr[0];
    const { correctSeries } = studyStatisticsArr[0];
    const { right } = studyStatisticsArr[0];
    const { wrong } = studyStatisticsArr[0];
    return {
      newWords,
      today,
      correctSeries,
      right,
      wrong,
      percent: calculationOfPercentage(today, right),
    };
  }

  if (studyStatisticsArr && studyStatisticsArr.length > 1) {
    const thisStudyData = { ...emptyStudyObj };
    concatObjects(studyStatisticsArr, thisStudyData);
    thisStudyData.percent = calculationOfPercentage(thisStudyData.today, thisStudyData.right);
    return thisStudyData;
  }
  return emptyStudyObj;
};
