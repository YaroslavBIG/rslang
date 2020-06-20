import { rightChoice, wrongChoice } from './yourСhoice';
import { keyboardControl } from './keyboardControl';

export const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');

  keyboardControl();
  wrongBtn.onclick = () => ((wordId !== translateID) ? rightChoice() : wrongChoice());
  rightBtn.onclick = () => ((wordId === translateID) ? rightChoice() : wrongChoice());
};
