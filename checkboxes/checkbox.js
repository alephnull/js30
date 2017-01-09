const items = [];
var lastSelect = null;

function selectNodes(first, last, flag) {
  if (first > last) {
    [ first, last ] = [ last, first ];
  }
  
  for (let i=first; i<=last; i++) {
    items[i].checked = flag;
  }
}

function changed(index, e) {
  //console.log({index}, {lastSelect}, e.target.checked);
  if (lastSelect>=0 && e.shiftKey) {
    selectNodes(lastSelect, index, e.target.checked);
  } 
  lastSelect = index;
}

function setup() {
  items.push(...document.querySelectorAll('.item input[type="checkbox"]'));
  for (let i=0; i<items.length; i++) {
    items[i].onclick = e => changed(i, e);
  }
  console.log(items);
}

  
