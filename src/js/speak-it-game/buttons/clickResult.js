import { returnBlockWithWrong } from '../creating/returnBlockWithWrong';
import { showPlayDescription } from '../showing/showPlayDescription';
import { clickReturn } from './clickReturn';
import { createResult } from '../creating/createResult';
import { showStatistics } from '../showing/showStatistics';

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
