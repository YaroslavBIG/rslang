import speakit from './speakitRouter.js';
import englishPuzzle from './englishPuzzleRouter.js';
import savannah from './savannahRouter.js';
import listening from './listeningRouter.js';
import sprint from './sprintRouter.js';
import constructor from './constructorRouter.js';

// Components
const mainPage = {
  render: () => {
    return ``;
  },
};

/*const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};*/

// Routes
const routes = [
  { path: '/', component: mainPage },
  { path: '/speakit', component: speakit },
  { path: '/english-puzzle', component: englishPuzzle },
  { path: '/savannah', component: savannah },
  { path: '/listening', component: listening },
  { path: '/sprint', component: sprint },
  { path: '/constructor', component: constructor },
];

const parseLocation = (hash) => hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || false;

const router = () => {
  const path = parseLocation(document.location.hash);
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  document.getElementById('root').innerHTML = component.render();
};

export default router;
