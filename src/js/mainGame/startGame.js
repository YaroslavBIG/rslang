import { getWords } from '../api';
import { mainGameRender, progressBar, gameContent } from '.';

export const startMainGame = async () => {
  document.querySelector('#root').innerHTML = mainGameRender();
  const gameData = await getWords();
  gameContent(gameData);
  progressBar(10, 50);
  document.querySelector('.sentence--target-word').focus();
};
