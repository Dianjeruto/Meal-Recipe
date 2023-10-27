function search(){

    const images = document.querySelector('.images');
    const searchBtn = document.getElementById("search-btn");

    
    const userInp = document.getElementById("user-inp").value;

    fetch('https://themealdb.com/api/json/v1/1/categories.php?f='+ userInp)

    .then(response => response.json())
    .then((data) => {
        const myMeal =data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);
    });


    const count=1;
    const ingredients=[];
    const ingredient="";
    const measure ="";
    if (i.startsWith("strIngredient") && myMeal[i]);
ingredient=item[i];
measure =myMeal[`strMeasure` + count];
count  += 1;
ingredients.push('${measure} ${ingredients}'
);
console.log(ingredients);
result.innerHTML=`
<img src=${item.strCategoryThumb}>
<div class = "images">
<h1>${item.strCategory}</h1>
</div>
`;
const ingredientCon = document.getElementById("ingredient-con");
const item=document.createElement("ul");
const recipe=document.getElementById("recipe");
const showRecipe =document.getElementById("showRecipe");

};
  


