const validationInputEl = document.querySelector('#validation-input');

const handleValidationInputBlur = () => {
  if (validationInputEl.value.length !== Number(validationInputEl.dataset.length)) {
    validationInputEl.classList.add('invalid');
  } else {
    validationInputEl.classList.add('valid');
  }
};
validationInputEl.addEventListener('blur', handleValidationInputBlur);
