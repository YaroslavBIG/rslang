import { constantsData } from './constants';

export const choiceBtnSoundtracks = () => {
  const correctAudio = document.getElementById('audio--correct');
  const errorAudio = document.getElementById('audio--error');

  correctAudio.setAttribute('src', `${constantsData.backendUrl}files/correct.mp3`);
  errorAudio.setAttribute('src', `${constantsData.backendUrl}files/error.mp3`);
};
