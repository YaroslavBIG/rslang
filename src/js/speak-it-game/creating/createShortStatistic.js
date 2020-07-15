export const createShortStatistic = (obj, isResult) => {
  const { total = 10, right, wrong } = obj;
  const resultWrong = isResult ? `<p>Непроизнесенных слов:
    ${wrong.length}</p> <div id="speak-items"></div>` : `<p>Неправильных ответов: ${wrong}</p>`;

  const resultControls = isResult ? `
    <button class="button" id="return">Вернуться</button>
  ` : `
    <button class="button" id="again">Повторить изученные</button>
    <button class="button" id="next">Продолжить без повторения</button>
    <div class="button" id="done"><a href="#/main">Закончить</a></div>`;

  return `<div class="modal-speak__inner" id="result-block">
  <div class="modal-speak__description" id="speak-description">
      <p>Всего ответов: ${total}</p>
      <p>Правильных ответов: ${right}</p>
      ${resultWrong}
  </div>
  <div class="modal-speak__controls">
      ${resultControls}
  </div>
  </div>`;
};
