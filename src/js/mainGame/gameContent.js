import { cutTags, getTextWidth } from '../utils';
import { progressBar } from '.';
import { dataUrl } from '../api';

export const gameContent = (data, wordNum = 0) => {
  console.log(data);
  const {
    textExample, textExampleTranslate, word, wordTranslate, image, textMeaningTranslate,
  } = data[wordNum];
  const cardQuestBlock = document.querySelector('.card-text--quest');
  const firstPartBlock = document.querySelector('.sentence--first-part');
  const wordBlock = document.querySelector('.sentence--target-word');
  const lastPartBlock = document.querySelector('.sentence--last-part');
  const textTranslateBlock = document.querySelector('.card-text--translate');
  const wordTranslateBlock = document.querySelector('.hint--translate_word');
  const wordImageBlock = document.querySelector('.hint--image');
  const wordTextExample = document.querySelector('.hint--text_example');

  const font = cardQuestBlock.computedStyleMap().get('font').toString();

  const textArr = textExample.split(' ').map((words) => cutTags(words));
  const targetWordIndex = textArr.indexOf(word);
  const textLen = textArr.length - 1;
  const textBeforeWord = targetWordIndex === 0 ? '' : textArr.slice(0, targetWordIndex).join(' ');
  const textAfterWord = targetWordIndex === textLen ? '' : textArr.slice(targetWordIndex + 1, textLen).join(' ');
  const textWidth = getTextWidth(word, font);

  const img = new Image();
  img.src = `${dataUrl}${image}`;
  img.onload = wordImageBlock.append(img);

  wordTextExample.innerText = textMeaningTranslate;

  const progress = wordNum;
  const progressAll = data.length;

  // const img = new Image();
  firstPartBlock.innerText = textBeforeWord;
  wordBlock.style.width = `${textWidth}px`;
  lastPartBlock.innerText = textAfterWord;
  textTranslateBlock.innerText = textExampleTranslate;
  wordTranslateBlock.innerText = wordTranslate;
  progressBar(progress, progressAll);
  // console.log(font);
  // console.log(textWidth);
  // console.log(textArr);
  // console.log(textWithWord);
  // console.log(textWithoutWord);
  // console.log(textExampleTranslate);
  // console.log(textBeforeWord);
  // console.log(textAfterWord);
  // // wordsField.append(words);
};
