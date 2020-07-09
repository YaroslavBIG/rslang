import { constantsData } from './constants';
import { timerLoader } from './timerLoader';
import { repeatButtonHandler } from './repeatButtonHandler';
import { createResultBlock } from './createResultBlock';

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
      wrapper.innerHTML = createResultBlock(totalAnswers, yourResult);
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
