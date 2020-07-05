export const isNewUserWord = (id) => {
  const allUserWords = JSON.parse(sessionStorage.getItem('allUserWords'));
  const isNew = allUserWords ? !Array.prototype.includes.call(allUserWords, id) : true;
  console.log(isNew);
  return isNew;
};
