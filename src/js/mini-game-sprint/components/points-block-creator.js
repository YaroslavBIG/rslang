import ElementCreator from './element-creator';

const PointsBlockCreator = () => {
  const points = document.getElementById('points');

  ElementCreator(
    'p',
    'points__quantity',
    'quantity',
    points,
  );

  const quantity = document.getElementById('quantity');
  quantity.innerHTML = '99'; // Сюда будет падать колличество полученных баллов
};

export default PointsBlockCreator;
