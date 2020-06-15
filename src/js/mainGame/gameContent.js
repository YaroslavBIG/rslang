import cutTags from '../utils/cutTags';
import randomArr from '../utils/random';

function gameContent(data) {
  console.log(data);
  // const gameField = document.querySelector('.game-field');
  const wordsField = document.querySelector('.words');
  const { textExample } = data[0];
  console.log(textExample);
  const textArr = textExample.split(' ').map((word) => cutTags(word));
  console.log(textArr);
  const random = randomArr(textArr.length);
  console.log(random);
  const words = document.createDocumentFragment();
  random.forEach((num, idx) => {
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word--unsort', `word-${idx}`);
    const word = textArr[num].toLowerCase();
    wordContainer.innerText = word;
    words.append(wordContainer);
  });
  wordsField.append(words);
}

export default gameContent;
