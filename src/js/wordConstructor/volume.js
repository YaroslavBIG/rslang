import { constantsData } from './constants';

const sound = document.createElement('audio');
export function volume(randomAudio) {
  document
    .getElementsByClassName('game-block__header-volume')[0]
    .addEventListener('click', () => {
      sound.src = `${constantsData.backendUrl}${randomAudio}`;
      sound.play();
    });
}
