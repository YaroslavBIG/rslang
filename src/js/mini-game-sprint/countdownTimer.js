import { constantsData } from './constants';
import { timerLoader } from './timerLoader';
import { repeatButtonHandler } from './repeatButtonHandler';
import { createResultBlock } from './createResultBlock';
import { createSprintStatistics } from './createSprintStatistics';

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
      const totalAnswers = constantsData.correctAnswersCounter + constantsData.wrongAnswersCounter;
      wrapper.innerHTML = createResultBlock(totalAnswers, yourResult);
      const completedAudio = document.getElementById('audio-completed');
      completedAudio.setAttribute(
        'src',
        `${constantsData.backendUrl}files/success.mp3`,
      );
      completedAudio.autoplay = true;
      createSprintStatistics(
        totalAnswers,
        constantsData.correctAnswersCounter,
        constantsData.wrongAnswersCounter,
      );
      repeatButtonHandler();
    } else {
      timer = setTimeout(tikTak, constantsData.oneSec);
    }
  }
  timerLoader(yourTime);
  tikTak();
};
