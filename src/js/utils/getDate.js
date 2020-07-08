/**
 * Get Date
 * Возвращает сегодняшнюю дату
 * @param {String} cut при указании параметра вернётся дата в
 * формате "ддммгггг" в случае если число до 10 "дммгггг"
 * @return {String} дата в формате "дд.мм.гггг"
 * @example getDate() =>  07.07.2020
 * @example getDate(cut) =>  7072020
 * @example getDate(cut) =>  15072020
 */

export const getDate = (cut) => {
  const dateNow = new Date().toLocaleDateString();
  const cutZero = dateNow.replace(/^\d|\./g, '');
  return cut ? cutZero : dateNow;
};
