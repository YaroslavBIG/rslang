import getPromoPage from '../promoPages/getPromoPage.js';

var name = '';
var description = '';
var rules = '';
var video = '';
function games(game) {
  switch (game) {
    case 'speakit':
      name = 'SpeakIt';
      description =
        'SpeakIt - это мини-игра, при помощи которой можно прослушать произношение английских слов и проверить правильность их произношения.';
      rules =
        'Нажмите на слова, чтобы услышать их звучание.Нажмите на кнопку и произнесите слова в микрофон.';
      getPromoPage(name, description, rules, video);
      break;
    case 'english-puzzle':
      name = 'English puzzle';
      description =
        'English puzzle - это мини-игра, цель которой собрать предложения из размещённых в случайном порядке английских слов.';
      rules =
        'Нажимайте на пазлы, чтобы складывать их в предложения.Нажмите на кнопку check когда предложение собрано.Если предложение собрано правильно оно подсветится зелёным и вы сможете продолжить.Если предложение собрано неправильно вы сможете собрать его заново или нажать на кнопку i dont know если не знаете как правильно собрать предложение.';
      getPromoPage(name, description, rules, video);
      break;
  }
}

export default games;
