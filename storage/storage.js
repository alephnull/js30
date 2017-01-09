const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const controlButtons = document.querySelectorAll('.list__control');

function addItem(e) {
  e.preventDefault();
  const item = {
    text: (this.querySelector('[name=item]')).value,
    done: false
  };
  items.push(item);
  populatePlates(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populatePlates(plates=[], container) {
  container.innerHTML = plates.map((p, i) => {
    return `
	<li>
	  <input type="checkbox" data-index=${i} id="item${i}" ${p.done ? 'checked' : ''}/>
	  <label for="item${i}">${p.text}</label>
	</li>
	   `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return;

  const i = e.target.dataset.index;
  items[i].done = !items[i].done;
  localStorage.setItem('items', JSON.stringify(items));
  populatePlates(items, itemsList);
}

function handleControl(e) {
  switch(this.name) {
  case "clear":
    items.length = 0;
    break;
  case "reset":
    items.forEach(i => i.done = false);
    break;
  case "done":
    items.forEach(i => i.done = true);
    break;
  default:
    console.error(this.name, " called. Check list__control handlers.")
  }

  localStorage.setItem('items', JSON.stringify(items));
  populatePlates(items, itemsList);
}

populatePlates(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
controlButtons.forEach(c => c.addEventListener('click', handleControl));
