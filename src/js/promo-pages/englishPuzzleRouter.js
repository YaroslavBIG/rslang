export const englishPuzzleGame = () => `
      <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
        <a href="#/main" class="close"></a>
          <span class="modal-header__name">Мини-игра English puzzle</span>
        </div>
        <div class="modal-body">
          <p class="modal-body__description">English puzzle - это мини-игра в которой пазлы со словами надо сладывать в предложения.</p>
          <p>Перемещайте пазлы чтобы сложить их в предложения и проверить правильность их расположения.</p>
          <iframe src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
        </div>
        <div class="modal-footer">
          <p>Данная мини-игра находится в разработке, но у нас есть и другие замечательные игры</p>
          <button class="modal-footer__button-start" id="englishPuzzleGame"><span class="modal-footer__button-name"><a href="#/main" class="modal-footer__no-game">Меню</a></span></button>
        </div>
      </div>
      </div>
      `;
