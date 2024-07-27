const removeTransition = function (e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);
window.addEventListener('keydown', playSound);
