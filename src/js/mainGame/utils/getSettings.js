export const getSettings = () => {
  const settings = {
    newWordsPerDay: JSON.parse(localStorage.getItem('newWordsPerDay')),
    maxCardsPerDay: JSON.parse(localStorage.getItem('maxCardsPerDay')),
    soundAutoPlay: JSON.parse(localStorage.getItem('soundAutoPlay')),
    showDeleteBtn: JSON.parse(localStorage.getItem('showDeleteBtn')),
    showStrongBtn: JSON.parse(localStorage.getItem('showStrongBtn')),
    showAnswerBtn: JSON.parse(localStorage.getItem('showAnswerBtn')),
    translation: JSON.parse(localStorage.getItem('translation')),
    meaning: JSON.parse(localStorage.getItem('meaning')),
    example: JSON.parse(localStorage.getItem('example')),
    transcription: JSON.parse(localStorage.getItem('transcription')),
    associationImg: JSON.parse(localStorage.getItem('associationImg')),
  };
  return settings;
};
