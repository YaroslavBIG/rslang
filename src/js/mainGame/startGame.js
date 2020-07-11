import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { getGameWords } from './getGameWords';
import { globalUser } from '../utils';

export const startMainGame = async () => {
  const allUserWords = JSON.stringify(await getAllUserWords());

  sessionStorage.setItem('allUserWords', allUserWords);

  const gameData = await getGameWords();
  gameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners();
  localStorage.setItem('lastUserId', globalUser.get().userId);
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
