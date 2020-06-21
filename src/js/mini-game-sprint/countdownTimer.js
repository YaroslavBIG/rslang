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
      constantsData.combo = 1;
      constantsData.rightInARow = 0;
      const yourResult = points.innerHTML;
      wrapper.innerHTML = `
        <div class="screen-wrapper__result-block" id="result-block">
            <p class="result-block__your-result">Your result: ${yourResult}</p>
            <p class="result-block__description">Что-то будет написано</p>
            <div class="result-block__start-btn" id="repeat-btn">REPEAT</div>
        </div>
      `; // Продумать, что будет появляться после завершения игры
      repeatButtonHandler();
    } else {
      timer = setTimeout(tikTak, constantsData.oneSec);
    }
  }
  timerLoader(yourTime);
  tikTak();
};
