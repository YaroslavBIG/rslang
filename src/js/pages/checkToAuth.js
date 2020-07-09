import { actionAuth } from '../utils';

export const checkToAuth = (path) => {
  const isAuth = actionAuth.getAuth();

  if ((isAuth === 'true' || isAuth === true) && path === '/auth') {
    document.querySelector('.click-enter').click();
  }
};
