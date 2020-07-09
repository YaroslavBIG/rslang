import { footer } from '../footer';
import { main } from '../main';
import { header, user } from '../header';

import { settingsForm, settingsCheckbox, settingsNumber } from '../form';

export const createSettingsPage = () => {
  const title = '<h2 class="settings-form__title">Общие настройки:</h2>';
  const wordsPerDay = settingsNumber('wordsPerDay', 'Количество слов в день:');
  const newWordsPerDay = settingsNumber(
    'newWordsPerDay',
    'Количество новых слов в день:',
  );
  const maxCardsPerDay = settingsNumber(
    'maxCardsPerDay',
    'Максимальное количество карточек со словами в день',
  );
  const onlyNewWordsChbox = settingsCheckbox(
    'onlyNewWords',
    'Использовать только новые слова',
  );
  const soundAutoPlayChbox = settingsCheckbox(
    'soundAutoPlay',
    'Автоматическое воспроизведение медиафайлов',
  );
  const showDeleteBtnChbox = settingsCheckbox(
    'showDeleteBtn',
    'Отобразить кнопку для удаления слова из изучаемых',
  );

  const showStrongBtnChbox = settingsCheckbox(
    'showStrongBtn',
    'Отобразить кнопку для добавления слова в сложную группу',
  );
  const showAnswerBtnChbox = settingsCheckbox(
    'showAnswerBtn',
    'Отобразить кнопку "Показать ответ"',
  );

  const translationChbox = settingsCheckbox('translation', 'Перевод');
  const meaningChbox = settingsCheckbox(
    'meaning',
    'Предложение с объяснением значения',
  );
  const exampleChbox = settingsCheckbox(
    'example',
    'Предложение с примером использования',
  );
  const cardInfoTitle = '<div class="settings-form__card-info-title">Опции карточек со словами:</div>';
  const transcriptionChbox = settingsCheckbox('transcription', 'Транскрипция');
  const associationImgChbox = settingsCheckbox(
    'associationImg',
    'Картинка-ассоциация',
  );
  const saveBtn = `<div class="settings-form__save-wrapper">
  <button type="submit" class="settings-form__save">Сохранить</button>
  </div>`;
  const cardSettings = [
    translationChbox,
    meaningChbox,
    exampleChbox,
    transcriptionChbox,
    associationImgChbox,
  ];
  const avatars = `
  <div class="settings-form__avatars">
  <img class="settings-form__avatar" src="assets/img/1.svg" alt="1">
  <img class="settings-form__avatar" src="assets/img/2.svg" alt="2">
  <img class="settings-form__avatar" src="assets/img/3.svg" alt="3">
  <img class="settings-form__avatar" src="assets/img/4.svg" alt="4">
  <img class="settings-form__avatar" src="assets/img/5.svg" alt="5">
  <img class="settings-form__avatar" src="assets/img/6.svg" alt="6">
  </div>
  `;
  const pageComponents = header(user())
    + main(
      settingsForm(
        avatars,
        title,
        wordsPerDay,
        newWordsPerDay,
        maxCardsPerDay,
        onlyNewWordsChbox,
        soundAutoPlayChbox,
        showDeleteBtnChbox,
        showStrongBtnChbox,
        showAnswerBtnChbox,
        cardInfoTitle,
        ...cardSettings,
        saveBtn,
      ),
    )
    + footer();
  return `<section class="settings-page">${pageComponents}</section>`;
};
