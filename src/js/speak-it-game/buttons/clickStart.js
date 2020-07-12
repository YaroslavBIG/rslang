import { checkInput } from '../checkInput';
import { checkStart } from '../checkStart';
import { recognition } from '../utils/recognition';
import { start, textEnd, textStart } from '../utils/constants';

export const clickStart = async () => {
  let isStart = start.get();

  document.querySelector('#start-speak').addEventListener('click', () => {
    isStart = !start.get();
    if (isStart) {
      checkStart('none', true, textEnd);
      recognition(true);
      start.set(true);
      checkInput();
    } else {
      checkStart('auto', false, textStart);
      start.set(false);
      recognition(false);
    }
    start.set(isStart);
  });
};
