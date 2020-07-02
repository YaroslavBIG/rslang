import { globalUser } from '../utils';
import { swaggerUrl } from './constants';

export const getNewToken = async () => {
  const { userId: id, refreshToken: refToken } = globalUser.get();
  const resURL = `${swaggerUrl}users/${id}/tokens`;

  try {
    const response = await fetch(resURL, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${refToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (err) {
    return Object.keys(err);
  }
};
