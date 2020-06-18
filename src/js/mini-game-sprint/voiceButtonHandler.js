import voiceImg from '../../assets/voice.png';
import voiceOffImg from '../../assets/off.png';

const voiceBtnHandler = () => {
  const voiceBtn = document.getElementById('voice');
  const voiceOff = document.getElementById('voice-off');
  voiceBtn.style.backgroundImage = `url(${voiceImg})`;
  voiceOff.style.backgroundImage = `url(${voiceOffImg})`;
  voiceBtn.onclick = () => {
    if (voiceOff.classList.contains('active')) {
      voiceOff.classList.remove('active');
    } else {
      voiceOff.classList.add('active');
    }
  };
};

export default voiceBtnHandler;
