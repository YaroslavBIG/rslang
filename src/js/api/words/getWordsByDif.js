import { getAggregatedWords } from './getAggregatedWords';

export const getWordsByDiff = async (difficulty) => {
  try {
    const words = await getAggregatedWords({
      $and: [
        { 'userWord.difficulty': difficulty },
        { 'userWord.optional.deleted': 'false' },
      ],
    });

    const repeat = await getAggregatedWords({
      $and: [
        {
          $or: [{ 'userWord.optional.repeat': 'true' }, { 'userWord.difficulty': 'again' }],
        },
        {
          'userWord.optional.deleted': 'false',
        },
      ],
    });

    return difficulty === 'repeat' ? repeat : words;
  } catch (err) {
    return Object.keys(err);
  }
};
