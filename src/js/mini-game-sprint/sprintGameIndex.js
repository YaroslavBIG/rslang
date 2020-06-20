import { constantsData } from './constants';

export const sprintGameIndex = () => `
  <section class="sprint-game__screen-wrapper" id="wrapper">
    <div class="screen-wrapper__points">
        <p class="points__quantity" id="points">0</p>
    </div>
    <div class="screen-wrapper__main-content" id="main-content">
      <div class="main-content__information"></div>
      <div class="main-content__combo-block"></div>
      <div class="main-content__task-container">
        <p class="task-container__question" id="question"></p>
        <p class="task-container__answer" id="answer"></p>
      </div>
      <div class="main-content__controller">
        <div class="controller__wrong-btn" id="wrong-btn">
          ${constantsData.wrongBtnText}
        </div>
        <div class="controller__right-btn" id="right-btn">
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
      <svg viewbox="0 0 250 250">
        <path id="loader">
      </svg>
    </div>
    <div class="screen-wrapper__timer" id="timer"></div>
  </section>
  `;
