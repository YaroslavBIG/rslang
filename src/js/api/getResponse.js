import { actionAuth, globalUser } from "../utils/main";

const getResponse = async (url, method, {...options}) => {
  const isAuth = actionAuth.getAuth();
  const invalidToken = 401;
  const valid = 200;
  const resURL = `https://afternoon-falls-25894.herokuapp.com/${url}`;
  const authorization = (isAuth === 'true') ? {'Authorization': `Bearer ${globalUser.token}`} : '';
  const baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  try{
    const response = await fetch(resURL, {
      method: method,
      ...options,
      headers: {
        ...authorization,
        ...baseHeaders,
      }
    });
    if (response && response.status === invalidToken) {
      actionAuth.setAuth(false);
      router();
      throw new Error();
    } else if (response && response.status !== valid) {
      throw new Error();
    }
    const content = await response.json();
    return content;
  }
  catch (err) {
    alert('Application error');
  }
}

export default getResponse;
