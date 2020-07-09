import { getResponse } from '../getResponse';
import { getDate } from '../../utils';
import { finalPut } from './finalPut';
import { getThisUserUrl } from './getThisUserUrl';

/**
 *
 * @param {object} obj - объект, который кладете
 * @param {string} name - имя вашей игры
 * на выходе ничего, мы ж кладем туда. ХЕХ
 */

export const putGameStatistics = async (name, obj) => {
  const thisStatistics = await getResponse(getThisUserUrl(), { method: 'GET' });
  const dateNow = getDate(null);

  const { optional: { games } } = thisStatistics;
  const innerGames = games[name];

  const comp = innerGames.find((el) => el.date === dateNow) || false;

  if (comp) {
    const arr = Object.keys(comp);

    arr.forEach((el) => {
      if (el !== 'date') {
        comp[el] += obj[el];
      }
    });
    await finalPut(thisStatistics);
  } else {
    const readyObj = {
      date: dateNow,
      ...obj,
    };
    innerGames.push(readyObj);
    await finalPut(thisStatistics);
  }
  // eslint-disable-next-line no-console
  console.log(thisStatistics);
};
