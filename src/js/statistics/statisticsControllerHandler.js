import { drawMiniGameChart, drawTotalChart } from './drawCharts';
import { statisticsData } from './constants';

export const statisticsControllerHandler = () => {
  const mainBtn = document.getElementById(statisticsData.mainId);
  mainBtn.classList.add('active-btn');

  const controller = document.getElementById('statistics-controller');

  controller.addEventListener('click', (event) => {
    if (event.target.classList.contains('game-btn')) {
      controller.querySelectorAll('.game-btn').forEach((btn) => {
        btn.classList.remove('active-btn');
      });
      const gameId = event.target.id;
      event.target.classList.add('active-btn');
      if (event.target.id === statisticsData.mainId
        || event.target.id === statisticsData.intervalsId) {
        drawTotalChart(gameId);
      } else {
        drawMiniGameChart(gameId);
      }
    }
  });
};
