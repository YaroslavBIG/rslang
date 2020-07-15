import { nextWordNum } from './nextWordNum';
import { progressBar } from '../progressBar';
import { modalCreate } from '../modal/modalCreate';
import { gameContent } from '../gameContent';
import { intervalGameContent } from '../interval/intervalGameContent';

export const nextCard = (arrowDirection, game = 'main') => {
  const currentWordNum = parseInt(sessionStorage.getItem('wordNum'), 10);
  const collectionLen = sessionStorage.getItem('collectionLen');
  const cardGame = document.querySelector('.card-game');
  const cardsLimit = parseInt(localStorage.getItem('maxCardsPerDay'), 10) || 0;
  const wordsLearnToday = parseInt(localStorage.getItem('wordsLearnToday'), 10) || 0;

  if (cardsLimit <= wordsLearnToday) {
    return modalCreate('end', game);
  }

  const featureWordNum = nextWordNum(arrowDirection);

  if (currentWordNum === 0 && arrowDirection === 'left') return;

  cardGame.classList.remove('transform--scale');

  if (featureWordNum >= collectionLen) {
    const progress = parseInt(sessionStorage.getItem('wordNum'), 10);
    const progressAll = JSON.parse(sessionStorage.getItem('apiWords')).length;
    progressBar(progress + 1, progressAll);
    return modalCreate('continue', game);
  }

  if (featureWordNum !== currentWordNum) {
    game === 'main' ? gameContent(null, featureWordNum) : intervalGameContent(null, featureWordNum);
  }
};
