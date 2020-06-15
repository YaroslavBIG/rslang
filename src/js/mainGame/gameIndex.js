function gameIndex() {
  const mainGameScreen = document.createDocumentFragment();
  const wrapperGame = document.createElement('div');
  wrapperGame.innerHTML = `
  <div class="wrapper">
  <header>
    <nav>
      <div class="level">
        <label for="level">Level</label>
        <select name="level" id="level">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

      </div>
      <div class="page">
        <label for="page">Page</label>
        <select name="page" id="page">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </nav>
    <div class="controls">

      </div>
    </div>
  </header>
  <main>
    <div class="example">
      <div class="example--button">
        <a href="#" class="button">
          <img src="./img/volume_up-black-24dp.svg" alt="auto play example" title="auto play example">
        </a>
      </div>
      <div class="example--text"></div>
    </div>
    <div class="game-field">
    <div class="field--puzzle field-1"></div>
    <div class="field--puzzle field-2"></div>
    <div class="field--puzzle field-3"></div>
    <div class="field--puzzle field-4"></div>
    <div class="field--puzzle field-5"></div>
    <div class="field--puzzle field-6"></div>
    <div class="field--puzzle field-7"></div>
    <div class="field--puzzle field-8"></div>
    <div class="field--puzzle field-9"></div>
    <div class="field--puzzle field-10"></div>
    </div>
  </main>
  <footer>
    <div class="words"></div>
    <div class="buttons">
      <a href="#" class="button button--answer button--dknow">I don't know</a>
      <a href="#" class="button button--answer button--check">Check</a>
    </div>
  </footer>
</div>
  `;

  mainGameScreen.append(wrapperGame);
  document.body.innerHTML = '';
  document.body.append(mainGameScreen);
}

export default gameIndex;
