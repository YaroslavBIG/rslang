import constantsData from './constants';
import voice from '../../assets/voice.png';

const sprintGameIndex = () => {
  // const root = document.querySelector('#root');
  const sprintGameScreen = document.createDocumentFragment();
  const wrapperSprintGame = document.createElement('div');
  wrapperSprintGame.classList.add('sprint-game__screen-wrapper');
  wrapperSprintGame.innerHTML = `
    <div class="screen-wrapper__points">
        <p class="points__quantity">99</p>
    </div>
    <div class="screen-wrapper__main-content"></div>
    <div class="screen-wrapper__hints">
        <p class="hints__description">${constantsData.hintsDescription}</p>
        <div class="hints__voice" id="voice"></div>
    </div>
    <div class="screen-wrapper__timer"></div>
  `;

  sprintGameScreen.append(wrapperSprintGame);
  document.body.innerHTML = '';
  document.body.append(sprintGameScreen);

  const voiceBtn = document.getElementById('voice');
  voiceBtn.style.backgroundImage = `url(${voice})`;
};

export default sprintGameIndex;
