import { loadUser } from '../utils';
import { getResponse } from './getResponse';

export const getUserSettings = async () => {
  const user = loadUser();
  const resp = await getResponse(`users/${user.userId}/settings`, {
    method: 'GET',
  });
  return resp;
};
