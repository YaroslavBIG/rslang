import { statisticsData } from './constants';
import { createMarkupChart } from './createMarkupChart';
import { detailsBtnHandler } from './detailsBtnHandler';

export const drawMiniGameChart = (thisData, gameId) => {
  const thisGameId = gameId;
  const mainBlock = document.getElementById('main-block');
  mainBlock.innerHTML = createMarkupChart();
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  /* global Chart */
  (() => new Chart(statisticsChart, {
    type: 'bar',

    data: {
      labels: [9, 99, 444, 555, 777], // Тут должно быть количество слов за игру
      datasets: [{
        label: `Правильных ответов: ${statisticsData.totalWords}`, // все просто и понятно
        backgroundColor: '#4687dc',
        borderColor: '#4687dc',
        data: thisData, // Здесь правильные ответы из общего количества слов за игру
      }],
    },

    options: {},
  }))();
  detailsBtnHandler(thisGameId);
};

export const drawTotalChart = (thisData, gameId) => {
  const thisGameId = gameId;
  const mainBlock = document.getElementById('main-block');
  mainBlock.innerHTML = createMarkupChart();
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 15;
  (() => new Chart(statisticsChart, {
    type: 'line',

    data: {
      labels: ['02.07', '03.07', '04.07', '05.07', '06.07'], // Здесь дата изучения слов
      datasets: [{
        label: `Всего слов: ${statisticsData.totalWords}`, // Общее количество слов, которые изучил
        backgroundColor: '#4687dc',
        borderColor: '#4687dc',
        data: thisData, // количество изученых слов за день
      }],
    },

    options: {},
  }))();
  detailsBtnHandler(thisGameId);
};