import { getAndStart } from './getAndStart';
import { recognition } from './recognition';

export const clickRestart = () => {
  document.querySelector('#restart-speak').addEventListener('click', () => {
    document.querySelector('.hints-input').value = '';
    recognition(false);
    getAndStart();
  });
};
