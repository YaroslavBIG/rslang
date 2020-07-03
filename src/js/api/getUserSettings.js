import { getResponse } from './getResponse';
import { globalUser } from '../utils/main';

/**
 * Get user settings
 * метод возвращает объект с настройками пользователя
 */

export const getUserSettings = () => {
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/settings`;
  return getResponse(url, { method: 'GET' });
};
