import { getWords } from '../api/index';
import { randomInteger } from '../utils/index';
import { cutWord } from './cutWord';
import { volume } from './volume';
import { dontKnowButton } from './dontKnowButton';
import { autoProponuciation } from './autoPronunciation';

export const fetchConstructorGameData = async (page, group) => {
  const gameData = await getWords(page, group, 10, 2);
  console.log(gameData);
  if (gameData) {
    const wordsArray = gameData.map((dataElement) => dataElement.word);
    const translateWordsArray = gameData.map(
      (dataElement) => dataElement.wordTranslate
    );
    const imageArray = gameData.map((dataElement) => dataElement.image);
    const textExampleArray = gameData.map(
      (dataElement) => dataElement.textExample
    );
    const audioArray = gameData.map((dataElement) => dataElement.audio);
    const random = randomInteger(0, 1);
    const randomAudio = audioArray[random];
    const randomTextExample = textExampleArray[random];
    const randomImage = imageArray[random];
    const randomWord = wordsArray[random];
    const randomTranslate = translateWordsArray[random];

    cutWord(
      randomWord,
      randomImage,
      randomTextExample,
      randomTranslate,
      randomAudio
    );
    volume(randomAudio);
    dontKnowButton(
      randomWord,
      randomTranslate,
      randomAudio,
      randomTextExample,
      randomImage
    );
    autoProponuciation();
  }
};
