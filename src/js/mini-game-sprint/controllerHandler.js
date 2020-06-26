import { rightChoice, wrongChoice } from './yourСhoice';

export const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');
  const listenerRemove = (func) => document.removeEventListener('keydown', func);

  const listener = (event) => {
    listenerRemove(listener);
    if (event.code === 'ArrowLeft') {
      if (wordId !== translateID) {
        rightChoice();
      } else {
        wrongChoice();
      }
    }
    if (event.code === 'ArrowRight') {
      if (wordId === translateID) {
        rightChoice();
      } else {
        wrongChoice();
      }
    }
  };

  document.addEventListener('keydown', listener);
  setTimeout(() => {
    listenerRemove(listener);
  }, 5000);

  wrongBtn.onclick = () => {
    listenerRemove(listener);
    if (wordId !== translateID) {
      rightChoice();
    } else {
      wrongChoice();
    }
  };

  rightBtn.onclick = () => {
    listenerRemove(listener);
    if (wordId === translateID) {
      rightChoice();
    } else {
      wrongChoice();
    }
  };
};
