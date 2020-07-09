import { icon } from './chooseIcon';
import { getResponse } from '../../api';
import { setStorageFromObject, globalUser } from '../../utils';

export const saveSettings = async (resResp) => {
  const { userId } = globalUser.get();

  const bodySettings = {
    wordsPerDay: 50,
    optional: {
      icon: icon.iconURL,
      newWordsPerDay: 10,
      maxCardsPerDay: 10,
      soundAutoPlay: true,
      showDeleteBtn: true,
      showStrongBtn: true,
      showAnswerBtn: true,
      onlyNewWords: true,
      cardInfo: {
        translation: true,
        meaning: true,
        example: true,
        transcription: true,
        associationImg: true,
      },
    },
  };

  const bodyStatistics = {
    learnedWords: 0,
    optional: {
      games: {
        main: [],
        intervals: [],
        sprint: [],
        speakit: [],
        constructor: [],
        puzzle: [],
        savannah: [],
        audition: [],
      },
    },
  };
  if (resResp) {
    setStorageFromObject(bodySettings, 'local');
    const content = await getResponse(`users/${userId}/settings`, { method: 'PUT', body: JSON.stringify(bodySettings) });
    const statContent = await getResponse(`users/${userId}/statistics`, { method: 'PUT', body: JSON.stringify(bodyStatistics) });

    const res = Promise.all([content, statContent]).then(() => true);
    if (res) {
      return true;
    }
  }
};
