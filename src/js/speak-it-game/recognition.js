import { start } from './constants';

export const recognition = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognitionSpeech = new SpeechRecognition();
  recognitionSpeech.interimResults = false;
  recognitionSpeech.lang = 'en-US';

  let isStart = start.get();
  console.log(isStart);
  const input = document.querySelector('.hints-input');

  if (isStart) {
    recognitionSpeech.start();
    recognitionSpeech.addEventListener('result', (ev) => {
      const transcript = Array.from(ev.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      input.value = transcript;
      input.focus();
    });
    recognitionSpeech.onend = () => {
      input.blur();
      recognitionSpeech.start();
    };
  } else {
    isStart = !isStart;
    start.set(isStart);
    recognitionSpeech.stop();
  }
};
