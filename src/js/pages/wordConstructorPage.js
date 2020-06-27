export const wordConstructorPage = () => `
<div class="wrapper-block">
  <div class="wrapper-block__settings-and-raunds-description">
    <input type="checkbox" class="wrapper-block__checkbox">
    <span class="wrapper-block__autopronunciation">Автопроизношение</span>
    <span class="wrapper-block__raund">1/10</span>
  </div>
  <div class="game-block">
    <div class="game-block__header">
      <p class="game-block__header-name"></p>
      <p class="game-block__header-description">Собери слово из букв</p>
    </div>
    <div class="game-block__body">
      <div class="game-block__body-cells">
      </div>
      <div class="game-block__body-cells-answers">
      </div>
    </div>
    <div class="game-block__footer">
      <span class="game-block__enter">Enter</span>
      <button class="game-block__footer-dont-know-button">Не знаю :(</button>
    </div>
  </div>
</div>
`;
