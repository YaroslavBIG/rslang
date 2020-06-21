import { gameArrows } from './buttons/arrow';

export const addMainGameListners = () => {
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach((arrow) => arrow.addEventListener('click', (ev) => gameArrows(ev)));
};
