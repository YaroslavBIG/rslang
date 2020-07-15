import { constantsData } from './constants';

export const preloader = () => {
  const loader = document.getElementById('question');
  loader.innerHTML = constantsData.preloaderFirstStr;
  const animationPreloader = document.getElementById('answer');
  setTimeout(() => {
    animationPreloader.innerHTML = constantsData.preloaderSecondStr;
  }, 1500);
};
