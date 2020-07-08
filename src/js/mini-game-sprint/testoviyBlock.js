import { getGlobalStatistics, putGlobalStatistics } from './getGlobalStatistics';

export const test = () => {
  const voice = document.getElementById('voice');
  voice.onclick = () => {
    putGlobalStatistics();
    getGlobalStatistics();
  };
}; // Потом удалить всю эту чушь!!!
