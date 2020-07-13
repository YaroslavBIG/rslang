import { voiceHintBtnHandler } from './voiceHintBtnHandler';
import { createLivesContainer } from './createLivesContainer';
import { questionAnimation } from './questionAnimation';

export const launchSavannahMethods = () => {
  voiceHintBtnHandler();
  createLivesContainer();
  questionAnimation();
};
