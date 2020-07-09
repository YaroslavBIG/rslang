import { globalUser } from '../utils';
import { getResponse } from '../api';

export const getThisUserUrl = () => {
  const thisUserId = globalUser.get().userId;
  return `users/${thisUserId}/statistics`;
};

const finalPut = async (obj) => {
  delete obj.id;
  await getResponse(getThisUserUrl(), { method: 'PUT', body: JSON.stringify(obj) });
};

/**
 *
 * @param {object} obj - объект, который кладете
 * @param {string} name - имя вашей игры
 * на выходе ничего, мы ж кладем туда. ХЕХ
 */

export const putGlobalStatistics = async (name, obj) => {
  const thisStatistics = await getResponse(getThisUserUrl(), { method: 'GET' });
  const dateNow = new Date().toLocaleDateString().replace(/^\d|\./g, '');

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
