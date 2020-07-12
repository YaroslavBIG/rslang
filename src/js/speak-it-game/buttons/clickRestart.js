import { checkStart } from '../checkStart';
import { start, textEnd } from '../utils/constants';

export const clickRestart = () => {
  document.querySelector('#restart-speak').onclick = () => {
    if (start.get()) {
      document.querySelector('.hints-input').value = '';
      checkStart('none', true, textEnd);
    }
  };
};
