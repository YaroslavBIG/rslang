import { cardsBlockListner } from './cardsBlockListner';
import { buttonListner } from './buttonListner';

export const addEventListnerAudioGame = () => {
  const contentBlock = document.querySelector('.audio-call-content');
  contentBlock.addEventListener('click', (e) => { cardsBlockListner(e); });

  const button = document.querySelector('.audio-call-buttons__button');
  button.addEventListener('click', () => { buttonListner(); });
};
