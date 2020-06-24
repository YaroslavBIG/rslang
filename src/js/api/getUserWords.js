const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTg5MjI1MTJkYWJhMDAxN2JkYzk1NyIsImlhdCI6MTU5MzAyMjkwNSwiZXhwIjoxNTkzMDM3MzA1fQ.MnEp9DKVBV6mlkquu2zyD75s_VZ2xJf50C5oIz9NB6U';

export const getUserWords = async (userId) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  const content = await rawResponse.json();

  return content;
};
