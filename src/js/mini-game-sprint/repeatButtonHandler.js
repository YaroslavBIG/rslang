import { startSprintGame } from './launchSprintGameMethods';
import { createSprintGamePage } from '../pages';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  if (repeatBtn) {
    repeatBtn.onclick = () => {
      const root = document.querySelector('.main');
      root.innerHTML = createSprintGamePage();
      startSprintGame();
    };
  }
};
