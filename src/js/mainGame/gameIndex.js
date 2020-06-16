function gameIndex() {
  const root = document.querySelector('#root');
  const mainGameScreen = document.createDocumentFragment();
  const wrapperGame = document.createElement('div');
  wrapperGame.classList.add('game_main__wrapper');
  wrapperGame.innerHTML = `
    <div class="game_main">
      <div class="main__field">
        <div class="card-game">
          <div class="card-text card-text--quest">
            <span class="sentence sentence--first-part"></span>
            <span class="sentence sentence--target-word"></span>
            <span class="sentence sentence--last-part"></span>
          </div>
          <div class="separator"></div>
          <div class="card-text card-text--translate"></div>
        </div>
        <div class="arrow arrow--left"></div>
        <div class="arrow arrow--right"></div>
      </div>
      <div class="translate__word"></div>
      <div class="progress-bar"></div>
    </div>
  `;
  mainGameScreen.append(wrapperGame);
  root.innerHTML = '';
  root.append(mainGameScreen);
}

export default gameIndex;
