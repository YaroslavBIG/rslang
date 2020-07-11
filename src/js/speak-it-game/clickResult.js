import { createShortStatistic } from './createShortStatistic';
import { returnBlockWithWrong } from './returnBlockWithWrong';
import { showPlayDescription } from './showPlayDescription';
import { clickReturn } from './clickReturn';

const createResult = () => {
  const rightRes = document.querySelectorAll('.item_active').length;
  const items = document.querySelectorAll('.answers__item');
  const wrongArr = [];
  items.forEach((item) => {
    if (!item.classList.contains('item_active')) {
      wrongArr.push(item);
    }
  });

  return { right: rightRes, wrong: wrongArr };
};

export const clickResult = () => {
  const modal = document.querySelector('#speak-modal');
  document.querySelector('#results-speak').addEventListener('click', () => {
    const obj = createResult();
    modal.innerHTML = createShortStatistic(obj, true);
    returnBlockWithWrong(obj);
    modal.style.display = 'block';
    showPlayDescription(true);
    clickReturn();
  });
};
