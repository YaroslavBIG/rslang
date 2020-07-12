import { createShortStatistic } from './createShortStatistic';
import { clickContinueWithoutRepeat } from './clickContinueWithoutRepeat';
import { recognition } from './recognition';
import { putGameStatistics } from '../api';
import { start } from './constants';

export const checkInput = () => {
  const input = document.querySelector('.hints-input');
  const modal = document.querySelector('#speak-modal');
  let rightCount = 0;
  const allRight = 10;
  const isStart = start.get();

  input.addEventListener('focus', () => {
    const valueInput = input.value;

    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.closest('.answers__item').classList.add('item_active');
        rightCount += 1;
        if (rightCount === 2 && isStart) {
          const obj = {
            total: allRight,
            right: rightCount,
            wrong: allRight - rightCount,
          };
          start.set(false);
          putGameStatistics('speakit', obj);
          modal.innerHTML = createShortStatistic(obj);
          modal.style.display = 'block';
          clickContinueWithoutRepeat();
          recognition();
        }
      }
    });
  });
};
