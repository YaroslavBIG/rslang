export const createSpeakItPage = () => `
<section class="game__outer">
<div class="game__header">
  <div class="game__levels">
    <span>Уровень: </span>
    <select>
      <option data-select="0">1</option>
      <option data-select="1">2</option>
      <option data-select="2">3</option>
      <option data-select="3">4</option>
      <option data-select="4">5</option>
      <option data-select="5">6</option>
    </select>
  </div>
  <div class="game__score"></div>
</div>
<div class="game__body">
  <div class="container-hints">
    <div class="hints-image">
      <img src="./assets/img/speak-blank.jpg" alt="speak-blank">
    </div>
    <p class="hints-translation">some trans</p>
    <input type="text" class="hints-input hidden" readonly>
  </div>
  <div class="answers">
  </div>
  <audio class="audio"></audio>
</div>
<div class="game__footer">
  <button class="button" id="restart-speak">Заново</button>
  <button class="button" id="start-speak">Начать говорить</button>
  <button class="button" id="results-speak">Результат</button>
</div>
</section>
`;
