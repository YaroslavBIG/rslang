import { getWords } from '../api';
import { mainGameRender } from './mainGameRender';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';

export const startMainGame = async () => {
  document.querySelector('#root').innerHTML = mainGameRender();
  const gameData = await getWords();
  gameContent(gameData);
  progressBar(0, 0);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
};
