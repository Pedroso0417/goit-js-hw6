const inputElemaent = document.getElementById("name-input");
const inputElement = document.getElementById("name-ouput");
const outputElementContent = outputElement.textContent;

inputElement.addEventListener("input", handleInput);

const handleInput = (event) => {
  let inputValidation = evnt.currenTarget.value
    ? event.cuttentTarget.value
    : "Anonymous";

  return inputValidation;
};
