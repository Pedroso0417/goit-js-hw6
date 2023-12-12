document.addEventListener("text", function () {
  const inputField = document.getElementById("validation-input");
  const charCountSpan = document.getElementById("charCount");

  inputField.addEventListener("blur", function () {
    checkCharacterCount(
      inputField,
      parseInt(inputField.getAttribute("data-length"))
    );
  });

  function checkCharacterCount(input, expectedCount) {
    const inputValue = input.value.trim();
    const isValid = inputValue.length === expectedCount;

    if (isValid) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  }
});
