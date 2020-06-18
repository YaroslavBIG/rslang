import { globalUser } from '../../utils/main';
import createUser from '../../api/createUser';
import { icon } from './chooseIcon';

const signUp = () => {
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="email"]').value;
  const pass = document.querySelector('[name="password-up"]').value;
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;

  if (reg.test(pass)) {
    const user = { email: login, password: pass };

    globalUser.set('email', login);
    globalUser.set('password', pass);
    globalUser.set('iconURL', icon.iconURL);

    const success = createUser(user);
    if (success) {
      alert('Now you can sign in');
      window.location.reload();
    }
  } else {
    errorBlock.innerHTML = `
      <p> Password must be minimum: </p>
      <p>- 8 symbols; </p>
      <p>- one uppercase letter;</p>
      <p>- one lowercase letter;</p>
      <p>- one digital;</p>
      <p>- one special symbol;</p>
    `;
  }
};

export default signUp;
