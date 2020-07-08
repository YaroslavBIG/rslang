import { globalUser } from '../utils';
import { getResponse } from '../api';

export const getThisUserUrl = () => {
  const thisUserId = globalUser.get().userId;
  return `users/${thisUserId}/statistics`;
};

export const getGlobalStatistics = async () => {
  try {
    return await getResponse(getThisUserUrl(), { method: 'GET' });
  } catch (error) {
    return Object.keys(error);
  }
};

export const putGlobalStatistics = async (answersToday, rightAnswers, wrongAnswers, gameCounter) => {
  const thisStatistics = await getGlobalStatistics();
  const newDate = new Date().toLocaleDateString().replace(/^\d|\./g, '');
  const thisDate = thisStatistics.optional.games.sprint[0].date;

  if (!thisDate || thisDate !== newDate) {
    thisStatistics.optional.games.sprint.push({
      date: newDate,
      answersToday: answersToday,
      rightAnswers: rightAnswers,
      wrongAnswers: wrongAnswers,
      gameCounter: gameCounter,
    });
  } else {
    thisStatistics.optional.games.sprint[0].answersToday += answersToday;
    thisStatistics.optional.games.sprint[0].rightAnswers += rightAnswers;
    thisStatistics.optional.games.sprint[0].wrongAnswers += wrongAnswers;
    thisStatistics.optional.games.sprint[0].gameCounter += 1;
  }



  await getResponse(getThisUserUrl(), { method: 'PUT', body: JSON.stringify(thisStatistics) });
  // eslint-disable-next-line no-console
  console.log(thisStatistics);
};
