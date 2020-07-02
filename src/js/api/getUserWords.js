import { getResponse } from './getResponse';
import { load } from '../utils/load';
import { globalUser } from '../utils/main';

/**
 * Get user words
 * метод для получения слов пользователя
 * @param {string} userId id пользователя
 * возвращвет массив объектов слов пользователя
 * [{
    "id": "5ee9241e12daba0017bdd5a8",
    "difficulty": "weak",
    "optional": {
      "testFieldString": "test",
      "testFieldBoolean": true
    },
    "wordId": "5e9f5ee35eb9e72bc21af716"
  }]
 */

export const getUserWords = async () => {
  load();
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/words`;
  return getResponse(url, { method: 'GET' });
};
