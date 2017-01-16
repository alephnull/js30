const menuBackground = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'));
  const menuCoords = this.querySelector('.dropdown').getBoundingClientRect();
  const { top: navOffset } = nav.getBoundingClientRect();
  
  menuBackground.style.width = menuCoords.width + 'px';
  menuBackground.style.height = menuCoords.height + 'px';
  menuBackground.style.transform = `translate(${menuCoords.left}px, ${menuCoords.top - navOffset}px)`;
  menuBackground.classList.add('open');
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  menuBackground.classList.remove('open');
}

document.querySelectorAll('.cool > li').forEach(d => {
  d.addEventListener('mouseenter', handleEnter);
  d.addEventListener('mouseleave', handleLeave);
});
