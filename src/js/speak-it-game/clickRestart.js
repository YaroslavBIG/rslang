import { checkStart } from './checkStart';
import { start } from './constants';

export const clickRestart = () => {
  document.querySelector('#restart-speak').onclick = () => {
    if (start.get()) {
      document.querySelector('.hints-input').value = '';
      const text = 'Закончить говорить';
      checkStart('none', true, text);
    }
  };
};
