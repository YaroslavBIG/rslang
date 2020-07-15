import { dataUrl } from '../api/constants';

export const createMainCard = (word) => {
  const container = document.createElement('div');
  container.classList.add('audio-call-content__main-word');
  container.setAttribute('data-id-audio', `${word.audio}`);
  container.setAttribute('data-id-word', `${word.id}`);
  container.innerHTML = `
     <div class="audio-call-content__audio">
        <img src="./assets/ico/audio-call.png" class="audio-call-content__audio-img">
      </div>
       <div class="audio-call-content__word hide">
        <img src="${dataUrl}${word.image}" alt="${dataUrl}${word.word}" class="audio-call-content__word__img">
        <div class="audio-call-content__word__word">
            ${word.word}
        </div>
     </div>`;
  return container;
};
