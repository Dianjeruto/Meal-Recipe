function search (){
let results = document.getElementById("results")

let user_input = document.getElementById("user_input").value;
// API URL from mealdb recipe 
let url = 'https://themealdb.com/api/json/v1/1/search.php?s='

//the url is just for searching and is not useful input
//add url and user input to get reuslts
fetch( url + user_input)

.then(response =>response.json())
.then((data) => {
    //access data from the larger "data" array 
    let myMeal =data.meals[0];
    let ingredients =[];
    // iterate to get all the ingredients for the meal
    for (let ing in myMeal){
        let ingredient ="";
        if (ing.startsWith("strIngredient")&& myMeal[ing]){
            ingredient =myMeal[ing];
            ingredients.push(`${ingredient}`);
        }
    }
    //insert new HTML adjacent to results div
    results.insertAdjacentHTML('beforeend', 
    `
    <h2>${myMeal.strMeal}</h2>
    <img src=${myMeal.strMealThumb}>
    <h3>Ingredients:</h3>
    <ul></ul>
    <h3>Instructions:</h3>
    <P>${myMeal.strInstructions}</p>
    `)
    //iterate over ingredients array to list them in the UL tag
    let listingredients = document.querySelector('ul')
    ingredients.forEach((ingredient) =>{
        listingredients.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`)
    });

    })
}