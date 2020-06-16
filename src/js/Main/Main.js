const Main = (...nodes) => {
  const mainNode = document.createElement('main');
  mainNode.classList.add('main');
  const bgMain = document.createElement('div');
  bgMain.classList.add('main-bg');
  mainNode.append(bgMain, ...nodes);
  return mainNode;
};
export default Main;
