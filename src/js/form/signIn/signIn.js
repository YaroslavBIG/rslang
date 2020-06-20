import { globalUser } from '../../utils/main';
import logIn from './login';

const signIn = () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="login"]').value;
  const pass = document.querySelector('[name="password-in"]').value;

  const { email: em, password: userPass } = globalUser.get();

  if (em === login) {
    if (userPass === pass) {
      const success = true;
      logIn(success);
      nextButton.click();
    } else {
      errorBlock.textContent = 'Неверный пароль, попробуйте снова';
    }
  } else {
    errorBlock.textContent = 'Пользователь не существует';
  }
};

export default signIn;
