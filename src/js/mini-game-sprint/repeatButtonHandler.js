import { startSprintGame } from '../pages/sprintGamePage';

export const repeatButtonHandler = () => {
  const repeatBtn = document.getElementById('repeat-btn');
  repeatBtn.onclick = () => {
    console.log('start');
    // startSprintGame(); Надо начать игру по новой
  };
};
