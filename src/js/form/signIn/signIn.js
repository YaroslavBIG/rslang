import { logIn } from './login';
import { getUserSettings } from '../../api';
import { setStorageFromObject } from '../../utils';

export const signIn = async () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="login"]').value;
  const pass = document.querySelector('[name="password-in"]').value;

  const logSuccess = await logIn({ email: login, password: pass });
  if (logSuccess) {
    const userSettings = await getUserSettings();
    setStorageFromObject(userSettings, 'local');
    nextButton.click();
  } else {
    errorBlock.textContent = 'Неверные данные, попробуйте снова';
  }
};
