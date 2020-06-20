import { actionAuth, globalUser } from '../../utils/main';
import loginUser from '../../api/loginUser';
import saveAuth from '../../utils/saveAuth';

const logIn = async (res) => {
  const { password: pass, email: em } = globalUser.get();

  if (res) {
    const userInfo = {
      email: em,
      password: pass,
    };
    const success = await loginUser(userInfo);
    if (success) {
      actionAuth.setAuth(true);
      saveAuth();
      return success;
    }
  }
};

export default logIn;
