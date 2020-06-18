import router from '../router/router.js';

function startButtons() {
  document.body.innerHTML += `
  <a href="#/speakit">speakit</a>
  <a href="#/english-puzzle">english-puzzle</a>
  <a href="#/savannah">savannah</a>
  <a href="#/listening">listening</a>
  <a href="#/sprint">sprint</a>
  <a href="#/constructor">constructor</a>
  `;

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router) || router();
}

export default startButtons;
