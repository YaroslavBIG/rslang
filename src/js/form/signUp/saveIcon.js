import { icon } from './chooseIcon';
import getResponse from '../../api/getResponse';

const saveIcon = async (resResp) => {
  const authMess = 'Authenticated';
  const success = true;

  const bodyIcon = {
    wordsPerDay: 50,
    optional: {
      icon: icon.iconURL,
    },
  };
  const json = JSON.stringify(bodyIcon);

  if (resResp.message === authMess) {
    const content = await getResponse(`users/${resResp.userId}/settings`, { method: 'PUT', body: json });
    if (content) {
      return success;
    }
  }
};

export default saveIcon;
