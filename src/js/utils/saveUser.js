import { globalUser } from './main';

const saveUser = () => {
  const user = globalUser.get();
  const json = JSON.stringify(user);
  localStorage.setItem('user', json);
};

export default saveUser;
