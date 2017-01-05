function setup() {
  var hands = {};
  hands.sec = document.querySelector('.second-hand');
  hands.min = document.querySelector('.min-hand');
  hands.hr = document.querySelector('.hour-hand');

  setDate(hands);
  window.setInterval(setDate, 1000, hands);
}

function setDate(hands) {
  const now = new Date();
  const secDeg = ((now.getSeconds()/60) * 360) + 90;
  const minDeg = ((now.getMinutes()/60) * 360) + 90;
  const hrDeg = ((now.getHours()/12) * 360) + 90;
  hands.sec.style.transform = `rotate(${secDeg}deg)`;
  hands.min.style.transform = `rotate(${minDeg}deg)`;
  hands.hr.style.transform = `rotate(${hrDeg}deg)`;
}
