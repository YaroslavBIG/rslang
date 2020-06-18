import sprintGameIndex from '../mini-game-sprint/sprintGameIndex';
import voiceBtnHandler from '../mini-game-sprint/voiceButtonHandler';
import countdownTimer from '../mini-game-sprint/countdownTimer';

const startSprintGame = () => {
  window.onload = () => {
    document.body.innerHTML = sprintGameIndex();
    voiceBtnHandler();
    countdownTimer();
  };
};

export default startSprintGame;
