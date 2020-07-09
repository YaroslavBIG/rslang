import { checkInput } from './checkInput';
import { checkStart } from './checkStart';

export const clickStart = async () => {
  let isStart = false;

  document.querySelector('#start-speak').onclick = () => {
    isStart = !isStart;
    if (isStart) {
      const speak = 'Закончить говорить';
      checkStart('none', true, speak);
      checkInput();
    } else {
      const speak = 'Начать говорить';
      checkStart('auto', false, speak);
    }
  };
};
