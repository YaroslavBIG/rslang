import { getResponse } from './getResponse';
import { saveUser, globalUser } from '../utils';

export const loginUser = async (user) => {
  const content = await getResponse('signin', { method: 'POST', body: JSON.stringify(user) });

  if (content) {
    globalUser.set('token', content.token);
    globalUser.set('refreshToken', content.refreshToken);
    globalUser.set('userId', content.userId);
    saveUser();
    return content;
  }
};
