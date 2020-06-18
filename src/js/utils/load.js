import createSignInUpPage from '../pages/createSignInUpPage';
import loadAuth from './loadAuth';
import loadUser from './loadUser';
import submitForm from '../form/submitForm';
import { globalUser } from './main';

const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
  document.querySelector('body').innerHTML = createSignInUpPage();
  submitForm();
  // router();
};

export default load;
