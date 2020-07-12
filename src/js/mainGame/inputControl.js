import { playAudio } from './utils/playAudio';
import { setTranscription } from './utils/setTranscription';
import { getSettings } from './utils/getSettings';

export const inputControl = (event) => {
  const targetWord = sessionStorage.getItem('word').toLowerCase();
  const userInput = event.target.innerText.toLowerCase();
  const settings = getSettings();

  if (targetWord === userInput) {
    const url = sessionStorage.getItem('audio');
    const urlExample = sessionStorage.getItem('audioExample');
    const urlMeaning = sessionStorage.getItem('audioMeaning');

    const audioArr = [url];
    if (settings.meaning) audioArr.push(urlMeaning);
    if (settings.example) audioArr.push(urlExample);

    if (settings.soundAutoPlay) playAudio(false, audioArr);
    if (settings.transcription) setTranscription();
  }
};
