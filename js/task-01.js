const itemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElements.length}`);

const categoryArr = [...itemElements]
  .map(
    (elements) =>
      `Category: ${elements.firstElementChild.textContent}
Elements: ${elements.lastElementChild.children.length}`
  )
  .join("\n");

console.log(categoryArr);
