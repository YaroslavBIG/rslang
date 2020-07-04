import { statisticsData } from './constants';

export const drawMiniGameChart = (thisData) => {
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  /* global Chart */
  (() => new Chart(statisticsChart, {
    type: 'line',

    data: {
      labels: ['02.07', '03.07', '04.07', '05.07', '06.07'], // Дата, когда играли
      datasets: [{
        label: `Всего слов: ${statisticsData.totalWords}`,
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        data: thisData, // Здесь должно быть кол-во изученных слов
      }],
    },

    options: {},
  }))();
};

export const drawTotalChart = (thisData) => {
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  (() => new Chart(statisticsChart, {
    type: 'line',

    data: {
      labels: [1000, 2000, 3000, 4000, 5000],
      datasets: [{
        label: `Всего слов: ${statisticsData.totalWords}`,
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        data: thisData, // Здесь должно быть кол-во изученных слов
      }],
    },

    options: {},
  }))();
};
