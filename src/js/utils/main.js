import loadAuth from "./loadAuth";
import loadUser from "./loadUser";

let globalUser = {};

const actionAuth = {
  setAuth(auth) {
    this._isAuth = auth;
  },
  getAuth() {
    return this._isAuth;
  },
};

const load = () => {
  loadAuth();
  globalUser = loadUser();
  router();
  console.log(localStorage, globalUser);
}

export { globalUser, actionAuth, load };

