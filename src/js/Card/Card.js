const Card = (title, cardClass) => {
  const cardNode = document.createElement('div');
  cardNode.classList.add('card', cardClass);
  const titleNode = document.createElement('h4');
  titleNode.classList.add('card__title');
  titleNode.innerHTML = title;
  cardNode.append(titleNode);
  return cardNode;
};
export default Card;
