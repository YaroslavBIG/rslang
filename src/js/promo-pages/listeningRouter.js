export const listeningGame = () => `
      <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
        <a href="#/main" class="close"></a>
          <span class="modal-header__name">Мини-игра Listening</span>
        </div>
        <div class="modal-body">
          <p class="modal-body__description">Listening - это мини-игра в которой пользователю нужно определить правильный перевод английского слова.</p>
          <p>Звучит слово на английском языке и вам надо угадать его перевод на русском языке.</p>
          <video class="modal-body__video" src="https://raw.githubusercontent.com/YaroslavBIG/rslang-data/master/video/video-audio-game.mp4" controls></video>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button-start" id="listeningGame"><span class="modal-footer__button-name">Начать</span></button>
        </div>
      </div>
      </div>
        `;
