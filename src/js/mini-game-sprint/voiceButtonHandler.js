import voiceImg from '../../assets/voice.png';
import voiceOffImg from '../../assets/off.png';

export const voiceBtnHandler = () => {
  const voiceBtn = document.getElementById('voice');
  const voiceOff = document.getElementById('voice-off');
  voiceBtn.style.backgroundImage = `url(${voiceImg})`;
  voiceOff.style.backgroundImage = `url(${voiceOffImg})`;
  voiceBtn.onclick = () => voiceOff.classList.toggle('inactive');
};
