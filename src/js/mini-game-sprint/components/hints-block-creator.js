import ElementCreator from './element-creator';
import constantsData from './constants';
import voice from '../assets/voice.png';

const HintsBlockCreator = () => {
  const hints = document.getElementById('hints');

  ElementCreator(
    'p',
    'hints__description',
    'hints__description',
    hints,
  );
  ElementCreator(
    'div',
    'hints__voice',
    'hints__voice',
    hints,
  );

  const description = document.getElementById('hints__description');
  description.innerHTML = constantsData.hintsDescription;
  const voiceBtn = document.getElementById('hints__voice');
  voiceBtn.style.backgroundImage = `url(${voice})`;
};

export default HintsBlockCreator;
