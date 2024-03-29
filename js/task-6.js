const box = document.querySelector("#boxes");  
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");


buttonCreate.addEventListener("click", updateMarkup);
buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function boxesCreate(amount) {
  destroyBoxes();
  let sizes = 30;
  const boxesArr = [];

  for (let i = 0; i < amount; i++) {
    const boxNew = document.createElement("div");
    sizes += 10;
    boxNew.style.width = `${sizes}px`;
    boxNew.style.height = `${sizes}px`;
    boxNew.style.backgroundColor = getRandomHexColor();
    boxesArr.push(boxNew);
   
  }
  box.append(...boxesArr);
}

function destroyBoxes() {
  box.innerHTML = "";
}

  function updateMarkup () {
    const input = document.querySelector("input");
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      boxesCreate(amount);
      input.value = "";
    }}


