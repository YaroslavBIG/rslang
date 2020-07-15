import { getAndStart } from '../getAndStart';

export const clickContinueWithRepeat = () => {
  document.getElementById('again').addEventListener('click', () => {
    document.getElementById('speak-modal').style.display = 'none';
    getAndStart(false);
  });
};
