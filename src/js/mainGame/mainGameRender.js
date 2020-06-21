export const mainGameRender = () => {
  const template = `
  <section class="game_main__wrapper">
    <div class="game_main">
      <div class="arrow arrow--left" id="arrow_left"></div>
      <div class="card_wrapper">
        <div class="main__field">
          <div class="card-game">
              <div class="card-text card-text--quest">
                <span class="sentence sentence--first-part"></span>
                <div class="sentence sentence--target-word" contenteditable></div>
                <span class="sentence sentence--last-part"></span>
              </div>
              <div class="separator"></div>
              <span class="card-text card-text--translate"></span>
            </div>
          </div>
        </div>
        <div class="arrow arrow--right" id="arrow_right"></div>
      </div>
      <div class="hints">
      <div class="hints hint--translate_word"></div>
      <div class="hints hint--image"></div>
      <div class="hints hint--text_example"></div>
      </div>
      <div class="controls">
        <button class="button__main-game" id="difficult">Сложно</button>
        <button class="button__main-game" id="answer">Показать ответ</button>
        <button class="button__main-game" id ="delete">Удалить</button>
      </div>
      <div class="progress-bar">
        <div class="progress">
          <div class="progress-done"></div>
        </div>
      </div>
    </div>
  </section>
  `;
  return template;
};
