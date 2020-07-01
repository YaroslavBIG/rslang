import { dataUrl } from '../../api';

export const playAudio = (url = false, urlArr) => {
  const playNow = (path) => {
    const audio = new Audio(`${dataUrl}${path}`);
    audio.play();
  };

  if (url) {
    return playNow(url);
  }

  const audioArr = [];
  urlArr.forEach((el, idx) => {
    const audio = new Audio(`${dataUrl}${el}`);
    audio.onended = () => {
      if (idx < urlArr.length - 1) audioArr[idx + 1].play();
    };

    audioArr.push(audio);
  });

  audioArr[0].play();
};
