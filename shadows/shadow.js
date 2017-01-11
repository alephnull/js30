const hero = document.querySelector('.hero');
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  let { offsetX: x, offsetY: y } = e;
  const {offsetWidth: w, offsetHeight: h} = hero;
  
  if (e.target != this) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  let [xw, yw ] = [[x, w], [y, h]].map(i => Math.round((i[0]/i[1]*walk) - walk/2));
  let blur = Math.round(Math.abs(xw+yw/walk));
  // xw = Math.round((x/w*walk) - walk/2)
  // xy = Math.round((y/h*walk) - walk/2)
  
  text.style.textShadow = `${xw}px ${yw}px ${blur}px teal`;
}

hero.addEventListener('mousemove', shadow);
