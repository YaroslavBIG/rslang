import constantsData from './constants';

const sprintGameIndex = () => `
  <section class="sprint-game__screen-wrapper">
    <div class="screen-wrapper__points">
        <p class="points__quantity">99</p>
    </div>
    <div class="screen-wrapper__main-content"></div>
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
