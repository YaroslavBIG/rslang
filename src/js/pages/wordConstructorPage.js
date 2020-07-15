export const wordConstructorPage = () => `
<div class="wrapper-block">
  <div class="wrapper-block__settings-and-raunds-description">
    <label><input type="checkbox" class="wrapper-block__checkbox" id="checkbox"><label for="checkbox"><span class="wrapper-block__autopronunciation">Автопроизношение</label></label>
    <span class="wrapper-block__raund">1/10</span>
    <a href="#/main" id="confirmed"></a>
    <a href="#/main/word-puzzle" id="cancellation"></a>
    <img src="./assets/black-cross.png" class="wrapper-block__black-cross">
  </div>
  <div class="game-block">
    <input type="submit" value="Выбрать" id="choice">
    <select id="select">
      <option value="" disabled selected>Выбрать уровень сложности</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <div class="game-block__header">
      <div class="game-block__volume-block">
        <img src="./assets/img/volume.svg.png" class="game-block__header-volume">
      </div>
      <div class="game-block__header-context">
        <p class="game-block__header-name"></p>
        <p class="game-block__header-description">Собери слово из букв</p>
      </div>
    </div>
    <div class="game-block__body">
      <div class="game-block__body-cells">
      </div>
      <div class="game-block__body-cells-answers">
      </div>
      <div class="game-block__body-context">
      <img src="" class="game-block__context-image">
      <p class="game-block__context-name">Контекст</p>
      <span class="game-block__context-text"></span>
      </div>
    </div>
    <div class="game-block__footer">
      <span class="game-block__enter">Enter</span>
      <button class="game-block__footer-dont-know-button">Не знаю :(</button>
      <button class="game-block__footer-continue">Далее →</button>
    </div>
  </div>
  <div class="statistic-block">
    <span>Результат:</span>
    <div class="statistic-block__errors"><p class="statistic-block__error">Ошибок: 0</p></div>
    <div class="statistic-block__corrects"><p class="statistic-block__correct">Знаю: 0</p></div>
    <button class="statistic-block__restart">Продолжить тренировку</button>
    <a href="#/main" class="statistic-block__return">Вернуться к списку мини-игр</a>
  </div>
</div>
`;
