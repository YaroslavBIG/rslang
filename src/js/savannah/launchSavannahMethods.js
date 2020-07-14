import { voiceHintBtnHandler } from './voiceHintBtnHandler';
import { createLivesContainer } from './createLivesContainer';
import { questionAnimation } from './questionAnimation';
import { randomInteger } from '../utils';
import { fetchSavannahData } from './fetchSavannahData';

export const launchSavannahMethods = async () => {
  voiceHintBtnHandler();
  createLivesContainer();
  questionAnimation();
  await fetchSavannahData(randomInteger(0, 59), randomInteger(0, 5));
};
