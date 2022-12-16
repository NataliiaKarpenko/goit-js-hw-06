function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtbEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const handleChangeColorBtbClick = event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
};

changeColorBtbEl.addEventListener('click', handleChangeColorBtbClick);
