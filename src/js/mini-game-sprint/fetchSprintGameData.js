import { getWords } from '../api/index';
import { randomInteger } from '../utils/index';
import taskRendering from './taskRendering';

const fetchSprintGameData = async (page, group) => {
  const gameData = await getWords(page, group, 10, 2);
  const wordsArray = gameData.map((dataElement) => dataElement.word);
  const translateWordsArray = gameData.map((dataElement) => dataElement.wordTranslate);
  const randomWordId = randomInteger(0, 1);
  const randomTranslateId = randomInteger(0, 1);
  const randomWord = wordsArray[randomWordId];
  const randomTranslate = translateWordsArray[randomTranslateId];

  taskRendering(randomWord, randomTranslate, randomWordId, randomTranslateId);
};

export default fetchSprintGameData;
