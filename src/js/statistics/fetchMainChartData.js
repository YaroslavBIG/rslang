import { dataArraySelection } from './dataArraySelection';
import { collectionDatasheets } from './collectionDatasheets';

export const fetchMainChartData = async (id) => {
  const mainStatisticsArr = await dataArraySelection(id);
  const mainChartData = {
    date: [],
    newWords: [],
  };
  collectionDatasheets(
    mainStatisticsArr,
    mainChartData,
    'date',
    'newWords',
  );
  mainChartData.totalWords = mainChartData.newWords.reduce((acc, cV) => acc + cV, 0);
  return mainChartData;
};
