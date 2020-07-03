import {drawChart} from "./drawChart";
import {statisticsData} from "./constants";

export const statisticsControllerHandler = () => {
  const speakItBtn = document.getElementById('speakIt');
  speakItBtn.classList.add('active-btn');

  const controller = document.getElementById('statistics-controller');

  controller.addEventListener('click', (event) => {
    if (event.target['classList'].contains('game-btn')) {
      controller.querySelectorAll('.game-btn').forEach((btn) => {
        btn.classList.remove('active-btn')
      });
      event.target['classList'].add('active-btn');
      const newDataUrl = `${event.target['id']}Data`;
      drawChart(statisticsData[newDataUrl]);
    }
  });
}
