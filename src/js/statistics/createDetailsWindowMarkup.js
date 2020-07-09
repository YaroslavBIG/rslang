export const createDetailsWindowMarkup = (title) => `
  <div class="details-window__description">
    <p class="description__title">${title}</p>
    <p class="description__total">Всего попыток: 345</p>
    <p class="description__wrong">Правильных: 295</p>
    <p class="description__right">Неправильных: 50</p>
    <p class="description__right-combo">Процент правильных ответов: 14</p>
  </div>
  <div class="details-window__close-btn" id="details-close-btn">Закрыть</div>
`;
