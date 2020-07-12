import { gameArrows } from './arrow';

export const pressEnterKey = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    gameArrows({ target: 'right' });
  }
};
