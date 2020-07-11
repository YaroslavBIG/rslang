import { createShortStatistic } from './createShortStatistic';
import { clickContinueWithoutRepeat } from './clickContinueWithoutRepeat';

export const checkInput = () => {
  const input = document.querySelector('.hints-input');
  const modal = document.querySelector('#speak-modal');
  let rightCount = 0;
  let wrongCount = 0;
  const allRight = 10;

  input.addEventListener('focus', () => {
    const valueInput = input.value;

    document.querySelectorAll('.item-word').forEach((elem) => {
      if (elem.textContent === valueInput) {
        elem.closest('.answers__item').classList.add('item_active');
        rightCount += 1;
        if (rightCount === 2) {
          const obj = {
            total: allRight,
            right: rightCount,
            wrong: wrongCount,
          };
          modal.innerHTML = createShortStatistic(obj);
          modal.style.display = 'block';
          clickContinueWithoutRepeat();
        }
      } else {
        wrongCount += 1;
      }
    });
  });
};
