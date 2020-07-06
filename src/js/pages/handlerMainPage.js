import { goToAuthPage, getAvatar } from '../header';
export const handlerMainPage = () => {
  loadAuth();
  if (!actionAuth.getAuth() || actionAuth.getAuth() === 'false') {
    goToAuthPage();
    return;
  }
  const user = loadUser();
  globalUser.set('id', user.id);
  globalUser.set('token', user.token);
  goToAuthPage();
  getAvatar();
};
