const speakit = () => {
  return `
          
    <div id="myModal" class="modal">
  
    <div class="modal-content">
      <div class="modal-header">
      <a href="#/" class="close"></a>
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
};
export default speakit;
