/**
* каждый компонент возращает вашу template строку, чтобы отрисовывать страницу
* если у вас мини-игра(не основная и не метод интервального повторения), то у вас еще отрисовывается промо
* и конструкция возврата получается promo() + pageGame(), где
* promo() - промо-страница игры, этот метод от Константина
* pageGame() - название функции, которая отдает вашу начальную верстку для игры.
*/

export const HomeComponent = {
  render: () => {
    return '<a href="#/auth">click</a>';
  }
}
export const AuthComponent = {
  render: () => {
    return createSignInUpPage();
  }
}
export const MainComponent = {
  render: () => {
    return;
  }
}
export const SettingsComponent = {
  render: () => {
    return;
  }
}
export const LearningComponent = {
  render: () => {
    return promo() + page();
  }
}
export const MethodIntervalComponent = {
  render: () => {
    return;
  }
}
export const EnglishPuzzleComponent = {
  render: () => {
    return;
  }
}
export const SpeakItComponent = {
  render: () => {
    return;
  }
}
export const ListeningComponent = {
  render: () => {
    return;
  }
}
export const SavannahComponent = {
  render: () => {
    return;
  }
}
export const ConstructorComponent = {
  render: () => {
    return;
  }
}
export const VocabularyComponent = {
  render: () => {
    return;
  }
}
export const StatisticComponent = {
  render: () => {
    return;
  }
}
export const AboutUsComponent = {
  render: () => {
    return;
  }
}
