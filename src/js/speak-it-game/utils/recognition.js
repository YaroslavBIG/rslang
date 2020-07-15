import { start } from './constants';
import { clickStart } from '../buttons/clickStart';

export const recognition = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognitionSpeech = new SpeechRecognition();
  recognitionSpeech.interimResults = false;
  recognitionSpeech.lang = 'en-US';

  const input = document.querySelector('.hints-input');

  clickStart(recognitionSpeech);

  recognitionSpeech.onresult = (ev) => {
    const transcript = Array.from(ev.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');
    input.value = transcript;
    input.focus();
  };
  recognitionSpeech.onend = () => {
    input.blur();
    const rec = start.getRecog();
    if (rec) {
      recognitionSpeech.start();
    } else {
      recognitionSpeech.stop();
    }
  };
};
