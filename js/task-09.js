function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  const body = document.body;

  body.style.backgroundColor = randomColor;

  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = randomColor;
}

// function changeBackgroundColor() {
//   const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff5733", "#33ff57"];

//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   const body = document.body;

//   body.style.backgroundColor = randomColor;

//   const colorSpan = document.querySelector(".color");
//   colorSpan.textContent = randomColor;
// }
