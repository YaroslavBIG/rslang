import { actionAuth, globalUser } from '../utils/main';

const getResponse = async (url, methods, { ...options }) => {
  const isAuth = actionAuth.getAuth();
  const invalidToken = 401;
  const valid = 200;
  const resURL = `https://afternoon-falls-25894.herokuapp.com/${url}`;
  const authorization = (isAuth === 'true') ? { Authorization: `Bearer ${globalUser.user.token}` } : '';
  const baseHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetch(resURL, {
      method: methods,
      ...options,
      headers: {
        ...authorization,
        ...baseHeaders,
      },
    });
    if (response && response.status === invalidToken) {
      actionAuth.setAuth(false);
      // router();
      throw new Error();
    } else if (response && response.status !== valid) {
      throw new Error();
    }
    const content = await response.json();
    return content;
  } catch (err) {
    // const outer = document.querySelector('body').outerHTML;
    // document.querySelector('body').innerHTML = `<p>Application error</p> ${}`;
  }
};

export default getResponse;
