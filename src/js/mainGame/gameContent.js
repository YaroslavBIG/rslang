import { cutTags, getTextWidth } from '../utils';
import { progressBar } from './progressBar';
import { dataUrl } from '../api';

export const gameContent = (data = null, wordNum = 0) => {
  const apiWords = () => sessionStorage.getItem('apiWords');

  sessionStorage.setItem('wordNum', wordNum);

  if (!apiWords()) {
    sessionStorage.setItem('apiWords', JSON.stringify(data));
  }

  const userWords = apiWords();
  const apiWordsParse = data || JSON.parse(userWords);
  const { page, group } = apiWordsParse[wordNum];

  sessionStorage.setItem('page', page);
  sessionStorage.setItem('group', group);
  sessionStorage.setItem('collectionLen', apiWordsParse.length);
  const {
    textExample, textExampleTranslate, word, wordTranslate, image, textMeaningTranslate,
  } = apiWordsParse[wordNum];

  sessionStorage.setItem('word', word);

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
  img.onload = () => {
    wordImageBlock.innerHTML = '';
    wordImageBlock.append(img);
  };

  wordTextExample.innerText = textMeaningTranslate;

  const progress = wordNum;
  const progressAll = apiWordsParse.length;

  firstPartBlock.innerText = textBeforeWord;
  wordBlock.innerHTML = '';
  wordBlock.style.width = `${textWidth}px`;
  lastPartBlock.innerText = textAfterWord;
  textTranslateBlock.innerText = textExampleTranslate;
  wordTranslateBlock.innerText = wordTranslate;
  progressBar(progress, progressAll);
};
