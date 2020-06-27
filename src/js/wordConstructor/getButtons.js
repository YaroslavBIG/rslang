var randomWord = Math.ceil(Math.random() * 19);
var randomPage = Math.ceil(Math.random() * 29);
var randomGroup = Math.ceil(Math.random() * 5);
var j = randomWord;
var page = randomPage;
var group = randomGroup;
var t = 0;
var b = 1;
export const getButtons = async (page, group) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  document.getElementsByClassName('game-block__header-name')[0].innerHTML =
    data[j].wordTranslate;
  var word = data[j].word;
  var letterArr = word.split('');
  letterArr = letterArr.sort();
  document.getElementsByClassName(
    'game-block__body-cells-answers'
  )[0].innerHTML = '';
  document.getElementsByClassName('game-block__body-cells')[0].innerHTML = '';
  for (let i = 0; i < word.length; i++) {
    document.getElementsByClassName(
      'game-block__body-cells-answers'
    )[0].innerHTML += `<button class="game-block__body-cell-answer">${letterArr[i]}</button>`;

    document.getElementsByClassName(
      'game-block__body-cells'
    )[0].innerHTML += `<div class="game-block__body-cell"></div>`;
  }
  var n = 0;
  var buttons = document.getElementsByClassName('game-block__body-cell-answer');
  var letterArr = word.split('');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
      if (button.innerHTML == letterArr[0]) {
        button.style.background = '#28C38A';
        document
          .getElementsByClassName('game-block__body-cell')
          [n].appendChild(button);
        button.style.margin = '0 auto';
        button.setAttribute('disabled', 'true');
        button.style.cursor = 'auto';
        letterArr.splice(0, 1);
        console.log(letterArr);
        console.log(letterArr[0]);
        n++;
        if (letterArr.length == 0) {
          document.getElementsByClassName(
            'game-block__footer-dont-know-button'
          )[0].innerHTML = 'Далее →';
          if (
            document.getElementsByClassName(
              'game-block__footer-dont-know-button'
            )[0].innerHTML == 'Далее →'
          ) {
            document
              .getElementsByClassName('game-block__footer-dont-know-button')[0]
              .addEventListener('click', function () {
                document.getElementsByClassName(
                  'game-block__body-cells'
                )[0].innerHTML = '';
                document.getElementsByClassName(
                  'game-block__body-cells-answers'
                )[0].innerHTML = '';
                t++;
                b++;
                document.getElementsByClassName(
                  'wrapper-block__raund'
                )[0].innerHTML = `${b}/10`;
                if (b == 10) {
                  document.body.innerHTML = '';
                }
                randomWord = Math.ceil(Math.random() * 19);
                j = randomWord;
                document.getElementsByClassName(
                  'game-block__footer-dont-know-button'
                )[0].innerHTML = 'Не знаю :(';
                getButtons(page, group);
              });
          }
        }
      } else {
        button.style.backgroundColor = '#ee5838';
        setTimeout(function () {
          button.style.backgroundColor = '#2582e7';
        }, 500);
      }
    });
  }
};
