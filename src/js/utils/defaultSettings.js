const icon = { iconURL: 'none' };
export const defaultSettings = {
  wordsPerDay: 50,
  optional: {
    icon: icon.iconURL,
    newWordsPerDay: 10,
    maxCardsPerDay: 10,
    soundAutoPlay: true,
    showDeleteBtn: true,
    showStrongBtn: true,
    showAnswerBtn: true,
    onlyNewWords: true,
    cardInfo: {
      translation: true,
      meaning: true,
      example: true,
      transcription: true,
      associationImg: true,
    },
  },
};
