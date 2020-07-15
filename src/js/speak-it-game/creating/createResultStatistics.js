import { returnBlockWithWrong } from './returnBlockWithWrong';
import { showPlayDescription } from '../showing/showPlayDescription';
import { createResult } from './createResult';
import { showStatistics } from '../showing/showStatistics';

export const createResultStatistics = (boolRes, boolEnd) => {
  const obj = createResult();
  showStatistics(obj, boolRes, boolEnd);
  const wrongBlock = returnBlockWithWrong(obj);
  document.getElementById('speak-items').append(wrongBlock);
  showPlayDescription(true);
  return obj;
};
