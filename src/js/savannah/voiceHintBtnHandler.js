import voiceImg from '../../assets/voice.png';
import voiceOffImg from '../../assets/off.png';

export const voiceHintBtnHandler = () => {
  const voiceBtn = document.getElementById('savannah-voice');
  const voiceOff = document.getElementById('savannah-voice-off');
  voiceBtn.style.backgroundImage = `url(${voiceImg})`;
  voiceOff.style.backgroundImage = `url(${voiceOffImg})`;
  voiceBtn.onclick = () => voiceOff.classList.toggle('inactive');
};
