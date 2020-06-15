const onclickHandler = (container) => {
  const games = container.querySelectorAll('.game');
  games.forEach((game) => {
    game.onclick = () => game.id; // return game.id
  });
};

export default onclickHandler;
