
const body = document.querySelector('body');
const changeColor = document.querySelector('.color');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  changeColor.textContent = newColor;
  body.style.backgroundColor = newColor;
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




