export const nextWordNum = (arrowDirection) => {
  const currentWordNum = parseInt(sessionStorage.getItem('wordNum'), 10);

  let featureWordNum = NaN;

  switch (currentWordNum) {
    case 0:
      arrowDirection === 'left' ? featureWordNum = 0 : featureWordNum = 1;
      break;
    default:
      featureWordNum = arrowDirection === 'left' ? currentWordNum - 1 : currentWordNum + 1;
      break;
  }

  return featureWordNum;
};
