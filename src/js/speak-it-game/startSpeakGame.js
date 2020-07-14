import { getWords } from '../api';
import { getAllCards } from './creating/getAllCards';
import { showPlayDescription } from './showing/showPlayDescription';
import { returnUserWordsArr } from './utils/returnUserWordsArr';
import { phrases } from './utils/constants';
import { shuffleArray } from './utils/shuffleArray';
import { disabledOptions } from './showing/disabledOptions';

export const startSpeakGame = async (page, group, isRepeatWithout) => {
  const loader = document.querySelector('.spinner-overlay');
  const phrase = document.querySelector('.game__score');
  loader.style = 'display: flex; z-index: 4';

  const { textUserWords } = phrases;
  const resultResp = await returnUserWordsArr();

  let result = null;
  if (resultResp.length >= 10 && !isRepeatWithout) {
    phrase.textContent = textUserWords;
    disabledOptions(true);
    result = resultResp;
  } else {
    disabledOptions(false);
    phrase.textContent = '';
    result = await getWords(page, group, 0, 10);
  }

  const resultTen = shuffleArray(result)
    .filter((el, index) => index < 10);

  const resTemp = getAllCards(resultTen);
  if (resTemp) {
    loader.style.display = 'none';
  }
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription(false);
};
