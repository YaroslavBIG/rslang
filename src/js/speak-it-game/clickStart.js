import { checkInput } from './checkInput';
import { checkStart } from './checkStart';
import { recognition } from './recognition';
import { start } from './constants';

export const clickStart = async () => {
  let isStart = start.get();

  document.querySelector('#start-speak').addEventListener('click', () => {
    isStart = !start.get();
    if (isStart) {
      const speak = 'Закончить говорить';
      checkStart('none', true, speak);
      recognition();
      start.set(true);
      checkInput();
    } else {
      const speak = 'Начать говорить';
      checkStart('auto', false, speak);
      start.set(false);
      recognition();
    }
    start.set(isStart);
  });
};
