import { loadAuth } from './loadAuth';
import { loadUser } from './loadUser';
import { globalUser } from './main';
import { checkLifeToken } from './checkLifeToken';

export const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
  checkLifeToken();
};
