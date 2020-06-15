function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const randomArr = (len) => {
  const result = [];
  const size = len - 1;
  while (result.length < size) {
    const num = randomInteger(0, size);
    if (!result.includes(num)) result.push(num);
  }
  return result;
};

export default randomArr;
