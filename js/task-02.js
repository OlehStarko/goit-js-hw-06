const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsLink = document.getElementById("ingredients");
// const ingredientsArr = [...ingredients].map((element) => {
//   const itemsEl = document.createElement("li");
//   itemsEl.classList.add("title");
//   itemsEl.textContent = element;
//   ingredientsLink.appendChild(itemsEl);
//   return itemsEl;
// });

const ingredientsLink = document.getElementById("ingredients");

const createIngredientEl = () => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("title");

  return itemsEl;
};

const addIngredientTextContent = ingredients.map((element) => {
  const addTextContent = createIngredientEl();
  addTextContent.textContent = element;

  return addTextContent;
});

ingredientsLink.append(...addIngredientTextContent);
