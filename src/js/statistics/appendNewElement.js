export const appendNewElement = (className, parent, inner) => {
  const newElement = document.createElement('div');
  newElement.classList.add(className);
  newElement.innerHTML = inner;
  parent.append(newElement);
};
