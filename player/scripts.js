const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playToggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const pTime = player.querySelector('#playerTime');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('input[type="range"]');
const fullscreenButton = player.querySelector('.fullscreen');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleButton() {
  playToggle.innerHTML = (video.paused) ? '▶' : '⏸';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  // console.log(this.dataset);
}

function floatTimeToDecimal(time) {
  let sec = parseInt(time);
  let hr = parseInt(min/3600);
  let mins;
  
  if (hr) {
    mins = parseInt((time - hr*3600)/60);
  } else {
    mins = parseInt(time/60);
  }

  if (mins) {
    sec = parseInt((time - min*60))
  } else {
    sec = parseInt(time);
  }

  return `${hr}\:${min}\:${sec}`;

}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  pTime.textContent = video.currentTime.toFixed(2);
  let p = video.currentTime/video.duration * 100;
  progressBar.style.flexBasis = `${p}%`;
}

function seekTo(e) {
  let p = e.offsetX/progress.scrollWidth * video.duration;
  console.log('Seeking to ', p);
  video.currentTime = p
}

video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

playToggle.addEventListener('click', togglePlay);

skipButtons.forEach(s => {
  s.addEventListener('click', skip);
});
ranges.forEach(r => {
  r.addEventListener('change', handleRange);
});
progress.addEventListener('click', seekTo);

fullscreenButton.addEventListener('click', () => video.webkitEnterFullscreen());
