import { globalUser } from '../../utils/main';
import createUser from '../../api/createUser';
import { icon } from './chooseIcon';

const signUp = () => {
  const nextButton = document.querySelector('.click-reload');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="email"]').value;
  const password = document.querySelector('[name="password-up"]').value;
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;

  if (reg.test(password)) {
    const user = { email: login, password: password };

    globalUser.set('email', login);
    globalUser.set('password', password);
    globalUser.set('iconURL', icon.iconURL);

    createUser(user);
    nextButton.click();
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
