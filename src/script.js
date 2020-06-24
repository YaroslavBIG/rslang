import { mainPage } from './js/pages/mainPage';

const root = document.querySelector('#root');
root.innerHTML = mainPage();
import { load } from './js/utils';

window.onload = () => {
  load();
};
