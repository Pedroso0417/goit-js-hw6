let counterValue = 0;
function updateCounter() {
  document.getElementById("value").innerText = counterValue;
}

document.getElementById("counter").addEventListener("click", function (event) {
  const action = event.target.dataset.action;

  if (action === "decrement") {
    counterValue--;
  } else if (action === "increment") {
    counterValue++;
  }

  updateCounter();
});

//
// document.getElementById("counter").addEventListener("click", function (event) {
//   const action = event.target.dataset.action;
//   document.dispatchEvent(new CustomEvent("counter", { detail: { action } }));
// });

// document.addEventListener("counter", function (event) {
//   let counterValue = 0;

//   function updateCounter() {
//     document.getElementById("value").innerText = counterValue;
//   }

//   const action = event.detail.action;

//   if (action === "decrement") {
//     counterValue--;
//   } else if (action === "increment") {
//     counterValue++;
//   }

//   updateCounter();
// });
