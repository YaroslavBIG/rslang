const setLocStats = (name, value = 0) => localStorage.setItem(name, value);

export const setStatistic = (param) => {
  const wordsLearnToday = parseInt(localStorage.getItem('wordsLearnToday'), 10) || 0;
  const newWordsCount = parseInt(localStorage.getItem('newWordsCount'), 10) || 0;

  switch (param) {
    case 'card':
      setLocStats('wordsLearnToday', (wordsLearnToday ? wordsLearnToday + 1 : 1));
      break;
    case 'newWordsCount':
      setLocStats('newWordsCount', (newWordsCount ? newWordsCount + 1 : 1));
      break;
    case 'clear':
      setLocStats('newWordsCount');
      setLocStats('wordsLearnToday');
      break;
    default:
      break;
  }
};

export const setAnswers = (param) => {
  const correctAnswers = () => parseInt(localStorage.getItem('correctAnswersSeries'), 10) || 0;
  const answersSeries = () => parseInt(localStorage.getItem('answersSeries'), 10) || 0;
  const rightAnswers = parseInt(localStorage.getItem('rightAnswers'), 10) || 0;
  const wrongAnswers = parseInt(localStorage.getItem('wrongAnswers'), 10) || 0;
  const lastAnswer = localStorage.getItem('lastAnswer');

  switch (param) {
    case 'clear':
    case 'clearAll':
      if (param === 'clearAll') setLocStats('correctAnswersSeries');
      setLocStats('rightAnswers');
      setLocStats('wrongAnswers');
      setLocStats('lastAnswer', 'right');
      break;
    case 'right':
      setLocStats('answersSeries', answersSeries() ? answersSeries() + 1 : 1);
      setLocStats('rightAnswers', rightAnswers ? rightAnswers + 1 : 1);
      if (lastAnswer === 'right' && answersSeries() > correctAnswers()) setLocStats('correctAnswersSeries', (correctAnswers() ? correctAnswers() + 1 : 1));
      break;
    case 'wrong':
      setLocStats('answersSeries', 0);
      setLocStats('wrongAnswers', wrongAnswers ? wrongAnswers + 1 : 1);
      setLocStats('lastAnswer', 'wrong');
      break;
    default:
      break;
  }
};
