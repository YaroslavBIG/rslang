import { createMainContentBlock } from '../mini-game-sprint/createMainContentBlock';
import { createHintsBlock } from '../mini-game-sprint/createHintsBlock';

export const createSprintGamePage = () => `
  <section class="sprint-game__screen-wrapper" id="wrapper">
    <div class="screen-wrapper__points">
        <p class="points__quantity" id="points">0</p>
    </div>
    ${createMainContentBlock()}
    ${createHintsBlock()}
    <div class="screen-wrapper__substrate"></div>
  </section>
`;
