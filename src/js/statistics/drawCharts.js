import { calculationOfPercentage } from './calculationOfPercentage';
import { createMarkupChart } from './createMarkupChart';
import { detailsBtnHandler } from './detailsBtnHandler';
import { fetchMainChartData } from './fetchMainChartData';
import { fetchMiniGameChartData } from './fetchMiniGameChartData';
import { percentCheck } from './percentCheck';

export const drawMiniGameChart = async (gameId) => {
  const chartGameData = await fetchMiniGameChartData(gameId);
  const sumTotal = chartGameData.total.reduce((acc, cV) => acc + cV, 0);
  const sumRight = chartGameData.right.reduce((acc, cV) => acc + cV, 0);
  const percentRight = calculationOfPercentage(sumTotal, sumRight);
  const mainBlock = document.getElementById('main-block');
  mainBlock.innerHTML = createMarkupChart();
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 15;
  /* global Chart */
  (() => new Chart(statisticsChart, {
    type: 'bar',

    data: {
      labels: chartGameData.right, // Тут должно быть количество слов за игру
      datasets: [{
        label: `В среднем правильно: ${percentCheck(percentRight)}%`, // все просто и понятно
        backgroundColor: '#4687dc',
        borderColor: '#4687dc',
        data: chartGameData.total, // Здесь правильные ответы из общего количества слов за игру
      }],
    },

    options: {},
  }))();
  await detailsBtnHandler(gameId);
};

export const drawTotalChart = async (yourId) => {
  const chartData = await fetchMainChartData(yourId);
  const mainBlock = document.getElementById('main-block');
  mainBlock.innerHTML = createMarkupChart();
  const statisticsChart = document.getElementById('statistics-chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 15;
  (() => new Chart(statisticsChart, {
    type: 'line',

    data: {
      labels: chartData.date, // Здесь дата изучения слов
      datasets: [{
        label: `Всего слов: ${chartData.totalWords}`, // Общее количество слов, которые изучил
        backgroundColor: '#4687dc',
        borderColor: '#4687dc',
        data: chartData.newWords, // количество изученых слов за день
      }],
    },

    options: {},
  }))();
  await detailsBtnHandler(yourId);
};
