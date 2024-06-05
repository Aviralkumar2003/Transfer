document.addEventListener('DOMContentLoaded', function () {
    var audio = document.querySelector('audio');
    var playButton = document.querySelector('.play-button');
  
    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
  });
  