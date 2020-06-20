import { constantsData } from './constants';
import { timerLoader } from './timerLoader';

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
      // показать новый блок с результатом, когда закончится таймер.
      const yourResult = points.innerHTML;
      wrapper.innerHTML = `
        <div class="screen-wrapper__result-block">
            <p class="result-block__your-result">Your result: ${yourResult}</p>
            <p class="result-block__description">Что-то будет написано</p>
            <div class="result-block__start-btn">START</div>
        </div>
      `; // Продумать, что будет появляться после завершения игры
    } else {
      timer = setTimeout(tikTak, constantsData.oneSec);
    }
  }
  timerLoader(yourTime);
  tikTak();
};
