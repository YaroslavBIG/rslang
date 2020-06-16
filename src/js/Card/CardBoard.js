const CardBoard = (...cards) => {
  const cardBoardNode = document.createElement('div');
  cardBoardNode.classList.add('card-board');
  cardBoardNode.append(...cards);
  return cardBoardNode;
};
export default CardBoard;
