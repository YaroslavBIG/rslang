import { getWords } from '../api/index';
import { randomInteger } from '../utils/index';
import { taskRendering } from './taskRendering';
import { constantsData } from './constants';
import { fetchUserWords } from './fetchUserWords';
import { getTwoWords } from './getTwoWords';

export const fetchSprintGameData = async (enough, page, group) => {
  let gameData;
  if (enough) {
    gameData = (sessionStorage.getItem('userWords'))
      ? getTwoWords(JSON.parse(sessionStorage.getItem('userWords')))
      : getTwoWords(await fetchUserWords());
  } else {
    gameData = await getWords(page, group, 10, 2);
  }
  if (gameData) {
    const wordsArray = gameData.map((dataElement) => dataElement.word);
    const translateWordsArray = gameData.map((dataElement) => dataElement.wordTranslate);
    const randomWordId = randomInteger(0, 1);
    const randomTranslateId = randomInteger(0, 1);
    const randomWord = wordsArray[randomWordId];
    const randomTranslate = translateWordsArray[randomTranslateId];
    const audio = document.getElementById('audio');
    if (audio) {
      audio.setAttribute(
        'src',
        `${constantsData.backendUrl}${gameData[randomWordId].audio}`,
      );
    }

    const voiceOffBtn = document.getElementById('voice-off');
    audio.autoplay = !voiceOffBtn.classList.contains('inactive');

    taskRendering(randomWord, randomTranslate, randomWordId, randomTranslateId);
  }
};
