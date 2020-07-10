import { getResponse } from '../api/getResponse';
import { globalUser } from '../utils/main';

/**
 * Get user words
 * метод для получения слов пользователя
 * @param {string} wordId id слова
 * @return {Object} возвращвет объект слова
 * @example [{
    "id": "5ee9241e12daba0017bdd5a8",
    "difficulty": string, weak, hard, good
    "optional": {
      "day": день года
      "date": getDate(), // дата в формате дд.мм.гггг
      "deleted": boolean, помещает слово в удаленные
      "repeat": number
      "repeatCount": number, количество повторений
    },
    "wordId": "5e9f5ee35eb9e72bc21af716"
  }]
 */

export const getUserWordById = (wordId) => {
  const { id: userId } = globalUser.get();
  const url = `users/${userId}/words/${wordId}`;
  return getResponse(url, { method: 'GET' });
};
