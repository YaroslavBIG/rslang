import { getWords } from '../api/index';
import { randomInteger } from '../utils/index';
import { taskRendering } from './taskRendering';
import { constantsData } from './constants';

export const fetchSprintGameData = async (page, group) => {
  const gameData = await getWords(page, group, 10, 2);
  const wordsArray = gameData.map((dataElement) => dataElement.word);
  const translateWordsArray = gameData.map((dataElement) => dataElement.wordTranslate);
  const randomWordId = randomInteger(0, 1);
  const randomTranslateId = randomInteger(0, 1);
  const randomWord = wordsArray[randomWordId];
  const randomTranslate = translateWordsArray[randomTranslateId];
  const audio = document.getElementById('audio');
  audio.setAttribute(
    'src',
    `${constantsData.backendUrl}${gameData[randomWordId].audio}`,
  );

  const voiceOffBtn = document.getElementById('voice-off');
  if (!voiceOffBtn.classList.contains('inactive')) {
    audio.autoplay = true;
  }

  taskRendering(randomWord, randomTranslate, randomWordId, randomTranslateId);
};
