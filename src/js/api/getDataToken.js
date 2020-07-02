import { globalUser } from '../utils';
import { getNewToken } from './getNewToken';

export const getDataToken = () => {
  const { token: tokenRes } = globalUser.get();
  if (tokenRes) {
    const decodedData = JSON.parse(atob(tokenRes.split('.')[1]));
    const dateNow = Date.now();
    const dateDie = (decodedData.exp * 1000) - 1800000;

    if (dateNow > dateDie) {
      return getNewToken();
    }
    return tokenRes;
  }
};
