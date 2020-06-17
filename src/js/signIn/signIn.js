import { globalUser, actionAuth } from "../utils/main";
import loginUser from "../api/loginUser";
import saveAuth from "../utils/saveAuth";

const signIn = () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');

  const login = document.querySelector('[name="login"]').value;
  const password = document.querySelector('[name="password-in"]').value;

  const existUser = (globalUser.email === login);
  if (existUser) {
    if (globalUser.password === password) {
      const user = {email: login, password: password};

      loginUser(user, globalUser);

      actionAuth.setAuth(true);
      saveAuth();

      nextButton.click();
    }
    else {
      errorBlock.textContent = 'Invalid password. Try again';
    }
  }
  else {
    errorBlock.textContent = "The user doesn't exist";
  }
}

export default signIn;
