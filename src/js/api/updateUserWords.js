import { getResponse } from './getResponse';
import { load } from '../utils/load';
import { globalUser } from '../utils/main';

/**
 * Update user words
 * Функция для изменения свойств объекта слова по его id в словах пользователя
 * @param {string} wordId id слова, которое нужно изменить
 * @param {object} wordOption объект с стандартными свойствами объекта слова 
 * { difficulty: 'weak', optional: { isDelete: true } }
 */

export const updateUserWords = async (wordId, wordOption) => {
  load();
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/words/${wordId}`;
  await getResponse(url, { method: 'PUT', body: JSON.stringify(wordOption) });
};
