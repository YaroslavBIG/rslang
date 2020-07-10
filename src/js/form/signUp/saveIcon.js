import { icon } from './chooseIcon';
import { getResponse } from '../../api';

export const saveIcon = async (resResp) => {
  const authMess = 'Authenticated';

  const bodyIcon = {
    wordsPerDay: 50,
    optional: {
      icon: icon.iconURL,
    },
  };

  if (resResp.message === authMess) {
    const content = await getResponse(`users/${resResp.userId}/settings`, {
      method: 'PUT',
      body: JSON.stringify(bodyIcon),
    });
    if (content) {
      return true;
    }
  }
};
