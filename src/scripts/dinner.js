console.log("y u m m y")

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const favoriteDinner = {
    name: "Shoyu Chicken",
    ethnicity: "Hawaiian",
    minutesToCook: 55,
    vegetarian: false
}

const dinnerArray = Object.entries(favoriteDinner)
console.log(dinnerArray)
const dinnerApp = document.querySelector("#dinner-app")

let dinnerEntriesHtml = " "
for(const entry of dinnerArray) {
    dinnerEntriesHtml += `<p>${entry[0]}: ${entry[1]} </p>`
}
dinnerApp.innerHTML = `<h1>Dinner Entries</h1><article class="food">${dinnerEntriesHtml}</article>`
// dinnerApp.innerHTML += 

// foodArticle.innerHTML = "<h1>Food Key Value</h1>";

//     for(const entry of Object.entries(favoriteDinner(dinner) {
//         console.log(entry)
//         foodArticle.innerHTML += `<p>${Object.entries[0]}: ${Object.entries[1]}</p>`
//     )}

    
