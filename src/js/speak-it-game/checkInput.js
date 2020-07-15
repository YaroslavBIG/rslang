import { start } from './utils/constants';
import { callMethodsForStat } from './callMethodsForStat';

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
          callMethodsForStat(obj);
        }
      }
    });
  });
};
