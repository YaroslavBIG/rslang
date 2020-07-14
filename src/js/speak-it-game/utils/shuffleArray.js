export const shuffleArray = (array) => {
  let temporaryValue = null;
  let i = array.length - 1;

  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    temporaryValue = array[i];
    array[i] = array[j];
    array[j] = temporaryValue;
    i -= 1;
  }
  return array;
};
