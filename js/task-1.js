const listCategories = document.querySelector('#categories');
const itemCategories = listCategories.querySelectorAll('.item');
console.log(`Number of categories : ${itemCategories.length}`);
itemCategories.forEach((item) => {
    const categoriesTitle = item.querySelector('h2');
    console.log(`Category: ${categoriesTitle.textContent}`);
    const categories = item.querySelectorAll('li');
    console.log(`Elements: ${categories.length}`);
})



