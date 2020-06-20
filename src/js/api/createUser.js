import getResponse from './getResponse';
import saveUser from '../utils/saveUser';
import { globalUser } from '../utils/main';

const createUser = async (user) => {
  const success = true;
  const parse = JSON.stringify(user);
  const content = await getResponse('users', { method: 'POST', body: parse });

  if (content) {
    globalUser.set('id', content.id);
    saveUser();
    return success;
  }
};

export default createUser;
