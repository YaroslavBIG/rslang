import { loadAuth } from './loadAuth';
import { loadUser } from './loadUser';
import { globalUser } from './main';

export const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
};
