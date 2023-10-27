document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelector('.images')
fetch("www.themealdb.com/api/json/v1/1/categories.php?f=a")
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
console.log(item.strCategoryThumb);
console.log(item.strCategory)

const ingredient = document.getElementById(ingredient);
const images = document.createElement("ul");
const recipe = document.getElementById(recipe)
const showrecipe =document.getElementById
showrecipe.addEventListener("click",

)

ingredient = images[1];
measure = images['strmeasure' + count];
count += 1;
ingredients.push($)









