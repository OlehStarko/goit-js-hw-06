const inputForm = document.querySelector("#validation-input");
const inputDataLength = Number(inputForm.getAttribute("data-length"));

inputForm.addEventListener("change", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === +inputDataLength) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("valid");
    inputForm.classList.add("invalid");
  }
}
