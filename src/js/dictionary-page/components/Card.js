import { dataUrl } from '../../api/constants';

export const Card = (word, dateRepeat) => {
  const wordCard = document.createElement('div');
  wordCard.setAttribute('data-id-word', `${word._id}`);
  wordCard.setAttribute('data-id-audio', `${word.audio}`);
  wordCard.classList.add('word-card');
  wordCard.innerHTML = `
    <div class="word-card__info">
        <div class="word-card__title">
            <span class="word-card__word word-card__word_main word-card__en">
                ${word.word}
                <img src="./assets/ico/voice-dictionary.png" class="word-card__audio">
            </span>
            <span class="word-card__word word-card__transcription">
                ${word.transcription}
            </span>
            <span class="word-card__word word-card__word_main word-card__ru">
                ${word.wordTranslate}
            </span>
            <span class="word-card__word word-card__example">
                ${word.textExample}
            </span>
            <span class="word-card__word word-card__meaning">
                ${word.textMeaning}
            </span>
        </div>
        <div class="word-card__buttons">
            <button class="word-card__btn">
            </button>
        </div>
        <div class="word-card__stat">
        <span class="word-card__repeat">
            Количество повторений: ${word.userWord.optional.repeatCount} раз
        </span>
        <span class="word-card__last-repeat">
            Последний раз повторялось: ${word.userWord.optional.date}
        </span>
        <span class="word-card__next-repeat">
            Следующееповторение: ${dateRepeat}
        </span>
        </div>
        </div>
        <div class="word-card__picture-container">
            <img class="word-card__picture" src="${dataUrl}${word.image}" title="${word.word}">
        </div>`;
  return wordCard;
};
