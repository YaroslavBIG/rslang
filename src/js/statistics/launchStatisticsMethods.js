import { drawTotalChart } from './drawCharts';
import { statisticsControllerHandler } from './statisticsControllerHandler';

export const launchStatisticsMethods = () => {
  drawTotalChart('main');
  statisticsControllerHandler();
};
