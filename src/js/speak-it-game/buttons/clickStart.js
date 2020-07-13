import { checkInput } from '../checkInput';
import { checkStart } from '../checkStart';
import { recognition } from '../utils/recognition';
import { start, phrases } from '../utils/constants';

export const clickStart = async () => {
  let isStart = start.get();
  const { textEnd, textStart } = phrases;

  document.querySelector('#start-speak').addEventListener('click', () => {
    isStart = !isStart;
    if (isStart) {
      checkStart('none', true, textEnd);
      recognition(true);
      checkInput();
    } else {
      checkStart('auto', false, textStart);
      recognition(false);
    }
    start.set(isStart);
  });
};
