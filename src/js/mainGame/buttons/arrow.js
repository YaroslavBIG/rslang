import { gameContent } from '../gameContent';
import { addNewWordsPage } from '../newWords';
import { buttonAnswer } from './buttonAnswer';

export const gameArrows = (event) => {
  const { id } = event.target;
  const arrowDirection = id === 'arrow_left' ? 'left' : 'right';
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word');
  const currentWord = wordBlock.innerText;
  const hint = wordBlock.firstChild || wordBlock;
  const isHint = hint.nodeName === 'SPAN';

  if ((word !== currentWord && arrowDirection === 'right') || isHint) {
    wordBlock.classList.add('target-word--incorrect');
    const userInput = wordBlock.innerText;
    if (userInput !== '') buttonAnswer();
    return;
  }

  const currentWordNum = parseInt(sessionStorage.getItem('wordNum'), 10);
  const collectionLen = sessionStorage.getItem('collectionLen');

  let featureWordNum = NaN;
  switch (currentWordNum) {
    case 0:
      arrowDirection === 'left' ? featureWordNum = 0 : featureWordNum = 1;
      addNewWordsPage();
      break;
    case collectionLen + 1:
      addNewWordsPage();
      break;
    default:
      featureWordNum = arrowDirection === 'left' ? currentWordNum - 1 : currentWordNum + 1;
      break;
  }

  if (featureWordNum !== currentWordNum) {
    gameContent(null, featureWordNum);
  }
};
