import { gameArrows } from './arrow';

export const pressEnterKey = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const obj = {
      target: 'right',
    };
    gameArrows(obj);
  }
};
