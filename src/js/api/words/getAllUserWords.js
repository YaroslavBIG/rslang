import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

/**
 * All User Words
 * Возвращает все слова пользователя
 * @returns {Array} Массив обектов со словами пользователя, при их отсутствии пустой массив
 */

export const getAllUserWords = async () => {
  try {
    const { userId } = globalUser.get();
    const url = `users/${userId}/words`;
    const method = { method: 'GET' };
    return await getResponse(url, method);
  } catch (err) {
    return Object.keys(err);
  }
};
