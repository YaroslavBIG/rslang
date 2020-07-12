import { intervalGameContent } from './interval/intervalGameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { getGameWords } from './getGameWords';
import { globalUser } from '../utils';
import { getWordsLernedToday } from './statistic/getWordsLernedToday';

export const startIntervalGame = async () => {
  const allUserWords = JSON.stringify(await getAllUserWords());

  sessionStorage.setItem('allUserWords', allUserWords);

  const gameData = await getGameWords();
  intervalGameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners('intervals');
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
  localStorage.setItem('lastUserId', globalUser.get().userId);
  await getWordsLernedToday();
};
