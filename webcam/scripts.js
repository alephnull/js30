const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const controls = {};
document.querySelectorAll('.controls input[type=range]').forEach(i => controls[i.name] = i);

let greenscreen = false;

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(ms => {
      video.src = window.URL.createObjectURL(ms);
      video.play();
    })
    .catch(err => {
      alert(err, "We need your webcam for this to work.");
    });
}

function gscreen(pixels) {
  const rmin = controls.rmin.value - controls.cwidth.value;
  const rmax = controls.rmax.value + controls.cwidth.value;
  const gmin = controls.gmin.value - controls.cwidth.value;
  const gmax = controls.gmax.value + controls.cwidth.value;
  const bmin = controls.bmin.value - controls.cwidth.value;
  const bmax = controls.bmax.value + controls.cwidth.value;
  
  for (let i=0; i<pixels.data.length; i+=4) {
    const r = pixels.data[i];
    const g = pixels.data[i+1];
    const b = pixels.data[i+2];

    if (r >= rmin && r <= rmax
        && g >= gmin && g <= gmax
        && b >= bmin && b <= bmax) {
      pixels.data[i+3] = 0;
    }
  }
  return pixels;
}
  
function paintToCanvas() {
  const {videoWidth: w, videoHeight: h} = video;
  [canvas.width, canvas.height] = [w, h];
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, w, h);
    let pixels = ctx.getImageData(0, 0, w, h);
    if (greenscreen) {
      pixels = gscreen(pixels);
    }
    ctx.putImageData(pixels, 0, 0);
  }, 100);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const photo = canvas.toDataURL('image/jpeg');
  const plink = document.createElement('a');
  plink.href = photo;
  plink.innerHTML = `<img src="${photo}" alt="Pic" />`;
  plink.download = "booth";
  strip.insertBefore(plink, strip.firstChild);
}

function colourPicker(e) {
  const {offsetX: x, offsetY: y} = e;
  const pixels = ctx.getImageData(x, y, 1, 1);
  let rmin = 255;
  let rmax = 0;
  let bmin = 255;
  let bmax = 0;
  let gmin = 255;
  let gmax = 0;
  for (let i=0; i<pixels.data.length; i+=4) {
    rmax = pixels.data[i] > rmax ? pixels.data[i] : rmax;
    gmax = pixels.data[i+1] > gmax ? pixels.data[i+1] : gmax;
    bmax = pixels.data[i+2] > bmax ? pixels.data[i+2] : bmax;

    rmin = pixels.data[i] < rmin ? pixels.data[i] : rmin;
    gmin = pixels.data[i+1] < gmin ? pixels.data[i+1] : gmin;
    bmin = pixels.data[i+2] < bmin ? pixels.data[i+2] : bmin;
  }

  controls.rmin.value = rmin;
  controls.rmax.value = rmax;
  controls.gmin.value = gmin;
  controls.gmax.value = gmax;
  controls.bmin.value = bmin;
  controls.bmax.value = bmax;
}

function togglePause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleGreenscreen() {
  greenscreen = !greenscreen;
}

video.addEventListener('canplay', paintToCanvas);
video.addEventListener('click', togglePause);
canvas.addEventListener('click', colourPicker);
