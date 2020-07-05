import { dataUrl } from '../api/constants';

export const showPlayDescription = () => {
  const audio = document.querySelector('.audio');

  document.querySelectorAll('.answers__item').forEach((item) => {
    item.addEventListener('click', (ev) => {
      document.querySelectorAll('.answers__item').forEach((elem) => elem.classList.remove('item_active'));
      item.classList.add('item_active');
      const bodyTranslate = (ev.path[0].children[3] === undefined) ? ev.path[1] : ev.path[0];
      document.querySelector('[alt="speak-blank"]').src = `${dataUrl}${item.dataset.img}`;
      document.querySelector('.hints-translation').textContent = bodyTranslate.children[3].textContent;

      audio.src = `${dataUrl}${item.dataset.audio}`;
      audio.autoplay = true;
    });
  });
};
