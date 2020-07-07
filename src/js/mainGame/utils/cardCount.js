export const cardCount = () => {
  const cardsLernToday = parseInt(localStorage.getItem('cardsLernToday'), 10);
  const count = Number.isNaN(cardsLernToday) ? 0 : cardsLernToday + 1;
  localStorage.setItem('cardsLernToday', count);
};
