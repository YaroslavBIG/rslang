import { gameContent } from '../gameContent';

export const gameArrows = (event) => {
  const { id } = event.target;
  const arrowDirection = id === 'arrow_left' ? 'left' : 'right';
  console.log(arrowDirection);
  const currentWordNum = parseInt(sessionStorage.getItem('wordNum'), 10);
  const collectionLen = sessionStorage.getItem('collectionLen');
  let featureWordNum = NaN;
  console.log(currentWordNum);
  switch (currentWordNum) {
    case 0:
      arrowDirection === 'left' ? featureWordNum = 0 : featureWordNum = 1;
      break;
    case collectionLen + 1:
      gameContent(null, 20); // TODO: Foo for this
      break;
    default:
      featureWordNum = arrowDirection === 'left' ? currentWordNum - 1 : currentWordNum + 1;
      break;
  }
  console.log(featureWordNum);
  if (featureWordNum !== currentWordNum) {
    gameContent(null, featureWordNum);
  }
};
