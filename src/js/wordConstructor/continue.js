import { restartWordConstructor } from './restartWordConstructor';
import { constantsData } from './constants';
import { userWordHandler } from './userWordHandler';

let raundsCounter = 1;
export function continuee() {
  document.getElementsByClassName(
    'game-block__footer-continue',
  )[0].onclick = function () {
    constantsData.total += 1;
    document.getElementsByClassName(
      'game-block__context-image',
    )[0].style.display = 'none';
    document.getElementsByClassName(
      'game-block__context-text',
    )[0].style.display = 'none';
    document.getElementsByClassName(
      'game-block__context-name',
    )[0].style.display = 'none';
    document.getElementsByClassName('game-block__body-cells')[0].innerHTML = '';
    document.getElementsByClassName(
      'game-block__body-cells-answers',
    )[0].innerHTML = '';
    document.getElementsByClassName(
      'game-block__header-volume',
    )[0].style.display = 'none';
    document.getElementsByClassName('game-block__header')[0].style.width = '100%';
    document.getElementsByClassName('game-block__volume-block')[0].style.width = '0%';
    raundsCounter++;
    if (raundsCounter == 11) {
      const statisticBlock = document.getElementsByClassName('statistic-block');
      statisticBlock[0].style.display = 'flex';
      document.getElementsByClassName('game-block')[0].style.display = 'none';
      document.getElementsByClassName(
        'wrapper-block__settings-and-raunds-description',
      )[0].style.display = 'none';
      restartWordConstructor();
      raundsCounter = 1;
      return;
    }
    document.getElementsByClassName(
      'wrapper-block__raund',
    )[0].innerHTML = `${raundsCounter}/10`;
    document.getElementsByClassName(
      'game-block__footer-dont-know-button',
    )[0].style.display = 'inline-block';
    document.getElementsByClassName(
      'game-block__footer-continue',
    )[0].style.display = 'none';
    userWordHandler();
  };
  document.onkeydown = function (e) {
    if (
      document.getElementsByClassName('game-block__footer-continue')[0].style
        .display == 'inline-block'
    ) {
      if (e.code == 'Enter') {
        constantsData.total += 1;
        document.getElementsByClassName(
          'game-block__context-image',
        )[0].style.display = 'none';
        document.getElementsByClassName(
          'game-block__context-text',
        )[0].style.display = 'none';
        document.getElementsByClassName(
          'game-block__context-name',
        )[0].style.display = 'none';
        document.getElementsByClassName('game-block__body-cells')[0].innerHTML = '';
        document.getElementsByClassName(
          'game-block__body-cells-answers',
        )[0].innerHTML = '';
        document.getElementsByClassName(
          'game-block__header-volume',
        )[0].style.display = 'none';
        document.getElementsByClassName('game-block__header')[0].style.width = '100%';
        document.getElementsByClassName(
          'game-block__volume-block',
        )[0].style.width = '0%';
        raundsCounter++;
        if (raundsCounter == 11) {
          const statisticBlock = document.getElementsByClassName(
            'statistic-block',
          );
          statisticBlock[0].style.display = 'flex';
          document.getElementsByClassName('game-block')[0].style.display = 'none';
          document.getElementsByClassName(
            'wrapper-block__settings-and-raunds-description',
          )[0].style.display = 'none';
          restartWordConstructor();
          raundsCounter = 1;
          return;
        }
        document.getElementsByClassName(
          'wrapper-block__raund',
        )[0].innerHTML = `${raundsCounter}/10`;
        document.getElementsByClassName(
          'game-block__footer-dont-know-button',
        )[0].style.display = 'inline-block';
        document.getElementsByClassName(
          'game-block__footer-continue',
        )[0].style.display = 'none';
        userWordHandler();
      }
    }
  };
}
