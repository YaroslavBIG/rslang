import { loadAuth } from './loadAuth';
import { loadUser } from './loadUser';
import { globalUser } from './main';
import { createSignInUpPage } from '../pages';
import { controlButton } from '../form';

export const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
  document.querySelector('body').innerHTML = createSignInUpPage();
  controlButton();
};
