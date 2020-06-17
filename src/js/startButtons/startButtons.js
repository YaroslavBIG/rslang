import games from './buttonCheck.js';

function startButtons() {
  document.body.innerHTML += `
  <button name="speakit">speakit</button>
  <button name="english-puzzle">english-puzzle</button>
  `;
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
      games(button.name);
    });
  }
}

export default startButtons;
