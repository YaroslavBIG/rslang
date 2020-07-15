export const isNewUserWord = (id) => {
  const allUserWords = JSON.parse(sessionStorage.getItem('allUserWords'));

  return !(allUserWords.some((obj) => obj.wordId === id));
};
