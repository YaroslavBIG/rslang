import { constantsData } from './constants';

export const createResultBlock = (totalAnswers, yourResult) => `
    <div class="screen-wrapper__result-block" id="result-block">
        <audio id="audio-completed"></audio>
        <p class="result-block__your-result">Your result: ${yourResult}</p>
        <div class="result-block__description">
            <p>Всего ответов: ${totalAnswers}</p>
            <p>Правильных ответов: ${constantsData.correctAnswersCounter}</p>
            <p>Неправильных ответов: ${constantsData.wrongAnswersCounter}</p>
        </div>
        <div class="result-block__start-btn" id="repeat-btn">REPEAT</div>
    </div>
`;
