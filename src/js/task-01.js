const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

const describeCategory = itemEl => {
  for (let i = 0; i < itemEl.length; i += 1) {
    let itemHeadingEl = itemEl[i].firstElementChild;
    let itemSublistEl = itemEl[i].lastElementChild;
    let itemSublistComponentEl = itemSublistEl.children;
    console.log(`Category: ${itemHeadingEl.textContent}`);

    console.log(`Elements: ${itemSublistComponentEl.length}`);
  }
};
describeCategory(itemEl);
