const nameInputEl = document.querySelector('#name-input');
const nameOutPutEl = document.querySelector('#name-output');

const handleNameInputElInput = () => {
  if (nameInputEl.value !== '') {
    nameOutPutEl.textContent = nameInputEl.value;
  } else {
    nameOutPutEl.textContent = 'Anonymous';
  }
};

nameInputEl.addEventListener('input', handleNameInputElInput);
