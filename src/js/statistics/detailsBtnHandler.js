import { appendNewElement } from './appendNewElement';
import { createDetailsWindowMarkup } from './createDetailsWindowMarkup';
import { detailsWindowCloseBtnHandler } from './detailsWindowCloseBtnHandler';
import { titleSelection } from './titleSelection';

export const detailsBtnHandler = (id) => {
  const choiceGameId = (id) || 'total';
  const thisGameTitle = titleSelection(choiceGameId);
  const detailsBtn = document.getElementById('details');
  detailsBtn.onclick = () => {
    const wrapper = document.getElementById('wrapper');
    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');
    detailsWrapper.id = 'details-wrapper';
    appendNewElement('substrate', detailsWrapper, '');
    appendNewElement('details-window', detailsWrapper, createDetailsWindowMarkup(thisGameTitle));
    wrapper.append(detailsWrapper);
    detailsWindowCloseBtnHandler();
  };
};
