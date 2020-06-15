const onclickHandler = (container) => {
  const games = container.querySelectorAll('.game');
  // eslint-disable-next-line no-console,no-return-assign
  games.forEach((game) => game.onclick = () => console.log(game.id));
};

export default onclickHandler;
