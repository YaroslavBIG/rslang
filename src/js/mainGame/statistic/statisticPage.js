import { getDayStatistic } from './getStatistic';

export const statisticPage = async () => {
  const statistic = await getDayStatistic();

  return `
  <h2>Статистика на сегодня</h2>
  <p>Верных ответов: ${statistic.right}</p>
  <p>Ошибок: ${statistic.wrong}</p>
  <p>Процент верных ответов: ${statistic.percent}</p>
  <p>Самая длинная серия ответов: ${statistic.correctSeries}</p>
  <p>Выученно новых слов: ${statistic.newWords}</p>
  <p>Всего слов за этот день: ${statistic.today}</p>
  `;
};
