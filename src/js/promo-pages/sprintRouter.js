export const sprintGame = () => `
      <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
        <a href="#/main" class="close"></a>
          <span class="modal-header__name">Мини-игра Sprint</span>
        </div>
        <div class="modal-body">
          <p class="modal-body__description">Sprint - это мини-игра в которой вам надо определить правильный ли перевод слова или нет.</p>
          <p>Продолжительность раунда 1 минута (есть индикация времени), в начале игры за каждое угаданное слово начисляется 10 баллов, каждые четыре правильных ответа подряд увеличивают количество баллов за каждое угаданное слово вдвое, при ошибке за угаданное слово снова начисляется только 10 баллов.</p>
          <video class="modal-body__video" src="https://raw.githubusercontent.com/YaroslavBIG/rslang-data/master/video/video-sprint-game.mp4" controls></video>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button-start" id="sprintGame"><span class="modal-footer__button-name">Начать</span></button>
        </div>
      </div>
      </div>
        `;
