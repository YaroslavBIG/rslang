var randomWord = Math.ceil(Math.random() * 19);
var randomPage = Math.ceil(Math.random() * 29);
var randomGroup = Math.ceil(Math.random() * 5);
var j = randomWord;
var page = randomPage;
var group = randomGroup;
var t = 0;
var b = 1;
export const getButtons = async (page, group, j) => {
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
          document.getElementsByClassName(
            'game-block__context-image'
          )[0].src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${data[j].image}`;
          document.getElementsByClassName(
            'game-block__context-image'
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text'
          )[0].style.display = 'block';
          document.getElementsByClassName(
            'game-block__context-text'
          )[0].innerHTML = data[j].textExample;
          document.getElementsByClassName(
            'game-block__context-name'
          )[0].style.display = 'block';
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
