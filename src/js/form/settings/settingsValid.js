export const settingsValid = (settings) => {
  const { cardInfo } = settings.optional;
  const checked = cardInfo.translation || cardInfo.meaning || cardInfo.example;
  if (!checked) {
    alert(`Должен быть выбран хотя бы один пункт:
  - перевод слова
  - предложение с объяснением значения слова
  - предложение с примером использования изучаемого слова
  `);
  }
  const { wordsPerDay } = settings;
  if (!wordsPerDay > 0) {
    alert('Количество слов в день должно быть больше нуля');
  }
  return checked && wordsPerDay > 0;
};
