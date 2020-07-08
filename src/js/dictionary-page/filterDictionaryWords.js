export const filterDictionaryWords = (words, category) => {
  if (category === 'all') {
    return words.filter((word) => word.difficulty !== 'hard' && word.optional.deleted === false);
  } if (category === 'hard') {
    return words.filter((word) => word.difficulty === 'hard' && word.optional.deleted === false);
  } if (category === 'delete') {
    return words.filter((word) => word.optional.deleted === true);
  }
};
