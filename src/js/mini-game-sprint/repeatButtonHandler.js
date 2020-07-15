import { startSprintGame } from './launchSprintGameMethods';
import { createSprintGamePage } from '../pages';
import { constantsData } from './constants';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  if (repeatBtn) {
    repeatBtn.onclick = () => {
      const root = document.querySelector('.main');
      constantsData.correctAnswersCounter = 0;
      constantsData.wrongAnswersCounter = 0;
      root.innerHTML = createSprintGamePage();
      startSprintGame();
    };
  }
};
