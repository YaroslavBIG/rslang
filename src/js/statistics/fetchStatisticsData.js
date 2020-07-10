import { getResponse } from '../api';
import { globalUser } from '../utils';

export const fetchStatisticsData = async () => {
  const getThisUserUrl = () => {
    const thisUserId = globalUser.get().userId; // после мержа спринта забрать компонент
    return `users/${thisUserId}/statistics`;
  };

  try {
    return await getResponse(getThisUserUrl(), { method: 'GET' });
  } catch (error) {
    return Object.keys(error);
  }
};
