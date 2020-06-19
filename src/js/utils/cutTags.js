/**
 * Cut Tags
 * Вырезает тэги и точки из полученной строки
 * @param {string} str Строка с тэгами и/или точками
 * @return {string}
 * @usage
 * This is <b>string</b>. =>  This is string
 */

function cutTags(str) {
  const tags = /( |<([^>]+)>)/ig;
  const dots = /(\.)/g;
  const result = str.replace(tags, '').replace(dots, '');

  return result;
}

export default cutTags;
