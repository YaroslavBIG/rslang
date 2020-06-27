import { getWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';

export const startMainGame = async () => {
  const gameData = await getWords();
  gameContent(gameData);
  const allWordsCount = JSON.parse(sessionStorage.getItem('apiWords')).length;
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
};
