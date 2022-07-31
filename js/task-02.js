const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsLink = document.getElementById("ingredients");
const ingredientsArr = [...ingredients].map((element) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("title");
  itemsEl.textContent = element;
  ingredientsLink.appendChild(itemsEl);
  return itemsEl;
});
