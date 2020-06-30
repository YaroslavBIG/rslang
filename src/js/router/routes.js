import {
  HomeComponent, AuthComponent, MainComponent, SettingsComponent,
  WordLearningComponent, WordRepeatComponent, EnglishPuzzleComponent,
  SpeakItComponent, AuditionComponent, SavannahComponent, SprintComponent,
  WordPuzzleComponent, VocabularyComponent, StatisticComponent, AboutUsComponent,
} from './routerComponents';

export const routes = [
  { path: '/', component: HomeComponent },
  { path: '/auth', component: AuthComponent },
  { path: '/main', component: MainComponent },
  { path: '/main/settings', component: SettingsComponent },
  { path: '/main/word-learning', component: WordLearningComponent },
  { path: '/main/word-repeat', component: WordRepeatComponent },
  { path: '/main/english-puzzle', component: EnglishPuzzleComponent },
  { path: '/main/speak-it', component: SpeakItComponent },
  { path: '/main/audition', component: AuditionComponent },
  { path: '/main/savannah', component: SavannahComponent },
  { path: '/main/sprint', component: SprintComponent },
  { path: '/main/word-puzzle', component: WordPuzzleComponent },
  { path: '/vocabulary', component: VocabularyComponent },
  { path: '/statistic', component: StatisticComponent },
  { path: '/about-us', component: AboutUsComponent },
];
