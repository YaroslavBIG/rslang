import { startSprintGame } from './launchSprintGameMethods';
import { createSprintGamePage } from '../pages/createSprintGamePage';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  repeatBtn.onclick = () => {
    const root = document.querySelector('.main');
    root.innerHTML = createSprintGamePage();
    startSprintGame();
  };
};
