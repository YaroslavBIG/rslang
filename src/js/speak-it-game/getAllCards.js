import { createCard } from './createCard';

export const getAllCards = (array) => {
  let temp = '';
  array.forEach((element) => {
    const {
      word,
      transcription,
      wordTranslate,
      audio,
      image,
    } = element;
    temp += createCard(word, transcription, wordTranslate, audio, image);
  });
  return temp;
};
