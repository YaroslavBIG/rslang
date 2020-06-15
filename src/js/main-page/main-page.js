import createMainContainer from './main-page-components/create-main-container';
import createAdditionalContainer from './main-page-components/create-additional-container';
import onclickHandler from './main-page-components/onclick-handler';

const createMainPage = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main-page__wrapper');

  createMainContainer(wrapper);
  createAdditionalContainer(wrapper);
  document.body.append(wrapper);

  onclickHandler(wrapper);
};

export default createMainPage;
