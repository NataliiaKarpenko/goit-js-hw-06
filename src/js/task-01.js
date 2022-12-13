const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

// const categoriesEl = document.querySelector('#categories');
// const itemEl = categoriesEl.children;
// console.log(`Number of categories: ${categoriesEl.children.length}`);

// const itemHeadingEl = document.querySelectorAll('h2');
// console.log(itemHeadingEl);

const describeCategory = itemEl => {
  for (let i = 0; i < itemEl.length; i += 1) {
    let itemHeadingEl = itemEl[i].firstElementChild;
    let itemListEl = itemEl[i].lastElementChild;
    let itemListComponentEl = itemEl[i].lastElementChild.children;
    console.log(`Category: ${itemHeadingEl.textContent}`);

    console.log(`Elements: ${itemListComponentEl.length}`);
  }
};
describeCategory(itemEl);
