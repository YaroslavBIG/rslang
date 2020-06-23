import { gameArrows } from './buttons/arrow';
import { buttonAnswer } from './buttons/buttonAnswer';
import { buttonDifficult } from './buttons/buttonDifficult';
import { buttonDelete } from './buttons/buttonDelete';
import { inputControl } from './inputControl';

export const addMainGameListners = () => {
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach((arrow) => arrow.addEventListener('click', (ev) => gameArrows(ev)));

  const userInput = document.querySelector('#user_input');
  userInput.addEventListener('input', (ev) => inputControl(ev));

  const answerButton = document.querySelector('#answer');
  answerButton.addEventListener('click', () => buttonAnswer());

  const difficult = document.querySelector('#difficult');
  difficult.addEventListener('click', () => buttonDifficult());

  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', () => buttonDelete());
};
