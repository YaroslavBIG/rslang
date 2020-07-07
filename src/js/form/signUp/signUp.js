import { globalUser } from '../../utils';
import { createUser } from '../../api';
import { saveSettings } from './saveSettings';
import { logIn } from '../signIn/login';

export const signUp = async () => {
  const errorBlock = document.querySelector('.error-block-up');
  const nextButton = document.querySelector('.click-enter');

  const login = document.querySelector('[name="email"]').value;
  const pass = document.querySelector('[name="password-up"]').value;
  const nameUser = document.querySelector('[name="name"]').value;
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;

  if (reg.test(pass)) {
    const user = { name: nameUser, email: login, password: pass };

    globalUser.set('name', nameUser);
    globalUser.set('email', login);
    globalUser.set('password', pass);

    const createSuccess = await createUser(user);
    if (createSuccess) {
      document.querySelector('.error-block-up').innerHTML = '';
      document.querySelector('.start-enter__inner').style = 'height: 500px';
    }
    const logSuccess = await logIn(createSuccess);
    const settingsSuccess = await saveSettings(logSuccess);

    if (settingsSuccess) {
      alert('Успешная регистрация!');
      nextButton.click();
    }
  } else {
    errorBlock.innerHTML = 'неверный пароль!';
  }
};
