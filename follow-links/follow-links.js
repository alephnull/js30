function highlightLink(e, h) {
  const coords = e.target.getBoundingClientRect();
  const c = { width: coords.width,
              height: coords.height,
              top: coords.top + window.scrollY,
              left: coords.left + window.scrollX };

  h.style.width = `${c.width}px`;
  h.style.height = `${c.height}px`;
  h.style.transform = `translate(${c.left}px, ${c.top}px)`;
}

function setup() {
  const triggers = document.querySelectorAll('a');
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.append(highlight);

  triggers.forEach(t => {
    t.addEventListener('mouseenter', (e) => highlightLink(e, highlight));
  });
}


