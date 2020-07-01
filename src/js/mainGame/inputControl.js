import { playAudio } from './utils/playAudio';
import { setTranscription } from './utils/setTranscription';

export const inputControl = (event) => {
  const targetWord = sessionStorage.getItem('word');
  const userInput = event.target.innerText;
  if (targetWord === userInput) {
    const url = sessionStorage.getItem('audio');
    const urlExample = sessionStorage.getItem('audioExample');
    const urlMeaning = sessionStorage.getItem('audioMeaning');
    const audioArr = [url, urlExample, urlMeaning];
    playAudio(false, audioArr);
    setTranscription();
  }
};
