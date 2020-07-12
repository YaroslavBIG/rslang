import { cutTags, getTextWidth, addComma } from '../utils';
import { progressBar } from './progressBar';
import { dataUrl } from '../api';
import { setStorageFromObject } from './utils';
import { getSettings } from './utils/getSettings';
import { setWordNum } from './utils/setWordNum';

export const gameContent = async (data = null, wordNum = 0) => {
  if (data) sessionStorage.setItem('apiWords', JSON.stringify(data));
  setWordNum(wordNum);
  const settings = getSettings();

  const buttonDifficult = document.querySelector('#difficult');
  const buttonAnswer = document.querySelector('#answer');
  const buttonDelete = document.querySelector('#delete');

  if (settings.showStrongBtn) buttonDifficult.setAttribute('style', 'display: initial');
  if (settings.showAnswerBtn) buttonAnswer.setAttribute('style', 'display: initial');
  if (settings.showDeleteBtn) buttonDelete.setAttribute('style', 'display: initial');

  const userWords = sessionStorage.getItem('apiWords');

  const apiWordsParse = JSON.parse(userWords);

  const { page, group } = apiWordsParse[wordNum];
  const collectionLen = apiWordsParse.length;
  const {
    textMeaning, textExampleTranslate, word, wordTranslate,
    image, textMeaningTranslate, audio, audioExample, audioMeaning, transcription, _id,
  } = apiWordsParse[wordNum];

  const id = apiWordsParse[wordNum].id ? apiWordsParse[wordNum].id : _id;

  const addToSessionStorage = {
    wordNum,
    page,
    group,
    word,
    id,
    audio,
    audioExample,
    audioMeaning,
    wordTranscription: transcription,
    collectionLen,
  };
  setStorageFromObject(addToSessionStorage);

  const cardQuestBlock = document.querySelector('.card-text--quest');
  const firstPartBlock = document.querySelector('.sentence--first-part');
  const wordBlock = document.querySelector('.sentence--target-word');
  const lastPartBlock = document.querySelector('.sentence--last-part');
  const textTranslateBlock = document.querySelector('.card-text--translate');
  const wordTranslateBlock = document.querySelector('.hint--translate_word');
  const wordImageBlock = document.querySelector('.hint--image');
  const wordTextExample = document.querySelector('.hint--text_example');

  const font = cardQuestBlock.computedStyleMap().get('font').toString();

  const textArr = textMeaning.split(' ').map((words) => cutTags(words.toLowerCase()));

  let targetWordIndex = textArr.indexOf(word.toLowerCase());
  if (targetWordIndex === -1) targetWordIndex = textArr.indexOf(addComma(word).toLowerCase());

  const textLen = textArr.length - 1;

  const textBeforeWord = targetWordIndex === 0 ? '' : textArr.slice(0, targetWordIndex).join(' ');
  const textAfterWord = targetWordIndex === textLen ? '' : textArr.slice(targetWordIndex + 1, textLen).join(' ');
  const textWidth = getTextWidth(word, font);

  firstPartBlock.innerText = textBeforeWord;
  wordBlock.innerHTML = '';
  wordBlock.style.width = `${textWidth}px`;
  lastPartBlock.innerText = textAfterWord;

  if (settings.associationImg) {
    const img = new Image();
    img.src = `${dataUrl}${image}`;
    img.onload = () => {
      wordImageBlock.innerHTML = '';
      wordImageBlock.append(img);
    };
  }

  if (settings.meaning) wordTextExample.innerText = textExampleTranslate;

  if (settings.example) textTranslateBlock.innerText = textMeaningTranslate;

  if (settings.translation) wordTranslateBlock.innerText = wordTranslate;

  const progress = wordNum;
  const progressAll = apiWordsParse.length;

  progressBar(progress, progressAll);

  wordBlock.focus();

  const cardGame = document.querySelector('.card-game');
  setTimeout(() => {
    cardGame.classList.add('transform--scale');
  }, 1000);
};
