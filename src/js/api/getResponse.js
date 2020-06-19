import { actionAuth, globalUser } from '../utils/main';

const getResponse = async (url, { ...options }) => {
  const isAuth = actionAuth.getAuth();
  const info = globalUser.get();
  const { token: tokenRes } = info;

  const invalidToken = 401;

  const resURL = `https://afternoon-falls-25894.herokuapp.com/${url}`;
  const authorization = (isAuth === 'true' || isAuth === true) ? { Authorization: `Bearer ${tokenRes}` } : {};

  const baseHeaders = {
    ...authorization,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(resURL, {
      ...options,
      headers: {
        ...baseHeaders,
      },
    });
    if (response && response.status === invalidToken) {
      actionAuth.setAuth(false);
      // router();
    }
    const content = await response.json();
    return content;
  } catch (err) {
    return Object.keys(err);
  }
};

export default getResponse;
