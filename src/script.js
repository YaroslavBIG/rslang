// import { load } from './js/utils';
//
// window.onload = () => {
//   load();
// };
import { createAboutTheTeamPage } from './js/pages/createAboutTheTeamPage';

window.onload = () => {
  const root = document.getElementById('root');
  root.innerHTML = createAboutTheTeamPage();
};
