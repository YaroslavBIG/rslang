export const isNewUserWord = (id) => {
  const allUserWords = JSON.parse(sessionStorage.getItem('allUserWords'));
  const res = allUserWords.some((obj) => obj.wordId === id);
  return !res;
};
