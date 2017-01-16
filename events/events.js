function handleClick(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

document.querySelectorAll('div').forEach(d => d.addEventListener('click', handleClick, { capture: true }));
