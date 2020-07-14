export const start = {
  isStart: false,
  recog: false,
  get() {
    return this.isStart;
  },
  set(bool) {
    this.isStart = bool;
  },
  getRecog() {
    return this.recog;
  },
  setRecog(rec) {
    this.recog = rec;
  },
};

export const phrases = {
  textEnd: 'Закончить говорить',
  textStart: 'Начать говорить',
  textUserWords: 'Повторяем Ваши слова!',
};
