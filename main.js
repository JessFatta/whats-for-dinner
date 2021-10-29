// VARIABLES
var addARecipeButton = document.querySelector("#add-a-recipe-button");

var sideOption = document.querySelector("#side");
var mainDishOption = document.querySelector("#main-dish");
var dessertOption = document.querySelector("#dessert");
var entireMealOption = document.querySelector("#entire-meal");

var letsCookButton = document.querySelector("#lets-cook-button");

var cookPotImage = document.querySelector(".recipe-box");

var youShouldMake = document.querySelector("#you-should-make");

//var clearButton = document.querySelector("#clear-button");
// if i want to add clear button back and make it functional then put this code
//<button id="clear-button">CLEAR</button>
//on line 34 under full random recipe in HTML
// if you wanna do the add a recipe CYOA then add this on line 9 in HTML
// <button id="add-recipe-button">ADD A RECIPE</button>

var randomGeneratedRecipe = document.querySelector("#random-generated-recipe");
var fullRandomRecipe = document.querySelector("#full-random-recipe");



// EVENT LISTENERS
letsCookButton.addEventListener("click", displayARecipe);

//clearButton.addEventListener("click", mainView)


//CLASS LISTS DOM

// function mainView() {
youShouldMake.classList.add('hidden');
//clearButton.classList.add('hidden');
// };

//FUNCTIONS
function displayRecipeView() {
  cookPotImage.classList.add('hidden');
  youShouldMake.classList.remove('hidden');
//  clearButton.classList.remove('hidden');
};


// function mainView() {
// youShouldMake.classList.add('hidden');
// clearButton.classList.add('hidden');
// cookPotImage.classList.remove('hidden');
// fullRandomRecipe.classList.add('hidden')
// randomGeneratedRecipe.classList.add('hidden');
//
//
// };



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function displayARecipe() {
  var showSide = sides[getRandomIndex(sides)];
  var showMain = mains[getRandomIndex(mains)];
  var showDessert = desserts[getRandomIndex(desserts)];

  if(sideOption.checked) {
    showRecipeSuggestion(showSide);
  } else if (mainDishOption.checked) {
    showRecipeSuggestion(showMain);
  } else if (dessertOption.checked) {
    showRecipeSuggestion(showDessert);
  } else {
    (entireMealOption.checked)
    fullMeal(showMain, showSide, showDessert);
  };

 displayRecipeView();
};


function showRecipeSuggestion(food) {
randomGeneratedRecipe.innerText = `${food}!`;

displayRecipeView();
};


function fullMeal(showMain, showSide, showDessert) {
fullRandomRecipe.innerText = `${showMain} with a side of ${showSide} and ${showDessert} for dessert!`;

displayRecipeView();
};



// ARRAYS

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caesar Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];
