export const filterDictionaryWords = (words, category) => {
  if (category === 'all') {
    return words.filter((word) => word.difficulty !== 'hard' && word.optional.isDelete === false);
  } if (category === 'hard') {
    return words.filter((word) => word.difficulty === 'hard' && word.optional.isDelete === false);
  } if (category === 'delete') {
    return words.filter((word) => word.optional.isDelete === true);
  }
};
