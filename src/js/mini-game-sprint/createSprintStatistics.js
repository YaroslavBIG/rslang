import { putGameStatistics } from '../api';

export const createSprintStatistics = (answersCount, rightCount, wrongCount) => {
  const myStatistics = {
    total: answersCount,
    right: rightCount,
    wrong: wrongCount,
  };
  putGameStatistics('sprint', myStatistics);
};
