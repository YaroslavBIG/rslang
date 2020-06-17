function getPromoPage(name, description, rules, video) {
  document.body.innerHTML += `
  a
  <div id="myModal" class="modal">

  <div class="modal-content">
    <div class="modal-header">
      <span class="close"></span>
      <span class="modal-header__name">Мини-игра ${name}</span> 
    </div>
    <div class="modal-body">
      <p class="modal-body__description">${description}</p>
      <p>${rules}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
    </div>
    <div class="modal-footer">
      <button class="modal-footer__button-start"><span class="modal-footer__button-name">Начать</span></button>
    </div>
  </div>
  
  </div>

  `;
  var modal = document.getElementById('myModal');

  var span = document.getElementsByClassName('close')[0];

  var buttons = document.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  }

  span.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}

export default getPromoPage;
