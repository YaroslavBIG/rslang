import { globalUser, saveUser } from '../utils';
import { swaggerUrl } from './constants';

export const getNewToken = async () => {
  const { userId: id, refreshToken: refToken } = globalUser.get();
  const resURL = `${swaggerUrl}users/${id}/tokens`;

  const response = await fetch(resURL, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${refToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  globalUser.set('refreshToken', result.refreshToken);
  globalUser.set('token', result.token);
  saveUser();

  return result.token;
};
