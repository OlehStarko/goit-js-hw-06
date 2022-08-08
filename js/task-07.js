const inputForm = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputForm.addEventListener("input", () => {
  const fontSize = inputForm.value;
  textEl.style.fontSize = fontSize + "px";
});
