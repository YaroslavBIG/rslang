import { dataUrl } from '../../api';

export const playAudio = (url) => {
  const audio = new Audio(`${dataUrl}${url}`);
  audio.play();
};
