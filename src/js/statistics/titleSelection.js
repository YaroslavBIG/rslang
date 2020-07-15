import { statisticsData } from './constants';

export const titleSelection = (thisId) => {
  switch (thisId) {
    case `${statisticsData.speakItId}`:
      return `« ${statisticsData.speakItTitle} »`;
    case `${statisticsData.intervalsId}`:
      return `« ${statisticsData.intervalsTitle} »`;
    case `${statisticsData.constructorId}`:
      return `« ${statisticsData.constructorTitle} »`;
    case `${statisticsData.sprintId}`:
      return `« ${statisticsData.sprintTitle} »`;
    default:
      return `« ${statisticsData.mainTitle} »`;
  }
};
