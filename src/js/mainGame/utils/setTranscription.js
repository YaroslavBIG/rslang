export const setTranscription = () => {
  const textTranslateBlock = document.querySelector('.card-text--translate');
  const wordTranscription = sessionStorage.getItem('wordTranscription');
  if (wordTranscription) textTranslateBlock.innerText = wordTranscription;
};
