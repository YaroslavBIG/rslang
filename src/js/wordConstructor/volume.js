var sound = document.createElement('audio');
export function volume(randomAudio) {
  document
    .getElementsByClassName('game-block__header-volume')[0]
    .addEventListener('click', function () {
      sound.src = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${randomAudio}`;
      sound.play();
      if (sound !== undefined) {
        sound
          .then((_) => {
            // Autoplay started!
          })
          .catch((error) => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
      }
    });
}
