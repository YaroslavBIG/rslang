import constantsData from './constants';

const sprintGameIndex = () => `
  <section class="sprint-game__screen-wrapper">
    <div class="screen-wrapper__points">
        <p class="points__quantity">99</p>
    </div>
    <div class="screen-wrapper__main-content">
      <div class="main-content__information"></div>
      <div class="main-content__combo-block"></div>
      <div class="main-content__task-container">
        <p class="task-container__question" id="question"></p>
        <p class="task-container__answer" id="answer"></p>
      </div>
      <div class="main-content__control">
        <div class="control__wrong-btn" id="wrong-btn">
          ${constantsData.wrongBtnText}
        </div>
        <div class="control__right-btn" id="right-btn">
          ${constantsData.rightBtnText}
        </div>
      </div>
    </div>
    <div class="screen-wrapper__hints">
        <p class="hints__description">${constantsData.hintsDescription}</p>
        <div class="hints__voice" id="voice">
          <div class="hints__voice--off" id="voice-off"></div>
        </div>
    </div>
    <div class="timer__loader-wrapper" id="loader-wrapper">
      <svg width="103" height="103" viewbox="0 0 250 250">
        <path id="loader" transform="translate(125, 125)"/>
      </svg>
    </div>
    <div class="screen-wrapper__timer" id="timer"></div>
  </section>
  `;

export default sprintGameIndex;
