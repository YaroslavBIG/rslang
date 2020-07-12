import { savannahData } from '../savannah/constants';

export const createSavannahPage = () => `
<section class="savannah__screen-wrapper" id="savannah-wrapper">
    <div class="screen-wrapper__hints-bar">
        <div class="hints-bar__voice" id="savannah-voice">
            <div class="hints-bar__voice-off" id="savannah-voice-off"></div>
        </div>
        <div class="hints-bar__text">${savannahData.hintText}</div>
        <div class="hints-bar__lives"></div>
    </div>
    <div class="screen-wrapper__words-container">
        <div class="words-container__first-word">Первое</div>
        <div class="words-container__second-word">Второе</div>
        <div class="words-container__third-word">Третье</div>
        <div class="words-container__fourth-word">Четвертое</div>
    </div>
    <div class="screen-wrapper__points-counter">0</div>
</section>
`;
