import { actionAuth, saveAuth } from '../../utils';
import { loginUser } from '../../api';

export const logIn = async (res) => {
  const authMess = 'Authenticated';
  if (res) {
    const loginSuccess = await loginUser(res);
    if (loginSuccess.message === authMess) {
      actionAuth.setAuth(true);
      saveAuth();
      return true;
    }
  }
};
