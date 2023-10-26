document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelector('.images')
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then((data) => {
    console.log(data)

    const results = data.categories
    for(const item of results){
        const imagesDiv = document.createElement('div')
        imagesDiv.innerHTML = `
            <img src='${item.strCategoryThumb}'>
        `
images.appendChild(imagesDiv)
    }
})
})
const ingredients = [];
console.log(ingredients);
strMealThumb



