import { actionAuth } from './main';

export const loadAuth = () => {
  const resAuth = localStorage.getItem('auth');
  actionAuth.setAuth(resAuth);
};
