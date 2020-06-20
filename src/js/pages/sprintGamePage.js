import sprintGameIndex from '../mini-game-sprint/sprintGameIndex';
import voiceBtnHandler from '../mini-game-sprint/voiceButtonHandler';
import countdownTimer from '../mini-game-sprint/countdownTimer';
import fetchSprintGameData from '../mini-game-sprint/fetchSprintGameData';
import { randomInteger } from '../utils/index';

const startSprintGame = () => {
  window.onload = () => {
    document.body.innerHTML = sprintGameIndex();
    fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
    voiceBtnHandler();
    countdownTimer();
  };
};

export default startSprintGame;
