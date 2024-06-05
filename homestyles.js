const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  const balloons = document.querySelectorAll(".balloon");
  balloons.forEach(balloon => balloon.remove());
}


window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("dblclick", () => {
  removeBalloons();
});


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




function redirectTo(url) {
  window.location.href = url;
}



