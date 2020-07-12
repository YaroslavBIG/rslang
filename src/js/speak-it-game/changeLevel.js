import { getAndStart } from './getAndStart';

export const changeLevel = () => {
  document.querySelector('#level').addEventListener('change', () => {
    getAndStart(false);
  });
  document.querySelector('#round').addEventListener('change', () => {
    getAndStart(false);
  });
};
