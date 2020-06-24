/**
 * Random integer
 * Для получения случайных чисел в диапазоне:
 * @param {number} min Минимально возможное число
 * @param {number} max Максимально возможное число
 * @return {number} number
 * @usage Генерирует случайное число от min до max
 */

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * Random Arrray
 * Для получения массива случайных чисел:
 * @param {number} len Длина массива
 * @return {Array} array
 * @usage Генерирует массив чисел от 0 до указанной длины
 */
export const randomArr = (len) => {
  const result = [];
  const size = len - 1;
  while (result.length < size) {
    const num = randomInteger(0, size);
    if (!result.includes(num)) result.push(num);
  }
  return result;
};
