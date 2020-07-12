import { getWords } from '../api';
import { getAllCards } from './creating/getAllCards';
import { showPlayDescription } from './showing/showPlayDescription';
import { randomArr } from '../utils';
import { returnUserWordsArr } from './returnUserWordsArr';

export const startSpeakGame = async (page, group, isRepeatWithout) => {
  const resultResp = await returnUserWordsArr();

  let result = null;
  if (resultResp.length >= 10 && !isRepeatWithout) {
    result = resultResp;
  } else {
    result = await getWords(page, group, 0, 10);
  }

  const randomIndex = randomArr(result.length);
  const resultTen = randomIndex
    .map((el) => result[el])
    .filter((el, index) => index < 10);

  const resTemp = getAllCards(resultTen);
  document.querySelector('.answers').innerHTML = resTemp;

  showPlayDescription(false);
};
