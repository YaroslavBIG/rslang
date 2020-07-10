import { getWords, getNewWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { getMixWords } from '../api/words/getMixWords';
import { getGameWords } from './getGameWords';

export const startMainGame = async () => {
  const allUserWords = JSON.stringify(await getAllUserWords());
  console.log('getMixWords', await getMixWords());
  console.log('gm', await getGameWords());
  console.log(allUserWords);

  console.log('words', await getNewWords(12));
  // Temp
  sessionStorage.setItem('allUserWords', allUserWords);

  const gameData = await getWords(0, 0, 10, 5);
  console.log('gameData', gameData);
  gameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
