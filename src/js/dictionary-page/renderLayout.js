export const renderLayout = () => {
  const template = `
    <div class="nav-dictionary">
    <div class="dictinonary-buttons">
      <ul class="nav-dictionary__list">
          <li class="nav-dictionary__item">
            <a href="#" class="nav-dictionary__link nav-dictionary__link_learning">
              Изучаемые слова
            </a>
          </li>
          <li class="nav-dictionary__item">
            <a href="#" class="nav-dictionary__link nav-dictionary__link_hard">
              Сложные слова
            </a>
          </li>
          <li class="nav-dictionary__item">
            <a href="#" class="nav-dictionary__link nav-dictionary__link_deleted">
              Удалённые слова
            </a>
          </li>
          <li class="nav-dictionary__item">
          <a href="#" class="nav-dictionary__link">Главная</a>
          </li>
      </ul>
    </div>
  </div>
  <div class="dictonary-count">
    Число слов:
    <span class="dictonary-count__numder"></span>
  </div>
  <div class="words-wrapper">
  </div>
    `;
  return template;
};
