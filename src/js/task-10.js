function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector('#controls');
const inputNumberEl = containerEl.firstElementChild;
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesDivEl = document.querySelector('#boxes');

const createBoxes = amount => {
  amount = Number(inputNumberEl.value);
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${(30 + 10 * i).toString()}px`;
    boxEl.style.height = `${(30 + 10 * i).toString()}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesDivEl.append(boxEl);
  }
};

createBtnEl.addEventListener('click', createBoxes);

const deleteBoxes = () => {
  boxesDivEl.innerHTML = '';
  inputNumberEl.value = '';
};

destroyBtnEl.addEventListener('click', deleteBoxes);
