import { percentCheck } from './percentCheck';

export const createDetailsWindowStudy = (title, data) => `
  <div class="details-window__study-description">
    <p class="description__study-title">${title}</p>
    <p class="description__study-newWords">Новых слов: ${data.newWords}</p>
    <p class="description__study-today">Всего попыток: ${data.today}</p>
    <p class="description__study-wrong">Правильных: ${data.right}</p>
    <p class="description__study-right">Неправильных: ${data.wrong}</p>
    <p class="description__study-series">Лучшая серия: ${data.correctSeries}</p>
    <p class="description__study-right-combo">Процент правильных ответов: ${percentCheck(data.percent)}%</p>
  </div>
  <div class="details-window__close-btn" id="details-close-btn">Закрыть</div>
`;
