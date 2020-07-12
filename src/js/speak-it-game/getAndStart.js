import { startSpeakGame } from './startSpeakGame';
import { checkStart } from './checkStart';
import { recognition } from './recognition';

export const getAndStart = (repeatWithout) => {
  recognition(false);
  const text = 'Начать говорить';
  checkStart('auto', false, text);
  const page = document.querySelector('#level').options.selectedIndex;
  const group = document.querySelector('#round').options.selectedIndex;
  startSpeakGame(page, group, repeatWithout);
};
