import { getWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';

export const startMainGame = async () => {
  const gameData = await getWords(0, 0, 10, 2);
  gameContent(gameData);
  const allWordsCount = JSON.parse(sessionStorage.getItem('apiWords')).length;
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
