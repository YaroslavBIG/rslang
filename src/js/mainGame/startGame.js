import { getWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';

export const startMainGame = async () => {
  window.allUserWords = await getAllUserWords();
  const gameData = await getWords(0, 0, 10, 2);
  gameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
