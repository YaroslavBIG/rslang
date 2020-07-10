import { actionAuth, saveAuth, addError } from '../utils';
import { swaggerUrl, baseHeaders } from './constants';
import { router } from '../router';
import { getResultToken } from './getResultToken';

/**
 * Get Response.
 * Функция работы с сервером, возвращает успешный респонс.
 * @param {string} url Все, что идет после https://afternoon-falls-25894.herokuapp.com/
 * @param {object} { ...options } Обычно method и\или body.
 * @return {object} object Каков запрос - таков ответ, если он нужен.
 * @usage
 * const user = { email: 'email', password: 'pass' };
 * getResponse('users', { method: 'POST', body: JSON.stringify(user) }) =>
 * response { id: 'id', email: 'email' };
 */

export const getResponse = async (url, { ...options }) => {
  const isAuth = actionAuth.getAuth();
  const invalidToken = 401;
  const notFoundUser = 417;

  const resURL = `${swaggerUrl}${url}`;
  const authorization = isAuth === 'true' || isAuth === true ? await getResultToken() : {};
  const withCredential = isAuth === 'true' || isAuth === true ? { withCredentials: true } : {};
  try {
    const response = await fetch(resURL, {
      ...options,
      ...withCredential,
      headers: {
        ...authorization,
        ...baseHeaders,
      },
    });
    if (response && response.status === invalidToken) {
      actionAuth.setAuth(false);
      saveAuth();
      window.location.replace('#/auth');
      router();
    } else if (response.status === notFoundUser) {
      const text = 'Возможно, такой пользователь уже существует';
      addError(text);
    }
    return await response.json();
  } catch (err) {
    return Object.keys(err);
  }
};
