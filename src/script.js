// import { load } from './js/utils';
//
// window.onload = () => {
//   load();
// };
import { createAboutTheTeamPage } from './js/pages/createAboutTheTeamPage';

window.onload = () => {
  document.body.innerHTML = createAboutTheTeamPage();
};
