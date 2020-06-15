const appendGameButton = (tagName, className, innerHTML, id, parent) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add('game', className);
  newElement.innerHTML = innerHTML;
  newElement.id = id;
  parent.append(newElement);
};

export default appendGameButton;
