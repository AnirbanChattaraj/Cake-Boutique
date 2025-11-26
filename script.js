
const snowContainer = document.querySelector('.snow');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('span');
  s.style.left = Math.random() * 100 + 'vw';
  s.style.animationDelay = Math.random() * 5 + 's';
  s.style.animationDuration = 4 + Math.random() * 6 + 's';
  snowContainer.appendChild(s);
}
