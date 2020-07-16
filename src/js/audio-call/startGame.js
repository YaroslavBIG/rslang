import { fetchWordsForGame } from './fetchWordsForGame';
import { renderData } from './renderData';

export const startGame = async () => {
  const wordsForGame = await fetchWordsForGame();
  renderData(wordsForGame);
};
