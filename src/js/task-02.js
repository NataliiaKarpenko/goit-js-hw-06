const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const createIngrediensItem = ingredients.map(el => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList = 'item';
  ingredientsItemEl.textContent = el;
  return ingredientsItemEl;
});

ingredientsListEl.append(...createIngrediensItem);
