import { drawChart } from './drawChart';
import { statisticsControllerHandler } from './statisticsControllerHandler';
import { statisticsData } from './constants';

export const launchStatisticsMethods = () => {
  drawChart(statisticsData.speakItData);
  statisticsControllerHandler();
};
