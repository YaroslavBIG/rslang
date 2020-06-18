// Components
const speakit = {
  render: () => {
    return `
        
  <div id="myModal" class="modal">

  <div class="modal-content">
    <div class="modal-header">
      <span class="close"></span>
      <span class="modal-header__name">Мини-игра SpeakIt</span> 
    </div>
    <div class="modal-body">
      <p class="modal-body__description">SpeakIt - это мини-игра с помощью которой можно прослушать слова и проверить правильность их произношения.</p>
      <p>Кликайте по карточкам что бы прослушать их произношение.Кликайте на кнопку и произнесите слово.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
    </div>
    <div class="modal-footer">
      <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
    </div>
  </div>
  
  </div>

    `;
  },
};

const englishPuzzle = {
  render: () => {
    return `
        
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <span class="close"></span>
        <span class="modal-header__name">Мини-игра English puzzle</span> 
      </div>
      <div class="modal-body">
        <p class="modal-body__description">English puzzle - это мини-игра в которой пазлы со словами надо сладывать в предложения.</p>
        <p>Перемещайте пазлы чтобы сложить их в предложения и проверить правильность их расположения.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    
    </div>
  
    `;
  },
};

const savannah = {
  render: () => {
    return `
        
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <span class="close"></span>
        <span class="modal-header__name">Мини-игра Savannah</span> 
      </div>
      <div class="modal-body">
        <p class="modal-body__description">Savannah - это мини-игра в которой за определённое время надо угадать перевод слова.</p>
        <p>Есть четыре варианта перевода слова и вам надо угадать слово за определённое время, также у вас есть несколько попыток.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    
    </div>
  
    `;
  },
};

const listening = {
  render: () => {
    return `
        
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <span class="close"></span>
        <span class="modal-header__name">Мини-игра Listening</span> 
      </div>
      <div class="modal-body">
        <p class="modal-body__description">Listening - это мини-игра в которой пользователю нужно определить правильный перевод английского слова.</p>
        <p>Звучит слово на английском языке и вам надо угадать его перевод на русском языке.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    
    </div>
  
      `;
  },
};

const sprint = {
  render: () => {
    return `
        
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <span class="close"></span>
        <span class="modal-header__name">Мини-игра Sprint</span> 
      </div>
      <div class="modal-body">
        <p class="modal-body__description">Sprint - это мини-игра в которой вам надо определить правильный ли перевод слова или нет.</p>
        <p>Продолжительность раунда 1 минута (есть индикация времени), в начале игры за каждое угаданное слово начисляется 10 баллов, каждые четыре правильных ответа подряд увеличивают количество баллов за каждое угаданное слово вдвое, при ошибке за угаданное слово снова начисляется только 10 баллов.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    
    </div>
  
      `;
  },
};

const constructor = {
  render: () => {
    return `
        
    <div id="myModal" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <span class="close"></span>
        <span class="modal-header__name">Мини-игра Constructor</span> 
      </div>
      <div class="modal-body">
        <p class="modal-body__description">Constructor - это мини-игра в которой надо собирать слова с помощью предоставленных букв.</p>
        <p>Вы имеете карточки с буквами кликая по которым вы собираете буквы, кликать по карточкам надо в правильном порядке.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
      </div>
    </div>
    
    </div>
  
      `;
  },
};

/*const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};*/

// Routes
const routes = [
  { path: '/speakit', component: speakit },
  { path: '/english-puzzle', component: englishPuzzle },
  { path: '/savannah', component: savannah },
  { path: '/listening', component: listening },
  { path: '/sprint', component: sprint },
  { path: '/constructor', component: constructor },
];

const parseLocation = (hash) => hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || false;

const router = () => {
  const path = parseLocation(document.location.hash);
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  document.getElementById('root').innerHTML = component.render();
};

export default router;
