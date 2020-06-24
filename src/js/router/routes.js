import { HomeComponent, AuthComponent, MainComponent, SettingsComponent,
  LearningComponent, MethodIntervalComponent, EnglishPuzzleComponent,
  SpeakItComponent, ListeningComponent, SavannahComponent, ConstructorComponent,
  VocabularyComponent, StatisticComponent, AboutUsComponent } from './routerComponents';

export const routes = [
  { path: '/', component: HomeComponent, },
  { path: '/auth', component: AuthComponent, },
  { path: '/main', component: MainComponent, },
  { path: '/main/settings', component: SettingsComponent, },
  { path: '/main/learning', component: LearningComponent, },
  { path: '/main/method-interval', component: MethodIntervalComponent, },
  { path: '/main/english-puzzle', component: EnglishPuzzleComponent, },
  { path: '/main/speak-it', component: SpeakItComponent, },
  { path: '/main/listening', component: ListeningComponent, },
  { path: '/main/savannah', component: SavannahComponent, },
  { path: '/main/constructor', component: ConstructorComponent, },
  { path: '/vocabulary', component: VocabularyComponent, },
  { path: '/statistic', component: StatisticComponent, },
  { path: '/about-us', component: AboutUsComponent, },
];
