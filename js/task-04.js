let valueEl = Number(document.querySelector("#value").textContent);
const counterValue = document.querySelector("#value");

const decrementButton = document.querySelector("#counter").firstElementChild;
const incrementButton = document.querySelector("#counter").lastElementChild;
console.log(incrementButton);

incrementButton.addEventListener("click", (event) => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrementButton.addEventListener("click", (event) => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
});
