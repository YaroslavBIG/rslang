async function getWords(page = 0, group = 0, lte = 10, perPage = 20) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}
  &wordsPerExampleSentenceLTE=${lte}&wordsPerPage=${perPage}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default getWords;
