import { actionAuth, globalUser, saveAuth } from '../../utils';
import { loginUser } from '../../api';

export const logIn = async (res) => {
  const { password: pass, email: em } = globalUser.get();

  if (res) {
    const userInfo = {
      email: em,
      password: pass,
    };
    const loginSuccess = await loginUser(userInfo);
    if (loginSuccess) {
      actionAuth.setAuth(true);
      saveAuth();
      return loginSuccess;
    }
  }
};
