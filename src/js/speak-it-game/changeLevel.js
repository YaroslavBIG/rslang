import { startSpeakGame } from './startSpeakGame';

export const changeLevel = () => {
  document.querySelector('select').addEventListener('change', () => {
    const page = document.querySelector('select').options.selectedIndex;
    startSpeakGame(page, 0, 10);
  });
};
