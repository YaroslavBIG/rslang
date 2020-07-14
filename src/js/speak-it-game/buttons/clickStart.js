import { start, phrases } from '../utils/constants';
import { checkStart } from '../checkStart';
import { checkInput } from '../checkInput';

export const clickStart = (speech) => {
  const { textEnd, textStart } = phrases;

  document.querySelector('#start-speak').addEventListener('click', () => {
    const isStart = !start.get();
    if (isStart) {
      start.setRecog(true);
      speech.start();
      checkStart('none', true, textEnd);
      checkInput();
    } else {
      start.setRecog(false);
      speech.stop();
      checkStart('auto', false, textStart);
    }
    start.set(isStart);
  });
};
