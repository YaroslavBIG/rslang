const globalUser = {
  user: {},
  get() {
    return this.user;
  },
  set(key, value) {
    this.user[key] = value;
  },
  setFullUser(obj) {
    this.user = obj;
  },
};

const actionAuth = {
  setAuth(auth) {
    this.isAuth = auth;
  },
  getAuth() {
    return this.isAuth;
  },
};

export { globalUser, actionAuth };
