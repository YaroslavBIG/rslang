import { dataArraySelection } from './dataArraySelection';
import { collectionDatasheets } from './collectionDatasheets';

export const fetchMiniGameChartData = async (id) => {
  const miniGameStatisticsArr = await dataArraySelection(id);
  const miniGameChartData = {
    total: [],
    right: [],
  };
  collectionDatasheets(
    miniGameStatisticsArr,
    miniGameChartData,
    'total',
    'right',
  );
  return miniGameChartData;
};
