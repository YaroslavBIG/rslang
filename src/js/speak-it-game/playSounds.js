import { dataUrl } from '../api/constants';

export const playSounds = () => {
  const audio = document.querySelector('.audio');

  document.querySelectorAll('.answers__item').forEach((item) => {
    item.addEventListener('click', () => {
      audio.src = `${dataUrl}${item.dataset.audio}`;
      audio.autoplay = true;
    });
  });
};
