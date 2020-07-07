import { getWords } from '../api';
import { gameContent } from './gameContent';
import { progressBar } from './progressBar';
import { addMainGameListners } from './eventListners';
import { setStatistic, setAnswers } from './statistic/setStatistic';
import { getAllUserWords } from '../api/words/getAllUserWords';
import { agregatedWords } from '../api/words/agregatedWords';
import { globalUser, setStorageFromObject } from '../utils';

export const startMainGame = async () => {
  window.allUserWords = await getAllUserWords();

  // Temp
  const bodyIcon = {
    wordsPerDay: 50,
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
        meaning: false,
        example: false,
        transcription: true,
        associationImg: true,
      },
    },
  };
  setStorageFromObject(bodyIcon, 'local');

  // const filterUser = {
  //   userId: globalUser.id,
  //   filter: {
  //     $or: [
  //       { 'userWord.difficulty': 'good' },
  //       { 'userWord.difficulty.optional': { date: '07.07.2020' } },
  //     ],
  //   },
  // };
  // console.log(await agregatedWords(JSON.stringify(filterUser)));
  // temp

  const gameData = await getWords(0, 0, 10, 2);
  gameContent(gameData);
  const allWordsCount = sessionStorage.getItem('collectionLen');
  progressBar(0, allWordsCount);
  addMainGameListners();
  document.querySelector('.sentence--target-word').focus();
  setStatistic('clear');
  setAnswers('clear');
};
