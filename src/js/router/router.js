/**
  * в switch каждый забирает свой кейс, чтобы не пушить пустые болванки.
  * в нем пишет те функции, которые вызываются у него на странице.
  * список кейсов:
  * case '/main': {}
  * case '/main/settings': {}
  * case '/main/learning': {}
  * case '/main/method-interval': {}
  * case '/main/english-puzzle': {}
  * case '/main/speak-it': {}
  * case '/main/sprint': {}
  * case '/main/listening': {}
  * case '/main/savannah': {}
  * case '/main/constructor': {}
  * case '/vocabulary': {}
  * case '/statistic': {}
  * case '/about-us': {}
  */
import { actionAuth } from '../utils';
import { parseLocation } from './parseLocation';
import { ErrorComponent } from './routerComponents';
import { findComponentByPath } from './findComponentByPath';
import { routes } from './routes';
import { controlForm, submitForm, chooseIcon } from '../form';

export const router = () => {
  const isAuth = actionAuth.getAuth();
  const path = parseLocation();

  const packWithHeader = ['/main/settings', '/main/learning', '/main/method-interval', '/main/english-puzzle', '/main/speak-it',
    '/main/sprint', '/main/listening', '/main/savannah', '/main/constructor'];

  if ((isAuth === 'true' || isAuth === true) && path === '/auth') {
    document.querySelector('.click-enter').click();
  }

  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

  if (packWithHeader.includes(path)) {
    document.querySelector('main').innerHTML = component.render();
  } else {
    document.getElementById('root').innerHTML = component.render();
  }

  switch (path) {
    case '/': {
      break;
    }
    case '/auth': {
      controlForm();
      submitForm();
      chooseIcon();
      break;
    }
    default: {
      return 'default';
    }
  }
};
