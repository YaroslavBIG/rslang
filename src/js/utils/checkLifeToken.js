import { globalUser, actionAuth } from './main';
import { saveAuth } from './saveAuth';

export const checkLifeToken = () => {
  const { token } = globalUser.get();
  if (token) {
    const decodedData = JSON.parse(atob(token.split('.')[1]));
    const dateNow = Date.now();
    const dateDie = decodedData.exp * 1000;
    if (dateNow > dateDie) {
      actionAuth.setAuth(false);
      saveAuth();
    }
  }
};
