import { startSprintGame } from './launchSprintGameMethods';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  repeatBtn.onclick = () => {
    startSprintGame();
  };
};
