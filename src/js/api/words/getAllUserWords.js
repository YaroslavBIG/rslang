import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

/**
 * All User Words
 * Возвращает все слова пользователя
 * @returns {Array} Массив обектов со словами пользователя, при их отсутствии пустой массив
 */

export const getAllUserWords = async () => {
  const { userId } = globalUser.get();
  const url = `users/${userId}/words`;
  const method = { method: 'GET' };
  const result = await getResponse(url, method);
  return result;
};
