export const concatObjects = (keysArr, yourObj) => {
  keysArr.forEach((el) => {
    const arr = Object.keys(el);
    arr.forEach((key) => {
      if (key !== 'date') {
        yourObj[key] += el[key];
      }
    });
  });
};
