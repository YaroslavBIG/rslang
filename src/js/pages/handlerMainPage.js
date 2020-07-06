import { goToAuthPage, getAvatar } from '../header';
import {
  globalUser, actionAuth, loadAuth, loadUser,
} from '../utils';

export const handlerMainPage = () => {
  loadAuth();
  if (!actionAuth.getAuth() || actionAuth.getAuth() === 'false') {
    goToAuthPage();
    return;
  }
  const user = loadUser();
  globalUser.set('id', user.id);
  globalUser.set('token', user.token);
  getAvatar();
  document.querySelector('.header__singout').addEventListener('click', () => {
    actionAuth.setAuth(false);
    saveAuth();
    goToAuthPage();
  });
};
