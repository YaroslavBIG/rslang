export const Card = (idWord, idAudio, enWord, transcription, ruWord, textExample, image) => {
  const wordCard = document.createElement('div');
  wordCard.setAttribute('data-id-word', `${idWord}`);
  wordCard.setAttribute('data-id-audio', `${idAudio}`);
  wordCard.classList.add('word-card');
  wordCard.innerHTML = `
    <div class="word-card__info">
        <div class="word-card__title">
            <span class="word-card__word word-card__word_main">
                ${enWord}
                <img src="./assets/ico/voice-dictionary.png" class="word-card__audio">
            </span>
            <span class="word-card__word">
                ${transcription}
            </span>
            <span class="word-card__word word-card__word_main">
                ${ruWord}
            </span>
            <span class="word-card__word">
                ${textExample}
            </span>
        </div>
        <div class="word-card__buttons">
            <button class="word-card__btn">
            </button>
        </div>
        <div class="word-card__stat">
        <span class="word-card__repeat">
            Количество повторений:
        </span>
        <span class="word-card__last-repeat">
            Последний раз повторялось:
        </span>
        <span class="word-card__next-repeat">
            Следующееповторение:
        </span>
        </div>
        </div>
        <div class="word-card__picture-container">
            <img class="word-card__picture" src="./assets/${image}" title="${enWord}">
        </div>`;
  return wordCard;
};
