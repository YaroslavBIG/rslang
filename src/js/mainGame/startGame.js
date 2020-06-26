import { getWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';

export const startMainGame = async () => {
  const gameData = await getWords();
  gameContent(gameData);
  progressBar(0, 0);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
};
