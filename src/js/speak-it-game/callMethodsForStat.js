import { clickContinueWithoutRepeat } from './buttons/clickContinueWithoutRepeat';
import { putGameStatistics } from '../api';
import { start } from './utils/constants';
import { clickContinueWithRepeat } from './buttons/clickContinueWithRepeat';
import { showStatistics } from './showing/showStatistics';

export const callMethodsForStat = (obj) => {
  start.set(false);
  putGameStatistics('speakit', obj);
  showStatistics(obj, false);
  clickContinueWithoutRepeat();
  clickContinueWithRepeat();
};
