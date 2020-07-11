import { getResponse } from '../api';
import { getThisUserUrl } from '../api/statistics/getThisUserUrl';

export const fetchStatisticsData = async () => {
  try {
    return await getResponse(getThisUserUrl(), { method: 'GET' });
  } catch (error) {
    return Object.keys(error);
  }
};
