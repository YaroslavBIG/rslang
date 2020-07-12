import { getWords } from '../api';
import { getAllCards } from './getAllCards';
import { getMixWords } from '../api/words/getMixWords';
import { showPlayDescription } from './showPlayDescription';
import { randomArr } from '../utils';

export const startSpeakGame = async (page, group, isRepeatWithout) => {
  const resp = await getMixWords();
  let result = [];
  if (resp.length > 10 && !isRepeatWithout) {
    resp.forEach((el) => {
      const item = el[0].paginatedResults;
      result.push(...item);
    });
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
