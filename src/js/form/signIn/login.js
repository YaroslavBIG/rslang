import { actionAuth, globalUser } from '../../utils/main';
import loginUser from '../../api/loginUser';
import saveAuth from '../../utils/saveAuth';

const logIn = async (user) => {
  const pass = globalUser.get().password;
  const getUserInfo = {
    email: user.email,
    password: pass,
  };
  const success = await loginUser(getUserInfo);

  if (success) {
    actionAuth.setAuth(true);
    saveAuth();
    return success;
  }
};

export default logIn;
