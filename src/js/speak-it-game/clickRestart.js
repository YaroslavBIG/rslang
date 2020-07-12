import { recognition } from './recognition';
import { start } from './constants';
import { checkStart } from './checkStart';

export const clickRestart = () => {
  let isStart = start.get();
  document.querySelector('#restart-speak').addEventListener('click', () => {
    document.querySelector('.hints-input').value = '';
    if (!isStart) {
      isStart = !isStart;
      start.set(isStart);
      recognition();
    }
    const text = 'Начать говорить';
    checkStart('auto', false, text);
  });
};
