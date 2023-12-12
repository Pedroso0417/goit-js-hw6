document.addEventListener("counter", function () {
  let counterValue = 0;

  function updateCounter() {
    document.getElementById("value").innerText = counterValue;
  }

  document
    .getElementById("counter")
    .addEventListener("click", function (event) {
      const action = event.target.dataset.action;

      if (action === "decrement") {
        counterValue--;
      } else if (action === "increment") {
        counterValue++;
      }

      updateCounter();
    });

  updateCounter();
});
