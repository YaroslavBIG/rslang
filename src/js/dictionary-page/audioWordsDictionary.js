import { dataUrl } from '../api/constants';

export const audioWordsDictionary = (src) => {
  const wordAudio = new Audio(`${dataUrl}${src}`);
  wordAudio.play();
};
