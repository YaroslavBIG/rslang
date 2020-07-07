export const intervalRepeatPromoPage = () => `
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <a href="#/" class="close"></a>
      <span class="modal-header__name">Метод интервального повторения</span>
    </div>
    <div class="modal-body">
      <h3>Система Лейтнера и карточки для повторений</h3>
      <p class="modal-body__description">
        Метод Лейтнера является одним из ярких примеров применения интервальных
        повторений с помощью бумажных карточек. Его используют при изучении
        иностранных слов, которые повторяют в разные промежутки, в зависимости
        от результата воспроизведения по памяти.
      </p>
      <h3>Описание метода</h3>
      <p class="modal-body__description">
        Суть метода такова что вы пишите на карточке слово и на обратной стороне
        его перевод, запоминаете их и в зависимости от сложности этих слов
        кладёте их в коробки, коробка в которой посложее слова вы повторяете
        чаще, а в которой полегче то реже, но это займёт много карточек, а наш
        сервис предоставляет это всё в готовом виде.
      </p>
      <h3>Виды интервалов</h3>
      <ul class="modal-body__list">
        <li>Снова - повторение меньше чем через 10 минут</li>
        <br />
        <li>Трудно - повторение через 13 дней</li>
        <br />
        <li>Хорошо - повторение через полтора месяца</li>
        <br />
        <li>Легко - повторение через три месяца</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="modal-footer__button-start" id="constructorGame">
        <span class="modal-footer__button-name" id="modal-footer__continue"
          >Продолжить</span
        >
      </button>
    </div>
  </div>
</div>
`;
