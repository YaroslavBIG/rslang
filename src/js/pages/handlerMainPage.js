import { goToAuthPage, getAvatar } from '../header';
import { actionAuth, saveAuth } from '../utils';

export const handlerMainPage = () => {
  getAvatar();
  document.querySelector('.header__singout').addEventListener('click', () => {
    actionAuth.setAuth(false);
    saveAuth();
    goToAuthPage();
  });
};
