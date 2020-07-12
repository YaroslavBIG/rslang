import { recognition } from './recognition';
import { getAndStart } from './getAndStart';

export const clickContinueWithRepeat = () => {
  document.getElementById('again').addEventListener('click', () => {
    document.getElementById('speak-modal').style.display = 'none';
    recognition(false);
    getAndStart(false);
  });
};
