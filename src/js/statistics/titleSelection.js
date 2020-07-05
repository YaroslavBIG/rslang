import { statisticsData } from './constants';

export const titleSelection = (thisId) => {
  switch (thisId) {
    case `${statisticsData.speakItId}`:
      return `« ${statisticsData.speakItTitle} »`;
    case `${statisticsData.engPuzzleId}`:
      return `« ${statisticsData.engPuzzleTitle} »`;
    case `${statisticsData.savannahData}`:
      return `« ${statisticsData.savannahTitle} »`;
    case `${statisticsData.auditionId}`:
      return `« ${statisticsData.auditionTitle} »`;
    case `${statisticsData.sprintId}`:
      return `« ${statisticsData.sprintTitle} »`;
    case `${statisticsData.yourGameId}`:
      return `« ${statisticsData.yourGameTitle} »`;
    default:
      return `« ${statisticsData.totalTitle} »`;
  }
};
