import { voiceBtnHandler } from './voiceButtonHandler';
import { countdownTimer } from './countdownTimer';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';
import { choiceBtnSoundtracks } from './choiceBtnSoundtracks';
import { putGameStatistics } from '../api';

export const startSprintGame = () => {
  const obj = {
    a: 888, // answersToday
    r: 777, // right
    c: 2, // countGame
  };

  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
  voiceBtnHandler();
  countdownTimer();
  choiceBtnSoundtracks();
  putGameStatistics('sprint', obj);
};
