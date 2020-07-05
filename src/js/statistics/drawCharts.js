import { statisticsData } from './constants';

export const drawMiniGameChart = (thisData) => {
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  /* global Chart */
  (() => new Chart(statisticsChart, {
    type: 'bar',

    data: {
      labels: [9, 99, 444, 555, 777], // Тут должно быть количество слов за игру
      datasets: [{
        label: `Процент правильных ответов: ${statisticsData.totalWords}`, // все просто и понятно
        backgroundColor: 'rgb(109, 155, 220)',
        borderColor: 'rgb(109, 155, 220)',
        data: thisData, // Здесь правильные ответы из общего количества слов за игру
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
      labels: ['02.07', '03.07', '04.07', '05.07', '06.07'], // Здесь дата изучения слов
      datasets: [{
        label: `Всего слов: ${statisticsData.totalWords}`, // Общее количество слов, которые изучил
        backgroundColor: 'rgb(109, 155, 220)',
        borderColor: 'rgb(109, 155, 220)',
        data: thisData, // количество изученых слов за день
      }],
    },

    options: {},
  }))();
};
