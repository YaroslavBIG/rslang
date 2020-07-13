export const isHint = () => {
  const wordBlock = document.querySelector('.sentence--target-word');
  const hint = wordBlock.firstChild || wordBlock;
  return hint.nodeName === 'SPAN';
};
