import { actionAuth } from "../main";

const loadAuth = () => {
  const resAuth = localStorage.getItem('auth');
  actionAuth.setAuth(resAuth);
};

export default loadAuth;
