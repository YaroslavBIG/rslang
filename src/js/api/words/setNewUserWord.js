import { getDayOfYear } from '../../mainGame/utils';
import { globalUser } from '../../utils';
import { getResponse } from '../getResponse';

// again, hard, good, weak,
export const setNewUserWord = (wordId, difficulty = 'good') => {
  const user = globalUser.get();
  const { id } = user;

  const day = getDayOfYear();
  const unixTime = +new Date();
  const repeat = difficulty === 'again';
  const newWordObj = {
    difficulty,
    optional: {
      day,
      unixTime, // дата в формате дд.мм.гггг
      deleted: 'false',
      repeat,
    },
  };
  const url = `users/${id}/words/${wordId}`;
  const method = { method: 'POST', body: JSON.stringify(newWordObj) };
  getResponse(url, method);
};
