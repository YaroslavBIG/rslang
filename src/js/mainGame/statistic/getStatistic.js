export const getDayStatistic = () => {
  const newWordsCount = parseInt(localStorage.getItem('newWordsCount'), 10) || 0;
  const wordsLearnToday = parseInt(localStorage.getItem('wordsLearnToday'), 10) || 0;
  const correctAnswersSeries = parseInt(localStorage.getItem('correctAnswersSeries'), 10) || 0;
  const rightAnswers = parseInt(localStorage.getItem('rightAnswers'), 10) || 0;
  const wrongAnswers = parseInt(localStorage.getItem('wrongAnswers'), 10) || 0;

  const percent = Math.round(((rightAnswers / (rightAnswers + wrongAnswers)) * 100));
  const resultObj = {
    newWordsCount,
    wordsLearnToday,
    correctAnswersSeries,
    rightAnswers,
    wrongAnswers,
    percent,
  };
  return resultObj;
};
