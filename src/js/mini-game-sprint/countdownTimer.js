import constantsData from './constants';
import timerLoader from './timerLoader';

const countdownTimer = () => {
  const timerContainer = document.getElementById('timer');
  let yourTime = constantsData.leadTime;
  let timer;
  function tikTak() {
    timerContainer.innerHTML = `${yourTime}`;
    yourTime -= 1;
    if (yourTime < 0) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(tikTak, constantsData.oneSec);
    }
  }
  timerLoader(yourTime);
  tikTak();
};

export default countdownTimer;
