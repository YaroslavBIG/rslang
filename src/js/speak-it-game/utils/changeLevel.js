import { getAndStart } from '../getAndStart';

export const changeLevel = () => {
  document.querySelector('#level').addEventListener('change', () => {
    getAndStart(true);
  });
  document.querySelector('#round').addEventListener('change', () => {
    getAndStart(true);
  });
};
