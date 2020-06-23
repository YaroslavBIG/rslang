import { playAudio } from './utils/playAudio';

export const inputControl = (event) => {
  const targetWord = sessionStorage.getItem('word');
  const userInput = event.target.innerText;
  if (targetWord === userInput) {
    const url = sessionStorage.getItem('audio');
    playAudio(url);
    const urlExample = sessionStorage.getItem('audioExample');
    playAudio(urlExample);
    const urlMeaning = sessionStorage.getItem('audioMeaning');
    playAudio(urlMeaning);
  }
};
