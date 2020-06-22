import { actionAuth, globalUser } from '../utils';
import { swaggerUrl } from './constants';

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
  const { token: tokenRes } = globalUser.get();
  const invalidToken = 401;

  const resURL = `${swaggerUrl}${url}`;
  const authorization = (isAuth === 'true' || isAuth === true) ? { Authorization: `Bearer ${tokenRes}` } : {};
  const withCredential = (isAuth === 'true' || isAuth === true) ? { withCredentials: true } : {};

  const baseHeaders = {
    ...authorization,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(resURL, {
      ...options,
      ...withCredential,
      headers: {
        ...baseHeaders,
      },
    });
    if (response && response.status === invalidToken) {
      actionAuth.setAuth(false);
    }
    return await response.json();
  } catch (err) {
    return Object.keys(err);
  }
};
