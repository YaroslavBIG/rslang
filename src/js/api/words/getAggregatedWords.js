import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';
/**
 * Aggregated Words
 * GET для получения слов пользователя:
 * @param {object} filter объект содержащий поля для пойска
 * @tutorial https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/rslang.md#usersaggregatedwords
 * @example { $or: [{ 'userWord.difficulty': 'good' }, { 'userWord.optional.date': getDate() }] }
 * @example { 'userWord.optional.date': '07.07.2020' };
 * @return {Promise} promise
 *
 */
export const getAggregatedWords = async (filter) => {
  try {
    const { userId } = globalUser.get();
    return await getResponse(`users/${userId}/aggregatedWords?filter=${JSON.stringify(filter)}`, { method: 'GET' });
  } catch (err) {
    return Object.keys(err);
  }
};
