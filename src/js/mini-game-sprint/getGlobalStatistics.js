import { globalUser } from '../utils';
import { getResponse } from '../api';

export const getThisUserUrl = () => {
  const thisUserId = globalUser.get().userId;
  return `users/${thisUserId}/statistics`;
};

export const getGlobalStatistics = async () => {
  try {
    return await getResponse(getThisUserUrl(), { method: 'GET' });
  } catch (error) {
    return Object.keys(error);
  }
};

export const putGlobalStatistics = async () => {
  const thisStatistics = await getGlobalStatistics();

  thisStatistics.optional.games.sprint.push({ test: 90000000 });

  await getResponse(getThisUserUrl(), { method: 'PUT', body: JSON.stringify(thisStatistics) });
  console.log(thisStatistics);
};
