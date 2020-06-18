import router from '../router/router.js';

function startButtons() {
  document.body.innerHTML += `
  <a href="#/speakit">speakit</a>
  <a href="#/english-puzzle">english-puzzle</a>
  <a href="#/savannah">savannh</a>
  <a href="#/listening">listening</a>
  <a href="#/sprint">sprint</a>
  <a href="#/constructor">constructor</a>
  <a href="#/" class="close"></a>
  `;

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router) || router();
  for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
    let link = document.getElementsByTagName('a')[i];
    link.addEventListener('click', function () {
      document.getElementsByClassName('close')[0].style.display = 'block';
    });
  }
  document
    .getElementsByClassName('close')[0]
    .addEventListener('click', function () {
      document.getElementsByClassName('close')[0].style.display = 'none';
    });
}

export default startButtons;
