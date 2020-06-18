import createSignInUpPage from '../pages/createSignInUpPage';
import loadAuth from './loadAuth';
import loadUser from './loadUser';
import submitForm from '../form/submitForm';
import { globalUser } from './main';
import controlForm from '../form/controlForm';
import { chooseIcon } from '../form/signUp/chooseIcon';

const load = () => {
  loadAuth();
  globalUser.setFullUser(loadUser());
  document.querySelector('body').innerHTML = createSignInUpPage();
  submitForm();
  controlForm();
  chooseIcon();
  console.log(globalUser.get());
  // router();
};

export default load;
