import { getWordsLernedToday } from './getWordsLernedToday';

export const getDayStatistic = async () => {
  const today = await getWordsLernedToday();
  const newWords = parseInt(localStorage.getItem('newWordsCount'), 10) || 0;
  const correctSeries = parseInt(localStorage.getItem('correctAnswersSeries'), 10) || 0;
  const right = parseInt(localStorage.getItem('rightAnswers'), 10) || 0;
  const wrong = parseInt(localStorage.getItem('wrongAnswers'), 10) || 0;

  const percent = Math.round(((right / (right + wrong)) * 100));

  return {
    newWords, // Новых за сегодня
    today, // Всего за сегодня
    correctSeries,
    right,
    wrong,
    percent,
  };
};
