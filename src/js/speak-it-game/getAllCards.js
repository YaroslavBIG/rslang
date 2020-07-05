import { createCard } from './createCard';

export const getAllCards = (array) => {
  let temp = '';
  array.forEach((element) => {
    const {
      word,
      transcription,
      wordTranslate,
      audio,
    } = element;
    temp += createCard(word, transcription, wordTranslate, audio);
  });
  return temp;
};
