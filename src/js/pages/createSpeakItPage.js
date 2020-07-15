import { createSelect } from '../speak-it-game/creating/createSelect';

export const createSpeakItPage = () => `
<section class="game__outer">
<div class="game__header">
  <div class="game__levels">
    <span>Уровень: </span>
    ${createSelect(6, 'level')}
    <span> Раунд: </span>
    ${createSelect(30, 'round')}
  </div>
  <div class="game__score"></div>
</div>
<div class="game__body">
  <div class="container-hints">
    <div class="hints-image">
      <img src="./assets/img/speak-blank.jpg" alt="speak-blank">
    </div>
    <p class="hints-translation"></p>
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
<div class="game__modal-speak" id="speak-modal"></div>
</section>
`;
