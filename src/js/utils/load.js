import { createSignInUpPage } from '../pages';
import { loadAuth } from './loadAuth';
import { loadUser } from './loadUser';
import { submitForm, controlForm, chooseIcon } from '../form';
import { globalUser } from './main';

export const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
  document.querySelector('body').innerHTML = createSignInUpPage();
  submitForm();
  controlForm();
  chooseIcon();
  console.log(globalUser.get());
  // router();
};
