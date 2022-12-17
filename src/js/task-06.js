const validationInputEl = document.querySelector('#validation-input');

const handleValidationInputBlur = () => {
  if (validationInputEl.value.length !== Number(validationInputEl.dataset.length)) {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  } else {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  }
};
validationInputEl.addEventListener('blur', handleValidationInputBlur);
