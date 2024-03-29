
const categoriesItems = document.querySelectorAll(".item");
// console.log(categoriesItems);
console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach(item => {
    const titleItem = item.querySelector("h2").textContent;
    const countLi = item.querySelectorAll("li").length;
    console.log(`Category: ${titleItem}`);
    console.log (`Elements: ${countLi}`);
})

