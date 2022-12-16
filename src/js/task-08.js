const formEl = document.querySelector('.login-form');

const handleFormElSubmit = Event => {
  Event.preventDefault();
  const formElements = Event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Fill in all the fields, please.');
  }

  // const formData = new FormData(Event.currentTarget);
  // formData.forEach((value, key) => {
  //   console.log('name', key);
  //   console.log('value', value);
  // });

  console.log({ email, password });

  Event.currentTarget.reset();
};

formEl.addEventListener('submit', handleFormElSubmit);
