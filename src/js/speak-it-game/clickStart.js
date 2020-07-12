import { checkInput } from './checkInput';
import { checkStart } from './checkStart';
import { recognition } from './recognition';
import { start } from './constants';

export const clickStart = async () => {
  let isStart = start.get();

  document.querySelector('#start-speak').onclick = () => {
    isStart = !isStart;
    start.set(isStart);
    if (isStart) {
      const speak = 'Закончить говорить';
      checkStart('none', true, speak);
      recognition();
      checkInput();
    } else {
      const speak = 'Начать говорить';
      checkStart('auto', false, speak);
      recognition();
    }
  };
};
