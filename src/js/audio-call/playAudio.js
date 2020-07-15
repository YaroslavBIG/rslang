import { dataUrl } from '../api/constants';

export const playAudio = (src) => {
  const wordAudio = new Audio(`${dataUrl}${src}`);
  wordAudio.play();
};
