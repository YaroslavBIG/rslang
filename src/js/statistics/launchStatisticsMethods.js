import { drawTotalChart } from './drawCharts';
import { statisticsControllerHandler } from './statisticsControllerHandler';
import { statisticsData } from './constants';

export const launchStatisticsMethods = () => {
  drawTotalChart(statisticsData.totalData);
  statisticsControllerHandler();
};
