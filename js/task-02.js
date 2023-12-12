const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  // Add the bottom margin for all elements except the last one
  if (index < ingredients.length - 1) {
    listItem.classList.add("not-last-child");
  }

  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);

// const ingredientsList = document.getElementById("ingredients");

// ingredientsItems.forEach((ingredientItem, index) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");

//   if (index < ingredients.length - 1) {
//     listItem.classList.add("not-last-child");
//   }

//   ingredient.appendChild(listItem);
// });

// Will create a separate <li> element. Be sure to use the document.createElement() method.

// Will add the ingredient name as its text content.
// Will add the item class to the element.
// Then will insert all <li> to the ul#ingredients list in a single operation.
