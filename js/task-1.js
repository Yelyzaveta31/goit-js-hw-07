
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
//  елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).



const categoriesItems = document.querySelectorAll(".item");
// console.log(categoriesItems);
console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach(item => {
    const titleItem = item.querySelector("h2").textContent;
    const countLi = item.querySelectorAll("li").length;
    console.log(`Category: ${titleItem}`);
    console.log (`Elements: ${countLi}`);
})

