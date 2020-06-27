import { Card } from './components/Card';

export const renderCard = (idWord, idAudio, enWord, transcription, ruWord, textExample, image, category) => {
  const wordsWrapper = document.querySelector('.words-wrapper');
  const wordCard = Card(idWord, idAudio, enWord, transcription, ruWord, textExample, image);
  const removeBtn = wordCard.querySelector('.word-card__btn');
  if (category === 'all') {
    removeBtn.classList.add('word-card__btn_remove');
    removeBtn.classList.remove('word-card__btn_return');
    removeBtn.innerHTML = 'удалить';
  } 
  
  if (category === 'delete' || category === 'hard') {
    removeBtn.classList.add('word-card__btn_return');
    removeBtn.classList.remove('word-card__btn_remove');
    removeBtn.innerHTML = 'восстановить';
  }
  wordsWrapper.append(wordCard);
};
