import { getButtons } from './getButtons';
export function continuee() {
  var randomWord = Math.ceil(Math.random() * 19);
  var randomPage = Math.ceil(Math.random() * 29);
  var randomGroup = Math.ceil(Math.random() * 5);
  var j = randomWord;
  var page = randomPage;
  var group = randomGroup;
  var t = 0;
  var b = 1;
  document
    .getElementsByClassName('game-block__footer-dont-know-button')[0]
    .addEventListener('click', function () {
      if (
        document.getElementsByClassName(
          'game-block__footer-dont-know-button'
        )[0].innerHTML == 'Далее →'
      ) {
        document.getElementsByClassName(
          'game-block__context-image'
        )[0].style.display = 'none';
        document.getElementsByClassName(
          'game-block__context-text'
        )[0].style.display = 'none';
        document.getElementsByClassName(
          'game-block__context-name'
        )[0].style.display = 'none';
        document.getElementsByClassName('game-block__body-cells')[0].innerHTML =
          '';
        document.getElementsByClassName(
          'game-block__body-cells-answers'
        )[0].innerHTML = '';
        document.getElementsByClassName(
          'game-block__header-volume'
        )[0].style.display = 'none';
        document.getElementsByClassName('game-block__header')[0].style.width =
          '100%';
        document.getElementsByClassName(
          'game-block__volume-block'
        )[0].style.width = '0%';
        t++;
        b++;
        document.getElementsByClassName(
          'wrapper-block__raund'
        )[0].innerHTML = `${b}/10`;
        if (b == 11) {
          document.body.innerHTML = '';
        }
        randomWord = Math.ceil(Math.random() * 19);
        j = randomWord;
        document.getElementsByClassName(
          'game-block__footer-dont-know-button'
        )[0].innerHTML = 'Не знаю :(';
        getButtons(page, group, j);
      } else {
        alert();
      }
    });
}
