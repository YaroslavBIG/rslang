import { voiceHintBtnHandler } from './voiceHintBtnHandler';
import { createLivesContainer } from './createLivesContainer';
import { randomInteger } from '../utils';
import { fetchSavannahData } from './fetchSavannahData';

export const launchSavannahMethods = () => {
  voiceHintBtnHandler();
  createLivesContainer();
  fetchSavannahData(randomInteger(0, 59), randomInteger(0, 5));
};
