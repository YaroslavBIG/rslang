import { gameArrows } from './arrow';

export const pressEnterKey = (event) => {
  if (event.key === 'Enter' && document.querySelector('.game_main__modal').style.display !== 'unset') {
    event.preventDefault();

    const modalWindow = document.querySelector('.game_main__modal');
    const modalIsClose = modalWindow.style.display !== 'unset';
    if (modalIsClose) {
      gameArrows({ target: 'right' });
    }
  }
};
