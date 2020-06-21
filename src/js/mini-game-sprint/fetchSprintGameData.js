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
  const audioSrc = document.getElementById('source');
  audioSrc.setAttribute(
    'src',
    `${constantsData.backendUrl}${gameData[randomWordId].audio}`,
  );

  const voiceOffBtn = document.getElementById('voice-off');
  const taskContainer = document.getElementById('task-container');
  if (!voiceOffBtn.classList.contains('inactive')) {
    const timer = document.getElementById('timer');
    if (timer.innerHTML < 60 && timer.innerHTML >= 0) {
      taskContainer.children[1].play();
      console.log('play');
    }
  }

  taskRendering(randomWord, randomTranslate, randomWordId, randomTranslateId);
};
