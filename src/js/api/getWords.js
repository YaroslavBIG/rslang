/**
 * Words
 * GET для получения списка слов:
 * @param {number} page каждой группе по 30 страниц(от 0 до 29)
 * @param {number} group Всего 6 групп(от 0 до 5)
 * @param {number} lte Количество слов в предложении (не более)
 * @param {number} perPage Количество слов на страницу
 * @return {object}
 * @usage
 *   Строка запроса должна содержать в себе номер группы и номер страницы.
 * Всего 6 групп(от 0 до 5) и в каждой группе по 30 страниц(от 0 до 29).
 * В каждой странице по 20 слов. Группы разбиты по сложности от
 * самой простой(0) до самой сложной(5).
 */
async function getWords(page = 0, group = 0, lte = 10, perPage = 20) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}
  &wordsPerExampleSentenceLTE=${lte}&wordsPerPage=${perPage}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return Object.keys(err);
  }
}

export default getWords;
