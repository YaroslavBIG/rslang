/**
 * Get Day of Year
 * Возвращает текущий день года
 * @return {Number} number номер текущего дня в году 168, 169
 * @example getDayOfYear() =>  168
 */

export const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};
