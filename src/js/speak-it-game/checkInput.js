import { clickContinueWithoutRepeat } from './buttons/clickContinueWithoutRepeat';
import { putGameStatistics } from '../api';
import { start } from './utils/constants';
import { clickContinueWithRepeat } from './buttons/clickContinueWithRepeat';
import { showStatistics } from './showing/showStatistics';

export const checkInput = () => {
  const input = document.querySelector('.hints-input');
  let rightCount = 0;
  const allRight = 10;
  input.addEventListener('focus', () => {
    const valueInput = input.value.toLowerCase();

    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.closest('.answers__item').classList.add('item_active');
        rightCount += 1;
        if (rightCount === allRight && start.get()) {
          const obj = {
            total: allRight,
            right: rightCount,
            wrong: allRight - rightCount,
          };
          start.set(false);
          putGameStatistics('speakit', obj);
          showStatistics(obj, false);
          clickContinueWithoutRepeat();
          clickContinueWithRepeat();
        }
      }
    });
  });
};
