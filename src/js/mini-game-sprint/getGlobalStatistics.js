import { globalUser } from '../utils';
import { getResponse } from '../api';

export const getGlobalStatistics = async () => {
  console.log(globalUser.get());
  const myUserId = globalUser.get().userId;
  const statisticsUrl = `users/${myUserId}/statistics`;
  console.log(await getResponse(statisticsUrl, {method: 'GET'}));
};
