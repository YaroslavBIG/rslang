import { gameContent } from '../gameContent';
import { addNewWordsPage } from '../newWords';
import { buttonAnswer } from './buttonAnswer';
import { setStatistic, setAnswers } from '../statistic/setStatistic';
import { modalCreate } from '../modal/modalCreate';
import { progressBar } from '../progressBar';
import { answerCheck } from '../utils';

export const gameArrows = (event) => {
  const { id } = event.target;
  const arrowDirection = id === 'arrow_left' ? 'left' : 'right';
  const wordBlock = document.querySelector('.sentence--target-word');
  const cardGame = document.querySelector('.card-game');
  const cardsLimit = parseInt(localStorage.getItem('wordsPerDay'), 10) || 0;
  const wordsLearnToday = parseInt(localStorage.getItem('wordsLearnToday'), 10) || 0;

  if (!answerCheck() && arrowDirection === 'right') {
    wordBlock.classList.add('target-word--incorrect');
    const userInput = wordBlock.innerText;
    setAnswers('wrong');
    if (userInput !== '') buttonAnswer();
    return;
  }

  if (answerCheck() && arrowDirection === 'right') {
    setAnswers('right');
    setStatistic('newWordsCount'); // TODO: add validation new or not
    setStatistic('wordsLearnToday');
    cardGame.classList.remove('transform--scale');
  }

  const currentWordNum = parseInt(sessionStorage.getItem('wordNum'), 10);
  const collectionLen = sessionStorage.getItem('collectionLen');

  let featureWordNum = NaN;
  switch (currentWordNum) {
    case 0:
      arrowDirection === 'left' ? featureWordNum = 0 : featureWordNum = 1;
      addNewWordsPage();
      break;
    default:
      featureWordNum = arrowDirection === 'left' ? currentWordNum - 1 : currentWordNum + 1;
      cardGame.classList.remove('transform--scale');
      break;
  }
  if (featureWordNum >= collectionLen) {
    const progress = parseInt(sessionStorage.getItem('wordNum'), 10);
    const progressAll = JSON.parse(sessionStorage.getItem('apiWords')).length;
    progressBar(progress + 1, progressAll);
    return modalCreate(); // TODO: Check words per day
  }
  if (cardsLimit <= wordsLearnToday) {
    return modalCreate('end');
  }
  if (featureWordNum !== currentWordNum) {
    gameContent(null, featureWordNum);
  }
};