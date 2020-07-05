import { drawTotalChart } from './drawCharts';
import { statisticsControllerHandler } from './statisticsControllerHandler';
import { detailsBtnHandler } from './detailsBtnHandler';
import { statisticsData } from './constants';

export const launchStatisticsMethods = () => {
  drawTotalChart(statisticsData.totalData);
  statisticsControllerHandler();
  detailsBtnHandler();
};
