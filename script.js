document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.images');
    const searchBtn = document.getElementById("search-btn");

    fetch("https//themealdb.com/api/json/v1/1/categories.php?f=a")
    .then(response => response.json())
    .then((data) => {
        console.log(item);
        const userInput =document.getElementById(user-inp)
        const results = data.categories;
        for (const item of results) {
            const imagesDiv = document.createElement('div');
            imagesDiv.innerHTML = `
                <img src='${item.strCategoryThumb}'>
            `;
            images.appendChild(imagesDiv);
        }
    });
});

    const count=1;
    const ingredients=[];
    const ingredient="";
    const measure ="";
    if (i.startsWith("strIngredient") && myMeal[i]);
ingredient=item[i];
ingredients.push('${measure} ${ingredients}'
);
console.log(ingredients);
result.innerHTML='<img src=${item.strCategoryThumb}>';








