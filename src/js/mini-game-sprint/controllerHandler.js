import { rightChoice, wrongChoice } from './yourСhoice';

export const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');

  wrongBtn.onclick = () => ((wordId !== translateID) ? rightChoice() : wrongChoice());
  rightBtn.onclick = () => ((wordId === translateID) ? rightChoice() : wrongChoice());
};
