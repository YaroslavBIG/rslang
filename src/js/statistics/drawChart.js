import { statisticsData } from './constants';

export const drawChart = (thisData) => {
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  new Chart(statisticsChart, {
    type: 'line',

    data: {
      labels: [1000, 2000, 3000, 4000, 5000],
      datasets: [{
        label: `Всего слов: ${statisticsData.totalWords}`,
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        data: thisData // Здесь должно быть кол-во изученных слов
      }]
    },

    // Configuration options go here
    options: {}
  });
};
