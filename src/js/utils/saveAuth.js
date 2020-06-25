import { actionAuth } from './main';

export const saveAuth = () => {
  const auth = actionAuth.getAuth();
  localStorage.setItem('auth', auth);
};
