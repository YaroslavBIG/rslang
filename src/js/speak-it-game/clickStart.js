import { checkInput } from './checkInput';
import { checkStart } from './checkStart';
import { recognition } from './recognition';

export const clickStart = async () => {
  let isStart = false;

  document.querySelector('#start-speak').onclick = () => {
    isStart = !isStart;
    if (isStart) {
      const speak = 'Закончить говорить';
      checkStart('none', true, speak);
      recognition(true);
      checkInput();
    } else {
      const speak = 'Начать говорить';
      checkStart('auto', false, speak);
      recognition(false);
    }
  };
};
