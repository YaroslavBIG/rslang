export const renderCards = (words) => {
  const fragment = document.createDocumentFragment();
  const container = document.createElement('div');
  container.classList.add('audio-call-answers');
  words.forEach((word) => {
    const card = document.createElement('span');
    card.setAttribute('data-id-word', `${word.id}`);
    card.classList.add('audio-call-answers__item');
    card.innerHTML = word.wordTranslate;
    fragment.append(card);
  });
  container.append(fragment);
  return container;
};
