/**
 * Cut Tags
 * Вырезает тэги и точки из полученной строки
 * @param {string} str Строка с тэгами и/или точками
 * @param {string} comma вырезает запятые
 * @return {string} string
 * @usage This is <b>string</b>. =>  This is string
 */

export const cutTags = (str, comma = false) => {
  const tags = /( |<([^>]+)>)/gi;
  const dots = /(\.)/g;
  const commas = /^(?!.*,$)(.*)$/;
  if (comma) return str.replace(commas, '');
  return str.replace(tags, '').replace(dots, '');
};
