import { goToAuthPage, getAvatar } from '../header';
import { globalUser, actionAuth, loadAuth, loadUser, saveAuth } from '../utils';

export const handlerMainPage = () => {
  getAvatar();
  document.querySelector('.header__singout').addEventListener('click', () => {
    actionAuth.setAuth(false);
    saveAuth();
    goToAuthPage();
  });
};
