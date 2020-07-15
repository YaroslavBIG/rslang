import { gameArrows } from './buttons/arrow';
import { buttonAnswer } from './buttons/buttonAnswer';
import { buttonsHardDel } from './buttons/buttonsHardDel';
import { inputControl } from './inputControl';
import { pressEnterKey } from './buttons/enter';
import { buttonsDiff } from './interval';

export const addMainGameListners = (intervals = false) => {
  if (!intervals) {
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach((arrow) => arrow.addEventListener('click', (ev) => gameArrows(ev)));

    const difficult = document.querySelector('#difficult');
    difficult.addEventListener('click', () => buttonsHardDel('hard'));

    const deleteButton = document.querySelector('#delete');
    deleteButton.addEventListener('click', () => buttonsHardDel('good', 'true'));
  }
  if (intervals) {
    const buttonsIntervalDiff = document.querySelectorAll('.intervals_diff');
    buttonsIntervalDiff.forEach((button) => button.addEventListener('click', (ev) => buttonsDiff(ev)));
  }
  const userInput = document.querySelector('#user_input');
  userInput.addEventListener('input', (ev) => inputControl(ev, intervals));
  userInput.addEventListener('keydown', (ev) => pressEnterKey(ev, intervals));

  const answerButton = document.querySelector('#answer');
  answerButton.addEventListener('click', () => buttonAnswer('interval'));
};
