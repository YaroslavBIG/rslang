import { appendNewElement } from './appendNewElement';
import { createDetailsWindowMarkup } from './createDetailsWindowMarkup';
import { detailsWindowCloseBtnHandler } from './detailsWindowCloseBtnHandler';
import { titleSelection } from './titleSelection';
import { getThisGameStatistics } from './getThisGameStatistics';
import { getStudyStatistics } from './getStudyStatistics';
import { createDetailsWindowStudy } from './createDetailsWindowStudy';

export const detailsBtnHandler = async (id) => {
  const choiceGameId = (id) || 'main';
  const thisTitle = titleSelection(choiceGameId);
  const choiceStudy = (choiceGameId === 'main' || choiceGameId === 'intervals');
  const thisData = (choiceStudy) ? await getStudyStatistics(id) : await getThisGameStatistics(id);
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
    if (choiceStudy) {
      appendNewElement(
        'details-window',
        detailsWrapper,
        createDetailsWindowStudy(thisTitle, thisData),
      );
    } else {
      appendNewElement(
        'details-window',
        detailsWrapper,
        createDetailsWindowMarkup(thisTitle, thisData),
      );
    }
    wrapper.append(detailsWrapper);
    detailsWindowCloseBtnHandler();
  };
};
