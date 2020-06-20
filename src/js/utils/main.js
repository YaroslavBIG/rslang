export const globalUser = {
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

export const actionAuth = {
  setAuth(auth) {
    this.isAuth = auth;
  },
  getAuth() {
    return this.isAuth;
  },
};
