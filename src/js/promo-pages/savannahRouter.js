export const savannahGame = () => `
      <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
        <a href="#/main" class="close"></a>
          <span class="modal-header__name">Мини-игра Savannah</span>
        </div>
        <div class="modal-body">
          <p class="modal-body__description">Savannah - это мини-игра в которой за определённое время надо угадать перевод слова.</p>
          <p>Есть четыре варианта перевода слова и вам надо угадать слово за определённое время, также у вас есть несколько попыток.</p>
          <video class="modal-body__video" src="https://raw.githubusercontent.com/YaroslavBIG/rslang-data/master/video/video-savannah-game.mp4" controls></video>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button-start" id="savannahGame"><span class="modal-footer__button-name">Начать</span></button>
        </div>
      </div>
      </div>
      `;
