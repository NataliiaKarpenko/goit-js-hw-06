const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
let counterValueEl = document.querySelector('#value');

const handleDecrementBtnClick = () =>
  (counterValueEl.textContent = Number(counterValueEl.textContent) - 1);

const handleIncrementBtnClick = () =>
  (counterValueEl.textContent = Number(counterValueEl.textContent) + 1);

decrementBtnEl.addEventListener('click', handleDecrementBtnClick);

incrementBtnEl.addEventListener('click', handleIncrementBtnClick);
