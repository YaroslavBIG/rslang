/**
 * Cut Tags
 * Вырезает тэги и точки из полученной строки
 * @param {string} str Строка с тэгами и/или точками
 * @return {string} string
 * @usage This is <b>string</b>. =>  This is string
 */

export const cutTags = (str) => {
  const tags = /( |<([^>]+)>)/gi;
  const dots = /(\.)/g;
  return str.replace(tags, '').replace(dots, '');
};
