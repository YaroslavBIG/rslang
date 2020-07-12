import { percentCheck } from './percentCheck';

export const createDetailsWindowMarkup = (title, data) => {
  if (data) {
    return `
  <div class="details-window__description">
    <p class="description__title">${title}</p>
    <p class="description__total">Всего попыток: ${data.total}</p>
    <p class="description__wrong">Правильных: ${data.right}</p>
    <p class="description__right">Неправильных: ${data.wrong}</p>
    <p class="description__right-combo">Процент правильных ответов: ${percentCheck(data.percent)}%</p>
  </div>
  <div class="details-window__close-btn" id="details-close-btn">Закрыть</div>
`;
  }
};
