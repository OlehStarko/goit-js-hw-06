function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

console.log(spanEl);

buttonEl.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = getRandomHexColor();
});
