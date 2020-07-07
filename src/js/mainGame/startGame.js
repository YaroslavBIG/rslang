import { getWords, getResponse } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { setStorageFromObject, globalUser } from '../utils';

export const startMainGame = async () => {
  window.allUserWords = await getAllUserWords();

  // Temp
  const bodyIcon = {
    wordsPerDay: 100,
    optional: {
      icon: 'iconURL',
      newWordsPerDay: 10,
      maxCardsPerDay: 20,
      soundAutoPlay: true,
      showDeleteBtn: true,
      showStrongBtn: true,
      showAnswerBtn: true,
      cardInfo: {
        translation: true,
        meaning: true,
        example: true,
        transcription: true,
        associationImg: true,
      },
    },
  };
  setStorageFromObject(bodyIcon, 'local');

  // temp
  const user = globalUser.get();
  console.log(user.id);
  console.log(await getAllUserWords());
  const filterUser = {
    userId: user.id,
    group: 0,
    wordsPerPage: 10,
    filter: { $or: [{ 'userWord.difficulty': 'good' }, { userWord: null }] },
  };
  const body = JSON.stringify(filterUser);
  console.log(await getResponse(`/users/${user.id}/aggregatedWords`, { method: 'GET', body }));
  // Temp
  const gameData = await getWords(0, 0, 10, 5);
  gameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
