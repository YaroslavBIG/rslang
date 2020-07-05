import { rightChoice, wrongChoice } from './yourСhoice';

export const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');
  const listenerRemove = (func) => document.removeEventListener('keydown', func);

  const wrongBtnChoice = () => {
    if (wordId !== translateID) {
      rightChoice();
    } else {
      wrongChoice();
    }
  };

  const rightBtnChoice = () => {
    if (wordId === translateID) {
      rightChoice();
    } else {
      wrongChoice();
    }
  };

  const listener = (event) => {
    listenerRemove(listener);
    if (event.code === 'ArrowLeft') {
      wrongBtnChoice();
    }
    if (event.code === 'ArrowRight') {
      rightBtnChoice();
    }
  };

  document.addEventListener('keydown', listener);
  setTimeout(() => {
    listenerRemove(listener);
  }, 5000);

  wrongBtn.onclick = () => {
    listenerRemove(listener);
    wrongBtnChoice();
  };

  rightBtn.onclick = () => {
    listenerRemove(listener);
    rightBtnChoice();
  };
};
