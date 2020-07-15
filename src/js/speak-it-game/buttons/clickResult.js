import { returnBlockWithWrong } from '../creating/returnBlockWithWrong';
import { showPlayDescription } from '../showing/showPlayDescription';
import { clickReturn } from './clickReturn';
import { createResult } from '../creating/createResult';
import { showStatistics } from '../showing/showStatistics';
import { phrases } from '../utils/constants';
import { callMethodsForStat } from '../callMethodsForStat';

export const clickResult = () => {
  const { textResult } = phrases;

  document.querySelector('#results-speak').addEventListener('click', () => {
    const textCont = document.querySelector('#results-speak').textContent;
    const obj = createResult();
    if (textCont === textResult) {
      showStatistics(obj, true);
      const wrongBlock = returnBlockWithWrong(obj);
      document.getElementById('speak-items').append(wrongBlock);
      showPlayDescription(true);
      clickReturn();
    } else {
      const { right, wrong } = obj;
      callMethodsForStat({ right, wrong: wrong.length });
    }
  });
};
