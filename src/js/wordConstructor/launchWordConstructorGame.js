import { fetchSprintGameData } from './fetchWordConstructorGameData';
import { randomInteger } from '../utils';
import { continuee } from './continue';

export function launchWordConstructorGame() {
  continuee();
  fetchSprintGameData(randomInteger(0, 59), randomInteger(0, 5));
}
