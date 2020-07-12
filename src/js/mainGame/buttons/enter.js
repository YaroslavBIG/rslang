import { gameArrows } from './arrow';
import { deleteAnswer } from '../utils';

export const pressEnterKey = (event, intervals = false) => {
  if (event.key === 'Enter' && document.querySelector('.game_main__modal').style.display !== 'unset') {
    event.preventDefault();

    const modalWindow = document.querySelector('.game_main__modal');
    const modalIsClose = modalWindow.style.display !== 'unset';
    const wordBlock = document.querySelector('.sentence--target-word');
    const hint = wordBlock.firstChild || wordBlock;
    const isHint = hint.nodeName === 'SPAN';
    if (isHint) {
      return deleteAnswer();
    }
    if (modalIsClose && !intervals) {
      return gameArrows({ target: 'right' });
    }
  }
};
