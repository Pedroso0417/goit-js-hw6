const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("input", handleInput);

function handleInput(event) {
  const inputValue = event.currentTarget.value;
  const validLength = inputElement.dataset.length;

  if (inputValue.length === parseInt(validLength)) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}
