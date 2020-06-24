import { constantsData } from './constants';
import { timerLoader } from './timerLoader';
import { repeatButtonHandler } from './repeatButtonHandler';

export const countdownTimer = () => {
  const timerContainer = document.getElementById('timer');
  const points = document.getElementById('points');
  const wrapper = document.getElementById('wrapper');
  let yourTime = constantsData.leadTime;
  let timer;
  function tikTak() {
    timerContainer.innerHTML = `${yourTime}`;
    yourTime -= 1;
    if (yourTime < 0) {
      clearTimeout(timer);
      const totalAnswers = constantsData.correctAnswersCounter + constantsData.wrongAnswersCounter;
      constantsData.combo = 1;
      constantsData.rightInARow = 0;
      const yourResult = points.innerHTML;
      wrapper.innerHTML = `
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
      `; // Продумать, что будет появляться после завершения игры
      const completedAudio = document.getElementById('audio-completed');
      completedAudio.setAttribute(
        'src',
        `${constantsData.backendUrl}files/success.mp3`,
      );
      completedAudio.autoplay = true;
      repeatButtonHandler();
    } else {
      timer = setTimeout(tikTak, constantsData.oneSec);
    }
  }
  timerLoader(yourTime);
  tikTak();
};
