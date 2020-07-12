import { getAndStart } from '../getAndStart';
import { recognition } from '../utils/recognition';

export const clickContinueWithoutRepeat = () => {
  document.getElementById('next').addEventListener('click', () => {
    document.getElementById('speak-modal').style.display = 'none';
    recognition(false);
    getAndStart(true);
  });
};
