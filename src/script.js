// import { load } from './js/utils';
// import { router } from './js/router';
//
// window.addEventListener('hashchange', router);
// window.onload = () => {
//   load();
//   router();
// };

import { createStatisticsPage } from './js/pages';
import { launchStatisticsMethods } from './js/statistics/launchStatisticsMethods';

window.onload = () => {
  const root = document.getElementById('root');
  root.innerHTML = createStatisticsPage();
  launchStatisticsMethods();
}
