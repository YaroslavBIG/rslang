import { parseLocation } from './parseLocation';
import { checkToAuth } from './checkToAuth';
import { ErrorComponent } from './routerComponents';
import { findComponentByPath } from './findComponentByPath';
import { routes } from './routes';
import { callsNecessaryMethods } from './callsNecessaryMethods';
import { header, settings, user } from '../header';
import { footer } from '../footer';

const packWithHeader = [
  '/main/word-learning',
  '/main/word-repeat',
  '/main/english-puzzle',
  '/main/speak-it',
  '/main/sprint',
  '/main/audition',
  '/main/savannah',
  '/main/word-puzzle',
  '/vocabulary',
  '/statistic',
  '/about-us',
];

export const router = () => {
  const path = parseLocation();
  checkToAuth(path);

  const { component = ErrorComponent } = findComponentByPath(path, routes);

  if (packWithHeader.includes(path)) {
    document.getElementById('root').innerHTML = `${header(
      settings(),
      user()
    )} <main class="main">${component.render()}</main> ${footer()}`;
  } else {
    document.getElementById('root').innerHTML = component.render();
  }

  callsNecessaryMethods(path);
};
