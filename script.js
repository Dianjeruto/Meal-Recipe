document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.images');
    const searchBtn = document.getElementById("search-btn");
    fetch("https//themealdb.com/api/json/v1/1/categories.php?f=a")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
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





