export const speakitGame = () => `
    <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
      <a href="#/main" class="close"></a>
        <span class="modal-header__name">Мини-игра SpeakIt</span>
      </div>
      <div class="modal-body">
        <p class="modal-body__description">SpeakIt - это мини-игра с помощью которой можно прослушать слова и проверить правильность их произношения.</p>
        <p>Кликайте по карточкам что бы прослушать их произношение.Кликайте на кнопку и произнесите слово.</p>
        <video class="modal-body__video" src="https://raw.githubusercontent.com/YaroslavBIG/rslang-data/master/video/speakit-game.mp4" controls></video>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start" id="speakitGame"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    </div>
      `;
