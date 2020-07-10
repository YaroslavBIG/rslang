export const createShortStatistic = (obj) => {
  const { total, right, wrong } = obj;

  return `<div class="modal-speak__inner" id="result-block">
  <div class="modal-speak__description">
      <p>Всего ответов: ${total}</p>
      <p>Правильных ответов: ${right}</p>
      <p>Неправильных ответов: ${wrong}</p>
  </div>
  <div class="modal-speak__controls">
        <button class="button" id="again">Повторить</button>
        <button class="button" id="next">Продолжить без повторения</button>
        <div class="button" id="done"><a href="#/main">Закончить</a></div>
      </div>
</div>`;
};
