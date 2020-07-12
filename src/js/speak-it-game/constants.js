export const start = {
  isStart: false,
  get() {
    return this.isStart;
  },
  set(bool) {
    this.isStart = bool;
  },
};
