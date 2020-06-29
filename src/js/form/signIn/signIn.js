import { globalUser } from '../../utils';
import { logIn } from './login';

export const signIn = () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="login"]').value;
  const pass = document.querySelector('[name="password-in"]').value;

  const { email: em, password: userPass } = globalUser.get();
  const success = true;

  if (em === login) {
    if (userPass === pass) {
      logIn(success);
      nextButton.click();
    } else {
      errorBlock.textContent = 'Неверный пароль, попробуйте снова';
    }
  } else {
    errorBlock.textContent = 'Пользователь не существует';
  }
};
