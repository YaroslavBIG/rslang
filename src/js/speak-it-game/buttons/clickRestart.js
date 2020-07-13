import { checkStart } from '../checkStart';
import { start, phrases } from '../utils/constants';

export const clickRestart = () => {
  const { textEnd } = phrases;
  document.querySelector('#restart-speak').onclick = () => {
    if (start.get()) {
      document.querySelector('.hints-input').value = '';
      checkStart('none', true, textEnd);
    }
  };
};
