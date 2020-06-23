import { globalUser } from './main';

export const saveUser = () => {
  const user = globalUser.get();
  const json = JSON.stringify(user);
  localStorage.setItem('user', json);
};
