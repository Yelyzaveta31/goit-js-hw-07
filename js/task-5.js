
// Напиши скрипт, який змінює колір фону елемента <body>
//  через інлайн-стиль по кліку на button.change-color
//  і задає це значення кольору текстовим вмістом для span.color.

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
