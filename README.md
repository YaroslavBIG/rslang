## Запуск сборки

development mode: npm run dev
production: npm run prod

dev с source map и watcher;
prod с babel

## Extensions

Всем установить расширения Live Server и EditorConfig оба расширения есть в маркете VsCode!

## Структура 

- src -ней ведём разработку
    - assets 
    - js
        - /youreDirName/ -для каждый части которую разрабатываете делаете оддельную дирикторию
    - sass
        - components
            - /youreDirName/ -для каждой части которую разрабатываете делаете оддельную дирикторию
               - _example.scss всё названия scss файлов должны начинаться с _(нижнего подчёркивания) и обязательно прописать импорт в style.scss
        - style.scss - сюда пишем импорты стилей
    - index.html - остаётся пустой! можно подключать шрифты
    - script.js - скрипт отсюда выполняется при открытии страницы, сдесь будет init().
  
---

## Внимание добавлена автопроверка на ошибки eslint

Теперь перед каждым коммитом будет запущенна проверка на ошибки, и если они есть, коммит не создаётся.

#### для самостоятельной проверки добавлена команда: _npm run lint_
#### для исправления ошибок: _npm run fix_  (Исправит только те ошибки для которых возможен автофикс!)

---
## Внимание в связи с использованием роутера в приложении инстукция от разработчика

### Отрисовка компонента происходит за счет innerHTML. Что это значит:

1. При создании новой страницы, которую нужно отрисовывать, каждый должен дописать
<details><summary>вот эту конструкцию:</summary>

````JavaScript
{ path: '/(путь, по которому мы переходим), component: (название компонента,который используем) }
````

</details>

внутрь массива routes.

<details><summary>Список роутеров будет выглядеть примерно так</summary>
  
````JavaScript
const routes = [
  { path: '/', component: PromoComponent, },
  { path: '/auth', component: AuthComponent, },
  ect.
];
````
</details>




2. Что из себя представляет компонент:

````JavaScript
const PromoComponent = {
  render: () => {
    return createPromoPage();
  }
} 
````

Ничего сложного - ваша задача создать такой компонент, поменять имя и название функции, которая возвращается.

3. Самое интересное это функция, которая нам должна вернуть TEMPLATE LITERALS (шаблонную строку), как и что вы там делаете внутри (вызываете еще функции и тд), абсолютно все равно, главное, чтобы вернулась string (СТРОКА)

  <details><summary>Пример функции</summary>
  
  ````JavaScript
  function mainGameRender() {
  const template = `
  <section class="game_main__wrapper">
    <div class="game_main">
      <div class="main__field">
        <div class="card-game">
          <div class="card-text card-text--quest">
            <span class="sentence sentence--first-part"></span>
            <input class="sentence sentence--target-word"></input>
            <span class="sentence sentence--last-part"></span>
          </div>
          <div class="separator"></div>
          <span class="card-text card-text--translate"></span>
        </div>
        <div class="arrow arrow--left"></div>
        <div class="arrow arrow--right"></div>
      </div>
      <div class="translate__word"></div>
      <div class="progress-bar">
        <div class="progress">
          <div class="progress-done"></div>
        </div>
      </div>
    </div>
  </section>
  `;
  return template;
}
  ````
</details>

Возвращать section, а не div давайте придерживатся общих правил. 

4. Где прописывать функции, которые затрагивают что-то на вашей странице?

<details><summary>Будет вот такая штука:</summary>
  
````JavaScropt
switch(path) {
    case '/': {
        clickAuth();
    }
    case '/auth’: {
        controlForm();
      clickStart();
    }
  }
````  
Вы просто будете дописывать соответствующий case и там вызывать необходимые вам методы.

</details>

### Вышеуказанные функции и массив будет загружен в папку router.


### Изменение хэша происходит при клике на ССЫЛКУ! 

#### Поэтому если у вас на странице есть переход на другую страницу, то вы должны создать ссылку в виде
````html
<a href="#/auth" class="click-auth"></a>
```` 
в самом начале вашей TEMPLATE LITERALS, 
ИЛИ на том месте, где она должна быть, просто воспользоваться классом button, который оформит ее вам как кнопку. 

т.е. в href - пишите путь с #, в классе пишите click-ваш класс + дополнительные классы.
В первом случае

когда нужно будет перейти на другую страницу, даже если вы кликаете на button, то пишите:

```JavaScript
document.querySelector(‘.click-promo-main’).click();
```
таким образом вы щелкаете за юзера.

Во втором случае
если у нас ссылка не спрятана, а выглядит как кнопка, то вы НЕ ЩЕЛКАЕТЕ ЗА ЮЗЕРА, а просто даете ему самому тыкнуть и уже, таким образом, изменить хэш.

6. __НЕ ТРОГАЙТЕ блок с айди ‘root’__. 

Мы условились, что в нем будет происходить отрисовка, поэтому все ВСТАВЛЯЕТСЯ В НЕГО. __Стили для root уронят ЧУЖУЮ верстку. Уважайте сокомандников.__

7. НЕ вызывайте методы отрисовки самостоятельно. 
За вас это сделает роутер.

__В функции НЕ должно быть__ 

````JavaScript
document.getQuerySelector(‘#root’)
````
и 
````JavaScript
document.getQuerySelector(‘#root’).innerHtml =  
````

8. __НЕ трогайте script.js__

в нем будет ТОЛЬКО два метода, которые ОТСЛЕЖИВАЮТ изменение ХЭША и onload, 
там будет начальная загрузка данных, а именно выгрузка ВАМ юзера со всеми токенами и тд. 

9. Поскольку нет еще подключения работы с SPA. Вы можете изловчиться и воспользоваться

````JavaScript
window.onload = () => document.querySelector('body').innerHTML = (вызов своей страницы)();
````
Основная разметка вашего компонента должна быть переданна роутеру функцией возвращающей шаблонную строку!

