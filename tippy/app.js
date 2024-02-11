const moveto = new MoveTo();

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => moveto.registerTrigger(btn));

const link = document.querySelector('a');
link.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  moveto.move(target, {
    duration: 3000,
  });
}
