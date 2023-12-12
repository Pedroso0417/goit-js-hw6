const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");
const outputElementContent = outputElement.textContent;

inputElement.addEventListener("input", handleInput);

function handleInput(event) {
  let inputValidation = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
  outputElement.textContent = inputValidation;
}
