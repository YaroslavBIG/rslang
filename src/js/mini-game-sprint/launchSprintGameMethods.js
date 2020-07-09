import { voiceBtnHandler } from './voiceButtonHandler';
import { countdownTimer } from './countdownTimer';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';
import { choiceBtnSoundtracks } from './choiceBtnSoundtracks';

export const startSprintGame = () => {
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
  voiceBtnHandler();
  countdownTimer();
  choiceBtnSoundtracks();
};
