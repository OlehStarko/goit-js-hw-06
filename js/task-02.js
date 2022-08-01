const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//FIRST VARIANT

// const ingredientsLink = document.getElementById("ingredients");

// const ingredientsArr = [...ingredients].map((element) => {
//   const itemsEl = document.createElement("li");
//   itemsEl.classList.add("title");
//   itemsEl.textContent = element;

//   return itemsEl;
// });

// ingredientsLink.append(...ingredientsArr);

//SECOND VARIANT

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
