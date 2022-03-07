const board = document.querySelector('#board');
colors = [
  '#C67ACE',
  '#FF449F',
  '#FF005C',
  '#F7FD04',
  '#54E346',
  '#A6F6F1',
  '#00FAAC',
];
const SQUARES_NUM = 493;

for (let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
