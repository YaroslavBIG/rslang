export const getInfoWordById = async (id) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words/${id}`);
  const content = await rawResponse.json();
  return content;
};
