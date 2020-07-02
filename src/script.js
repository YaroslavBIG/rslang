import { load } from './js/utils';
import { router } from './js/router';

window.addEventListener('hashchange', router);
window.onload = () => {
  load();
  router();
};
