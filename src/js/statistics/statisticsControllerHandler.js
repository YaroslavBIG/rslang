import { drawMiniGameChart, drawTotalChart } from './drawCharts';
import { statisticsData } from './constants';

export const statisticsControllerHandler = () => {
  const totalBtn = document.getElementById('total');
  totalBtn.classList.add('active-btn');

  const controller = document.getElementById('statistics-controller');

  controller.addEventListener('click', (event) => {
    if (event.target.classList.contains('game-btn')) {
      controller.querySelectorAll('.game-btn').forEach((btn) => {
        btn.classList.remove('active-btn');
      });
      const gameId = event.target.id;
      event.target.classList.add('active-btn');
      const newDataUrl = `${event.target.id}Data`;
      if (event.target.id === 'total') {
        drawTotalChart(statisticsData[newDataUrl], gameId);
      } else {
        drawMiniGameChart(statisticsData[newDataUrl], gameId);
      }
    }
  });
};
