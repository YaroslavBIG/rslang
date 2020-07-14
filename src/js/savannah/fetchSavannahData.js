import { getWords } from '../api';
import { savannahTaskRendering } from './savannahTaskRendering';
import { wordsBtnHandler } from './wordsBtnHandler';

export const fetchSavannahData = async (page, group) => {
  const gameData = await getWords(page, group, 10, 4);
  console.log(gameData);
  savannahTaskRendering(gameData);
  wordsBtnHandler();
};
