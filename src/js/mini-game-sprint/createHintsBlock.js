import { constantsData } from './constants';

export const createHintsBlock = () => `
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
`;
