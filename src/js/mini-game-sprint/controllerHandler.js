import { rightChoice, wrongChoice } from './yourСhoice';

export const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');

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

  wrongBtn.onclick = () => {
    if (wordId !== translateID) {
      document.removeEventListener('keydown', listener);
      rightChoice();
    } else {
      document.removeEventListener('keydown', listener);
      wrongChoice();
    }
  };

  rightBtn.onclick = () => {
    if (wordId === translateID) {
      document.removeEventListener('keydown', listener);
      rightChoice();
    } else {
      document.removeEventListener('keydown', listener);
      wrongChoice();
    }
  };
};
