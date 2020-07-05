import { loadUser } from '../utils';
import { getResponse } from './getResponse';

export const pushUserSettings = async (settings) => {
  const user = loadUser();
  const resp = await getResponse(`users/${user.id}/settings`, {
    method: 'PUT',
    body: JSON.stringify(settings),
  });
  return resp;
};
