import { getDayOfYear, globalUser } from '../../utils';
import { setLocStats } from '../utils/setLocStats';

export const setStatistic = (param) => {
  const wordsLearnToday = parseInt(localStorage.getItem('wordsLearnToday'), 10);
  const newWordsCount = parseInt(localStorage.getItem('newWordsCount'), 10);

  const lastUserId = localStorage.getItem('lastUserId');
  const { userId } = globalUser.get();

  const dayNow = getDayOfYear();
  const dayOfLastGame = parseInt(localStorage.getItem('dayOfLastGame'), 10);

  switch (param) {
    case 'card':
      setLocStats('wordsLearnToday', (wordsLearnToday ? wordsLearnToday + 1 : 1));
      break;
    case 'newWordsCount':
      setLocStats('newWordsCount', (newWordsCount ? newWordsCount + 1 : 1));
      break;
    case 'clear':
      setLocStats('newWordsCount');
      if (userId !== lastUserId || dayNow !== dayOfLastGame) {
        setLocStats('wordsLearnToday');
        setLocStats('correctAnswersSeries');
        setLocStats('rightAnswers');
        setLocStats('wrongAnswers');
      }
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
  const dayOfLastGame = parseInt(localStorage.getItem('dayOfLastGame'), 10) || 0;
  const dayYearToday = getDayOfYear();

  switch (param) {
    case 'clear':
      if (dayYearToday !== dayOfLastGame) {
        setLocStats('correctAnswersSeries');
      }
      setLocStats('rightAnswers');
      setLocStats('wrongAnswers');
      setLocStats('lastAnswer', 'right');
      break;
    case 'right':
      setLocStats('answersSeries', answersSeries() ? answersSeries() + 1 : 1);
      setLocStats('rightAnswers', rightAnswers ? rightAnswers + 1 : 1);
      setLocStats('dayOfLastGame', getDayOfYear());
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
