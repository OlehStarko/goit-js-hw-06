const inputForm = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputForm.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputName.textContent = event.currentTarget.value;

  if (outputName.textContent === "") {
    outputName.textContent = "Anonymous";
  }
}
