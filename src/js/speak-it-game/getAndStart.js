import { startSpeakGame } from './startSpeakGame';
import { checkStart } from './checkStart';
import { recognition } from './utils/recognition';
import { phrases } from './utils/constants';

export const getAndStart = (repeatWithout) => {
  const { textStart } = phrases;
  recognition(false);
  checkStart('auto', false, textStart);
  const group = document.querySelector('#level').options.selectedIndex;
  const page = document.querySelector('#round').options.selectedIndex;
  startSpeakGame(page, group, repeatWithout);
};
