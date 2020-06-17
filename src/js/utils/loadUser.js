import { load } from "../main";

const loadUser = () => {
  const resUsers = localStorage.getItem('user');
  if (resUsers) {
    return JSON.parse(resUsers);
  }
  return {};
};

export default loadUser;
