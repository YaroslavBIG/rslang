import { returnBlockWithWrong } from './returnBlockWithWrong';
import { showPlayDescription } from './showPlayDescription';
import { clickReturn } from './clickReturn';
import { createResult } from './createResult';
import { showStatistics } from './showStatistics';

export const clickResult = () => {
  document.querySelector('#results-speak').addEventListener('click', () => {
    const obj = createResult();
    showStatistics(obj, true);
    const wrongBlock = returnBlockWithWrong(obj);
    document.getElementById('speak-items').append(wrongBlock);
    showPlayDescription(true);
    clickReturn();
  });
};
