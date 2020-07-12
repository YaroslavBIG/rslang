import { getAndStart } from './getAndStart';
import { recognition } from './recognition';
import { start } from './constants';

export const changeLevel = () => {
  let isStart = start.get();
  document.querySelector('#level').addEventListener('change', () => {
    isStart = isStart ? !isStart : isStart;
    start.set(isStart);
    recognition();
    getAndStart();
  });
  document.querySelector('#round').addEventListener('change', () => {
    isStart = isStart ? !isStart : isStart;
    start.set(isStart);
    recognition();
    getAndStart();
  });
};
