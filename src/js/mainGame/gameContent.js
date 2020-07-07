import { cutTags, getTextWidth } from '../utils';
import { progressBar } from './progressBar';
import { dataUrl } from '../api';
import { setStorageFromObject } from './utils';

export const gameContent = async (data = null, wordNum = 0) => {
  const apiWords = () => sessionStorage.getItem('apiWords');

  if (!apiWords()) {
    sessionStorage.setItem('apiWords', JSON.stringify(data));
  }

  const userWords = apiWords();
  const apiWordsParse = data || JSON.parse(userWords);
  const { page, group } = apiWordsParse[wordNum];
  const collectionLen = apiWordsParse.length;

  const {
    textExample, textExampleTranslate, word, wordTranslate,
    image, textMeaningTranslate, audio, audioExample, audioMeaning, transcription, id,
  } = apiWordsParse[wordNum];

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
  // Temp
  const bodyIcon = {
    wordsPerDay: 50,
    optional: {
      icon: 'iconURL',
      newWordsPerDay: 10,
      maxCardsPerDay: 10,
      soundAutoPlay: true,
      showDeleteBtn: true,
      showStrongBtn: true,
      showAnswerBtn: true,
      cardInfo: {
        translation: true,
        meaning: true,
        example: true,
        transcription: false,
        associationImg: false,
      },
    },
  };
  // Temp
  setStorageFromObject(bodyIcon);
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

  wordBlock.focus();

  const cardGame = document.querySelector('.card-game');
  setTimeout(() => {
    cardGame.classList.add('transform--scale');
  }, 1000);
};
