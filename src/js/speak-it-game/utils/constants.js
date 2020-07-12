export const start = {
  isStart: false,
  get() {
    return this.isStart;
  },
  set(bool) {
    this.isStart = bool;
  },
};

export const textEnd = 'Закончить говорить';
export const textStart = 'Начать говорить';
