import { getResponse } from './getResponse';
import { globalUser } from '../utils/main';

/**
 * Get user words
 * метод для получения слов пользователя
 * @param {string} userId id пользователя
 * @return {Array} возвращвет массив объектов слов пользователя
 * @example [{
    "id": "5ee9241e12daba0017bdd5a8",
    "difficulty": string, weak - легкое, hard - тяжёлое
    "optional": {
      "isDelete": boolean, помещает слово в удаленные
      "repeatNumber": number, количество повторений
      "lastRepeat": number, последний раз повторялось
      "nextRepeat": number следующее повторение
    },
    "wordId": "5e9f5ee35eb9e72bc21af716"
  }]
 */

export const getUserWords = () => {
  const { id: userId } = globalUser.get();
  const url = `users/${userId}/words`;
  return getResponse(url, { method: 'GET' });
};
