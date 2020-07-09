import { playAudio } from './utils/playAudio';
import { setTranscription } from './utils/setTranscription';
import { getSettings } from './utils/getSettings';

export const inputControl = (event) => {
  const targetWord = sessionStorage.getItem('word');
  const userInput = event.target.innerText;
  const settings = getSettings();

  if (targetWord === userInput) {
    const url = sessionStorage.getItem('audio');
    const urlExample = sessionStorage.getItem('audioExample');
    const urlMeaning = sessionStorage.getItem('audioMeaning');
    const audioPlay = JSON.parse(localStorage.getItem('soundAutoPlay'));
    const transcription = JSON.parse(localStorage.getItem('transcription'));

    const audioArr = [url];
    if (settings.meaning) audioArr.push(urlMeaning);
    if (settings.example) audioArr.push(urlExample);

    if (audioPlay) playAudio(false, audioArr);
    if (transcription) setTranscription();
  }
};
