var listenQueue = new Queue(5);
const pattern = '6565656565'

function keycode(e) {
  listenQueue.queue(e.keyCode);
  if (listenQueue.contents().includes(pattern)) {
    listenQueue.clear();
    let h1 = document.createElement("h1");
    let content = document.createTextNode("Trigerred!");
    h1.appendChild(content);
    document.title = "Konami";
    document.body.appendChild(h1);
    cornify_add();
  }
}

window.addEventListener('keyup', keycode);
