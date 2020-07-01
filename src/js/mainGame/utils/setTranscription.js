export const setTranscription = () => {
  const textTranslateBlock = document.querySelector('.card-text--translate');
  const transcription = sessionStorage.getItem('transcription');
  if (transcription) textTranslateBlock.innerText = transcription;
};
