import { buttonAnswer } from './buttonAnswer';
import { answerCheck, nextCard } from '../utils';

export const gameArrows = (event) => {
  const { id } = event.target;
  const arrowDirection = id === 'arrow_left' ? 'left' : 'right';
  const wordBlock = document.querySelector('.sentence--target-word');
  const cardGame = document.querySelector('.card-game');
  const ansCheck = answerCheck();

  if (arrowDirection === 'left') return nextCard(arrowDirection, 'main');

  if (!ansCheck && arrowDirection === 'right') {
    wordBlock.classList.add('target-word--incorrect');
    const userInput = wordBlock.innerText;
    if (userInput !== '') buttonAnswer();
    return;
  }

  if (ansCheck && arrowDirection === 'right') {
    cardGame.classList.remove('transform--scale');
  }

  nextCard(arrowDirection, 'main');
};
