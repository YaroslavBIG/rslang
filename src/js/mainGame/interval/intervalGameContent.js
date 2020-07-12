import { getSettings, setStorageFromObject, setWordNum } from '../utils';
import { progressBar } from '../progressBar';
import { getTextWidth, addComma, cutTags } from '../../utils';

export const intervalGameContent = async (data = null, wordNum = 0) => {
  if (data) sessionStorage.setItem('apiWords', JSON.stringify(data));
  setWordNum(wordNum);
  const settings = getSettings();

  const userWords = sessionStorage.getItem('apiWords');

  const apiWordsParse = JSON.parse(userWords);

  const { page, group } = apiWordsParse[wordNum];
  const collectionLen = apiWordsParse.length;
  const {
    textMeaning, word, wordTranslate, audio, audioMeaning, transcription, _id,
  } = apiWordsParse[wordNum];

  const id = apiWordsParse[wordNum].id ? apiWordsParse[wordNum].id : _id;

  const addToSessionStorage = {
    wordNum,
    page,
    group,
    word,
    id,
    audio,
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

  if (settings.example) textTranslateBlock.innerText = wordTranslate;

  const progress = wordNum;
  const progressAll = apiWordsParse.length;

  progressBar(progress, progressAll);

  wordBlock.focus();

  const cardGame = document.querySelector('.card-game');
  setTimeout(() => {
    cardGame.classList.add('transform--scale');
  }, 1000);
};
