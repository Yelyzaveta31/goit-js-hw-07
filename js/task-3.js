
const inputName = document.querySelector("#name-input");
console.log(inputName);
const outputName = document.querySelector("#name-output");


inputName.addEventListener("input", event => {
    const normalizeName = event.target.value.trim();
    if (normalizeName) {
outputName.textContent = `${normalizeName}`
    }
     else { outputName.textContent = "Anonymous"
}
})