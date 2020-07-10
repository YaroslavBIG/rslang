import { getResponse } from './getResponse';
import { saveUser, globalUser } from '../utils';

export const createUser = async (user) => {
  const content = await getResponse('users', {
    method: 'POST',
    body: JSON.stringify(user),
  });

  if (content) {
    globalUser.set('id', content.id);
    saveUser();
    return { email: content.email, password: user.password };
  }
};
