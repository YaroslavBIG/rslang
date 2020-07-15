import { constantsData } from './constants';

export const createMainContentBlock = () => `
<div class="screen-wrapper__main-content" id="main-content">
    <div class="main-content__information" id="main-information">
        ВАШЕ КОМБО: x${constantsData.combo}
    </div>
    <div class="main-content__combo-block" id="combo-block">
        <div class="combo-block__section" id="star-1"></div>
        <div class="combo-block__section" id="star-2"></div>
        <div class="combo-block__section" id="star-3"></div>
        <div class="combo-block__section" id="star-4"></div>
    </div>
    <div class="main-content__task-container" id="task-container">
        <p class="task-container__question" id="question"></p>
        <audio id="audio">
            <source id="source">
        </audio>
        <p class="task-container__answer" id="answer"></p>
    </div>
    <div class="main-content__controller" id="controller">
        <div class="controller__wrong-btn" id="wrong-btn">
            ${constantsData.wrongBtnText}
        </div>
        <div class="controller__right-btn" id="right-btn">
            ${constantsData.rightBtnText}
        </div>
        <audio id="audio--correct">
            <source id="source--correct">
        </audio>
        <audio id="audio--error">
            <source id="source-error">
        </audio>
    </div>
</div>
`;
