import { actionAuth } from "../main";

const saveAuth = () => {
  const auth = actionAuth.getAuth();
  localStorage.setItem('auth', auth);
};

export default saveAuth;
