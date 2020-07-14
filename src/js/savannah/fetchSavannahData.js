import { getWords } from '../api';
import { savannahTaskRendering } from './savannahTaskRendering';
import { wordsBtnHandler } from './wordsBtnHandler';
import { questionAnimation } from './questionAnimation';

export const fetchSavannahData = async (page, group) => {
  const gameData = await getWords(page, group, 10, 4);
  savannahTaskRendering(gameData);
  wordsBtnHandler();
  questionAnimation();
};
