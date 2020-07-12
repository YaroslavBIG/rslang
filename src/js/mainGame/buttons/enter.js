import { gameArrows } from './arrow';

export const pressEnterKey = (event) => {
  const modalWindow = document.querySelector('.game_main__modal');
  const modalIsClose = modalWindow.style.display === 'unset';
  console.log('тыц');
  if (event.key === 'Enter' && modalIsClose) {
    event.preventDefault();
    console.log('!!!!');
    gameArrows({ target: 'right' });
  }
};
