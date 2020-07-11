import { getAndStart } from './getAndStart';
import { recognition } from './recognition';

export const changeLevel = () => {
  document.querySelector('#level').addEventListener('change', () => {
    recognition(false);
    getAndStart();
  });
  document.querySelector('#round').addEventListener('change', () => {
    recognition(false);
    getAndStart();
  });
};
