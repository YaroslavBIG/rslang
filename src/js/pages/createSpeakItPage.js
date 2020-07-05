export const createSpeakItPage = () => `
<section class="game__outer">
<div class="game__header">
  <div class="game__levels">
    <span>Уровень: </span>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
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
    <div class="answers__item">
      <span class="item-audio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
      </span>
      <p class="item-word">word</p>
      <p class="item-transcription">transcr</p>
      <p class="item-translate">transl</p>
    </div>
    <div class="answers__item">
      <span class="item-audio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
      </span>
      <p class="item-word">word</p>
      <p class="item-transcription">transcr</p>
      <p class="item-translate">transl</p>
    </div>
    <div class="answers__item">
      <span class="item-audio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
      </span>
      <p class="item-word">word</p>
      <p class="item-transcription">transcr</p>
      <p class="item-translate">transl</p>
    </div>
    <div class="answers__item">
      <span class="item-audio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
      </span>
      <p class="item-word">word</p>
      <p class="item-transcription">transcr</p>
      <p class="item-translate">transl</p>
    </div>
    <div class="answers__item">
      <span class="item-audio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
      </span>
      <p class="item-word">word</p>
      <p class="item-transcription">transcr</p>
      <p class="item-translate">transl</p>
    </div>
  </div>
</div>
<div class="game__footer">
  <button class="button" id="restart-speak">Заново</button>
  <button class="button" id="start-speak">Начать говорить</button>
  <button class="button" id="results-speak">Результат</button>
</div>
</section>
`;
