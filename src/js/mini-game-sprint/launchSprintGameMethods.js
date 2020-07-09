import { voiceBtnHandler } from './voiceButtonHandler';
import { countdownTimer } from './countdownTimer';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';
import { choiceBtnSoundtracks } from './choiceBtnSoundtracks';
import { putGlobalStatistics } from './getGlobalStatistics';

export const startSprintGame = () => {
  const newDate = new Date().toLocaleDateString().replace(/^\d|\./g, '');

  const obj = {
    date: newDate,
    answersToday: 888,
    rightAnswers: 777,
    wrongAnswers: 666,
    gameCounter: 2,
  };

  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
  voiceBtnHandler();
  countdownTimer();
  choiceBtnSoundtracks();
  putGlobalStatistics('sprint', obj);
};
