import { getResponse } from './getResponse';
import { load } from '../utils/load';
import { globalUser } from '../utils/main';

/**
 * Get user settings
 * метод возвращает объект с настройками пользователя
 */

export const getUserSettings = async () => {
  load();
  const userId = globalUser.get()[0].id || '5ee8922512daba0017bdc957';
  const url = `users/${userId}/settings`;
  return getResponse(url, { method: 'GET' });
};
