export const getDayStatistic = () => {
  const newWordsCount = localStorage.getItem('newWordsCount') || 0;
  const wordsLearnToday = localStorage.getItem('wordsLearnToday') || 0;
  const correctAnswersSeries = localStorage.getItem('correctAnswersSeries') || 0;
  const rightAnswers = localStorage.getItem('rightAnswers') || 0;
  const wrongAnswers = localStorage.getItem('wrongAnswers') || 0;
  const percent = rightAnswers / ((rightAnswers + wrongAnswers) / 100) || 0;
  const resultObj = {
    newWordsCount,
    wordsLearnToday,
    correctAnswersSeries,
    rightAnswers,
    wrongAnswers,
    percent,
  };
  console.log(resultObj);
  return resultObj;
};
