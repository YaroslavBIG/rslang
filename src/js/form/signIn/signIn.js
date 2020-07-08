import { logIn } from './login';

export const signIn = async () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="login"]').value;
  const pass = document.querySelector('[name="password-in"]').value;

  const logSuccess = await logIn({ email: login, password: pass });
  if (logSuccess) {
    nextButton.click();
  } else {
    errorBlock.textContent = 'Неверные данные, попробуйте снова';
  }
};
