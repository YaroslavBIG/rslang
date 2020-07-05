import { loadUser } from '../utils';
import { getResponse } from './getResponse';
export const getUserSettings = async () => {
  const user = loadUser();
  return await getResponse(`users/${user.id}/settings`, { method: 'GET' });
};
