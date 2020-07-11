import { getAndStart } from './getAndStart';

export const clickContinueWithoutRepeat = () => {
  document.getElementById('next').addEventListener('click', () => {
    document.getElementById('speak-modal').style.display = 'none';
    getAndStart();
  });
};
