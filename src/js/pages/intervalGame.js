export const intervalGameRender = () => `
  <section class="interval_main__wrapper">
  <div class="game_main__modal">
  <div class="modal__inner">
    <div class="modal__inner--wrapper" id="modal">

    </div>
    <div class="modal__button_block">
      <div class="button__main-game button__main button"><a href="#/main">Выход</a></div>
      <button class="button__main-game button">Продолжить</button>
    </div>
  </div>
</div>
  <div class="game_main__wrapper_inner">
    <div class="game_main">
      <div class="arrow arrow--left" id="arrow_left"></div>
      <div class="card_wrapper">
        <div class="main__field">
          <div class="card-game">
              <div class="card-text card-text--quest">
                <span class="sentence sentence--first-part"></span>
                <div class="sentence sentence--target-word" id="user_input"contenteditable></div>
                <span class="sentence sentence--last-part"></span>
              </div>
              <div class="separator"><hr></div>
              <div class="card-text"><span class="card-text--translate"></span></div>
            </div>
          </div>
        </div>
        <div class="arrow arrow--right" id="arrow_right"></div>
      </div>
      <div class="controls">
        <div class="controls__button">
        <button class="button__main-game button" id="answer">Показать ответ</button>
        </div>
        <div class="word__diff" id="wordDiff">
          <button class="button__main-game button intervals_diff">Снова</button>
          <button class="button__main-game button intervals_diff">Трудно</button>
          <button class="button__main-game button intervals_diff">Хорошо</button>
          <button class="button__main-game button intervals_diff">Легко</button>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress">
          <div class="progress-done"></div>
        </div>
      </div>
    </div>
    </div>
  </section>
`;