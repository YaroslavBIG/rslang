export const audioWordsDictionary = (src) => {
  const wordAudio = new Audio(`./assets/${src}`);
  wordAudio.play();
};
