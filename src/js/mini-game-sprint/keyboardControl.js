import { rightChoice, wrongChoice } from './yourСhoice';

export const keyboardControl = (wordId, translateID) => {
  const listener = (event) => {
    if (event.code === 'ArrowLeft') {
      if (wordId !== translateID) {
        document.removeEventListener('keydown', listener);
        rightChoice();
      } else {
        document.removeEventListener('keydown', listener);
        wrongChoice();
      }
    }
    if (event.code === 'ArrowRight') {
      if (wordId === translateID) {
        document.removeEventListener('keydown', listener);
        rightChoice();
      } else {
        document.removeEventListener('keydown', listener);
        wrongChoice();
      }
    }
  };

  document.addEventListener('keydown', listener);
};
