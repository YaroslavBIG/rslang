export const recognition = (isStart) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognitionSpeech = new SpeechRecognition();
  recognitionSpeech.interimResults = false;
  recognitionSpeech.lang = 'en-US';

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
  }
  recognitionSpeech.stop();
};
