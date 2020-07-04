import { icon } from './chooseIcon';
import { getResponse } from '../../api';

export const saveSettings = async (resResp) => {
  const authMess = 'Authenticated';

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
      cardInfo: {
        translation: true,
        meaning: true,
        example: true,
        transcription: false,
        associationImg: false,
      },
    },
  };

  if (resResp.message === authMess) {
    const content = await getResponse(`users/${resResp.userId}/settings`, { method: 'PUT', body: JSON.stringify(bodySettings) });
    if (content) {
      return true;
    }
  }
};
