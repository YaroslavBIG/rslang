const ElementCreator = (tagName, className, id, parent) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  newElement.id = id;
  parent.append(newElement);
};

export default ElementCreator;
