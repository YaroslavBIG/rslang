export const start = {
  isStart: false,
  get() {
    return this.isStart;
  },
  set(bool) {
    this.isStart = bool;
  },
};

export const phrases = {
  textEnd: 'Закончить говорить',
  textStart: 'Начать говорить',
  textUserWords: 'Повторяем Ваши слова!',
  textNoWords: 'Недостаточно Ваших слов!',
};
