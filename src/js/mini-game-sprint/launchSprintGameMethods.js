import { voiceBtnHandler } from './voiceButtonHandler';
import { countdownTimer } from './countdownTimer';
import { fetchSprintGameData } from './fetchSprintGameData';
import { randomInteger } from '../utils';
import { choiceBtnSoundtracks } from './choiceBtnSoundtracks';
import { preloader } from './preloader';
import { dictionaryCheck } from './dictionaryCheck';
import { constantsData } from './constants';

export const startSprintGame = async () => {
  if (!constantsData.dictionaryCheck) {
    preloader();
    await dictionaryCheck();
  }
  await fetchSprintGameData(constantsData.enough, randomInteger(0, 59), randomInteger(0, 5));
  voiceBtnHandler();
  countdownTimer();
  choiceBtnSoundtracks();
};
