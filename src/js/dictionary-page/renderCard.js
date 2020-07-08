import { Card } from './components/Card';
import { nextRepeatDate } from './nextRepeatDate';

export const renderCard = (word, userSettings, category) => {
  const wordsWrapper = document.querySelector('.words-wrapper');
  const dateRepeat = nextRepeatDate(word);
  const wordCard = Card(word, dateRepeat);
  const removeBtn = wordCard.querySelector('.word-card__btn');
  const ruWord = wordCard.querySelector('.word-card__ru');
  const transcription = wordCard.querySelector('.word-card__transcription');
  const exampleWord = wordCard.querySelector('.word-card__example');
  const meaningWord = wordCard.querySelector('.word-card__meaning');
  const pictureContainer = wordCard.querySelector('.word-card__picture-container');
  const img = wordCard.querySelector('.word-card__picture');
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

  if (userSettings.optional.cardInfo.translation) {
    ruWord.classList.add('show');
  }

  if (userSettings.optional.cardInfo.meaning) {
    meaningWord.classList.add('show');
  }

  if (userSettings.optional.cardInfo.example) {
    exampleWord.classList.add('show');
  }

  if (userSettings.optional.cardInfo.transcription) {
    transcription.classList.add('show');
  }

  if (userSettings.optional.cardInfo.associationImg) {
    pictureContainer.classList.add('show');
    img.classList.add('show');
  }

  wordsWrapper.append(wordCard);
};
