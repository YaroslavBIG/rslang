export const answerCheck = () => {
  const wordBlock = document.querySelector('.sentence--target-word');

  const word = sessionStorage.getItem('word').toLowerCase();
  const currentWord = wordBlock.innerText.toLowerCase();

  const hint = wordBlock.firstChild || wordBlock;
  const isHint = hint.nodeName === 'SPAN';
  return !!((word === currentWord) && !isHint);
};