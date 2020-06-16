import cutTags from '../utils/cutTags';

function gameContent(data, wordNum = 0) {
  console.log(data);
  // const gameField = document.querySelector('.game-field');
  // const wordsField = document.querySelector('.words');
  const {
    textExample, word, textExampleTranslate,
  } = data[wordNum];
  console.log(textExample);
  const textArr = textExample.split(' ').map((words) => cutTags(words));
  const textWithWord = textArr.join(' ');
  const textWithoutWord = textArr.filter((w) => w !== word).join(' ');
  console.log(textArr);
  console.log(textWithWord);
  console.log(textWithoutWord);
  console.log(textExampleTranslate);
  // wordsField.append(words);
}

export default gameContent;
