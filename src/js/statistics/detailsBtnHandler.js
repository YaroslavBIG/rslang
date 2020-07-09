import { appendNewElement } from './appendNewElement';
import { createDetailsWindowMarkup } from './createDetailsWindowMarkup';
import { detailsWindowCloseBtnHandler } from './detailsWindowCloseBtnHandler';
import { titleSelection } from './titleSelection';
import { getThisGameStatistics } from './getThisGameStatistics';

export const detailsBtnHandler = (id) => {
  const choiceGameId = (id) || 'total';
  const thisTitle = titleSelection(choiceGameId);
  const thisData = getThisGameStatistics();
  const detailsBtn = document.getElementById('details');
  detailsBtn.onclick = () => {
    const wrapper = document.getElementById('wrapper');
    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');
    detailsWrapper.id = 'details-wrapper';
    appendNewElement(
      'substrate',
      detailsWrapper,
      '',
    );
    appendNewElement(
      'details-window',
      detailsWrapper,
      createDetailsWindowMarkup(thisTitle, thisData),
    );
    wrapper.append(detailsWrapper);
    detailsWindowCloseBtnHandler();
  };
};
