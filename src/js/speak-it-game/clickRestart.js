import { getAndStart } from './getAndStart';

export const clickRestart = () => {
  document.querySelector('#restart-speak').addEventListener('click', () => {
    document.querySelector('.hints-input').value = '';
    getAndStart();
  });
};
