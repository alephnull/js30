let isDrawing = false;
let lastX = lastY = 0;

function draw(ctx, e) {
  if (!isDrawing) return;
  
  //console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function setup() {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 50;

  canvas.onmousemove = e => { draw(ctx, e); };
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}


