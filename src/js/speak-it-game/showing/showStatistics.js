import { createShortStatistic } from '../creating/createShortStatistic';

export const showStatistics = (obj, isResultButton) => {
  const modal = document.querySelector('#speak-modal');
  modal.innerHTML = createShortStatistic(obj, isResultButton);
  modal.style.display = 'block';
};
