import { getWordsLernedToday } from './getWordsLernedToday';
import { putGameStatistics } from '../../api';

export const getDayStatistic = async () => {
  const today = await getWordsLernedToday();
  const newWords = parseInt(localStorage.getItem('newWordsCount'), 10) || 0;
  const correctSeries = parseInt(localStorage.getItem('correctAnswersSeries'), 10) || 0;
  const right = parseInt(localStorage.getItem('rightAnswers'), 10) || 0;
  const wrong = parseInt(localStorage.getItem('wrongAnswers'), 10) || 0;

  const statistic = {
    newWords,
    today,
    correctSeries,
    right,
    wrong,
  };

  putGameStatistics('main', { ...statistic });

  const percent = Math.round(((right / (right + wrong)) * 100));
  statistic.percent = percent;
  return statistic;
};
