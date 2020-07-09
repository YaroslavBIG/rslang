import { getResponse } from './getResponse';
import { globalUser } from '../utils/main';

/**
 * Get user settings
 * метод возвращает объект с настройками пользователя
 */

export const getUserSettings = () => {
  const { id: userId } = globalUser.get();
  const url = `users/${userId}/settings`;
  return getResponse(url, { method: 'GET' });
};
