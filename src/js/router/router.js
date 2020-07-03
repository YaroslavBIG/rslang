import { parseLocation } from './parseLocation';
import { checkToAuth } from './checkToAuth';
import { ErrorComponent } from './routerComponents';
import { findComponentByPath } from './findComponentByPath';
import { routes } from './routes';
import { callsNecessaryMethods } from './callsNecessaryMethods';

const packWithHeader = [
  '/main/word-learning',
  '/main/word-repeat',
  '/main/english-puzzle',
  '/main/speak-it',
  '/main/sprint',
  '/main/listening',
  '/main/savannah',
  '/main/constructor',
];

export const router = () => {
  const path = parseLocation();
  checkToAuth(path);

  const { component = ErrorComponent } = findComponentByPath(path, routes);

  if (packWithHeader.includes(path)) {
    document.querySelector('.main').innerHTML = component.render();
  } else {
    document.getElementById('root').innerHTML = component.render();
  }

  callsNecessaryMethods(path);
};
