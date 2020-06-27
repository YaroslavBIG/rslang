import { getDayStatistic } from './getStatistic';

export const statisticPage = () => {
  const statistic = getDayStatistic();
  return `
  <h2>Статистика на сегодня</h2>
  <p>Верных ответов: ${statistic.rightAnswers}</p>
  <p>Ошибок: ${statistic.wrongAnswers}</p>
  <p>Процент верных ответов: ${statistic.percent}</p>
  <p>Самая длинная серия ответов: ${statistic.correctAnswersSeries}</p>
  <p>Выученно новых слов: ${statistic.wordsLearnToday}</p>
  `;
};
