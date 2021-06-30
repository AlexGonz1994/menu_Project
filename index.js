const body = document.body;
const div = document.createElement("div")

const allMenu = document.createElement("ul");
const entreeMenu = document.createElement("ul");
const lunchMenu = document.createElement("ul");
const dinnerMenu = document.createElement("ul");
const breakfastMenu = document.createElement("ul");
const childMenu = document.createElement("ul");
const allYouCanEatMenu = document.createElement("ul");
const mealMenu = document.createElement("ul");


const displayMenu = document.createElement("button");
const displayEntreeMenu = document.createElement("button");
const displayDinnerMenu = document.createElement("button");
const displayBreakfastMenu = document.createElement("button");
const displayLunchMenu = document.createElement("button");
const displayChildMenu = document.createElement("button");
const displayAllEatMenu = document.createElement("button");
const displayMealMenu = document.createElement("button");

body.append(div)

let menuItems = [
    {name: "Eggs & Rice", tag: ["all","Children"], img: "./food_Items/Breakfast/Child-Eggs-Rice.jpg", price: "7.99"},
    {name: "Grilled Fish", tag: ["all","Breakfast"], img: "./food_Items/Breakfast/Grilled-Fish.jpg", price: "9.99"},
    {name: "Grilled Fish Meal", tag: ["all","Breakfast, Meal"], img: "./food_Items/Breakfast/Grilled-Fish-Meal.jpg", price: "17.99"},
    {name: "Eggs & Rice", tag: ["all","Breakfast"], img: "./food_Items/Breakfast/Tamago-Kake.jpg", price: "2.00"},
    {name: "Chicken Katsu", tag: ["all","Dinner"], img: "./food_Items/Dinner/Chicken-Katsu.jpg", price: "10.00"},
    {name: "Grilled Eel", tag: ["all","Breakfast, Lunch, Dinner"], img: "./food_Items/Dinner/Grilled-Eel.jpg", price: "8.99"},
    {name: "Katsu Curry", tag: ["all","Lunch, Dinner"], img: "./food_Items/Dinner/Katsu-Curry.jpg", price: "12.99"},
    {name: "Vegetable Curry", tag: ["all","Children"], img: "./food_Items/Dinner/Kid-Curry.jpg", price: "8.99"},
    {name: "Pork Ramen", tag: ["all","Dinner"], img: "./food_Items/Dinner/Ramen-Pork.jpg", price: "8.99"},
    {name: "All you Can Eat Shabu Shabu", tag: ["all","Dinner", "All You Can Eat"], img: "./food_Items/Dinner/Shabu-Shabu-All-You-Can-Eat.jpg", price: "60"},
    {name: "Wagyu Beef", tag: ["all","Dinner"], img: "./food_Items/Dinner/Wagyu-Beef.jpg", price: "20.00"},
    {name: "Asahi", tag:["all", "Drinks", "Alcoholic"], img: "./food_Items/Drinks/Asahi.jpg", price: "3.99"},
    {name: "Gekkeikan Sake", tag: ["all","Drinks", "Alcoholic"], img: "./food_Items/Drinks/Gekkeikan-Sake.jpg", price: "5.99"},
    {name: "Hello Kitty Sake", tag: ["all","Drinks", "Alcoholic", "Special"], img: "./food_Items/Drinks/Hello-Kitty-Sake-Special.jpg", price: "9.99"},
    {name: "Oolong Tea", tag: ["all","Drinks", "Tea"], img: "./food_Items/Drinks/Oolong-Tea.jpg", price: "2.99"},
    {name: "Sapporo Premium", tag: ["all","Drinks, Alcoholic"], img: "./food_Items/Drinks/Sapporo-Premium.jpg", price: "3.99"},
    {name: "Sprite", tag: ["all","Drinks", "Soda"], img: "./food_Items/Drinks/Sprite.jpg", price: "2.99"},
    {name: "Karagee", tag: ["all","Entree"], img: "./food_Items/Entrees/Karaage.jpg", price: "5.99"},
    {name: "Miso Soup", tag: ["all","Entree"], img: "./food_Items/Entrees/miso-soup.jpg", price: "2.99"},
    {name: "Onigiri", tag: ["all","Entree"], img: "./food_Items/Entrees/Onigiri.jpg", price: "3.99"},
    {name: "Sushi", tag: ["all","Entree"], img: "./food_Items/Entrees/Sushi.jpg", price: "2.99"},
    {name: "Taokyaki", tag: ["all","Entree"], img: "./food_Items/Entrees/Takoyaki.jpg", price: "5.99"},
    {name: "Pork Bowl", tag: ["all","Lunch"], img: "./food_Items/Lunch/Pork-Bowl.jpg", price: "8.99"},
    {name: "Sushi Lunch Package", tag: ["all","Lunch", "Meal"], img: "./food_Items/Lunch/Sushi-Lunch-Package.jpg", price: "12.99"},
    {name: "Tonkatsu Bento", tag: ["all","Lunch", "Meal"], img: "./food_Items/Lunch/Tonkatsu-Bento.jpg", price: "10.99"}
]

let clickedArray = [{allClicked: 0},
{entreeClicked: 0},
{dinnerClicked: 0},
{breakfastClicked: 0},
{lunchClicked: 0},
{childClicked:  0},
{allEatClicked: 0},
{fullMealsClicked: 0}]

const appendingArray = [{tag: "ul", item: allMenu, text: ["Full Menu"], visibility: "hidden"}, {tag: "ul", item: breakfastMenu, text: "Breakfast Menu", visibility: "hidden"}, {tag: "ul", item: lunchMenu, text: "Lunch Menu", visibility: "hidden"}, {tag: "ul", item: entreeMenu, text: ["Entree Menu"], visibility: "hidden"}, {tag: "ul", item: dinnerMenu, text: "Dinner Menu", visibility: "hidden"},  
{tag: "ul", item: childMenu, text: "Children's Menu", visibility: "hidden"}, {tag: "ul", item: allYouCanEatMenu, text: "All You Can Eat Menu", visibility: "hidden"}, {tag: "ul", item: mealMenu, text: "Full Meals Menu", visibility: "hidden"},
{tag: "button", item: displayMenu, text: "Display Menu"},
{tag: "button", item: displayBreakfastMenu, text: "Display Breakfast Menu"},
{tag: "button", item: displayLunchMenu, text: "Display Lunch Menu"},
{tag: "button", item: displayEntreeMenu, text: "Display Entree Menu"},
{tag: "button", item: displayDinnerMenu, text: "Display Dinner Menu"},
{tag: "button", item: displayChildMenu, text: "Display Children Menu"},
{tag: "button", item: displayAllEatMenu, text: "Display All You Can Eat Menu"},
{tag: "button", item: displayMealMenu, text: "Display Full Meal Menu"},
]

appendingArray.map(item => {
    let button = item.item
    if(item.tag.includes("button")){
        div.append(button)
        button.textContent = item.text
    }

    if(item.tag.includes("ul")){
        let menu = item.item
        div.append(menu)
        menu.textContent = item.text
        menu.className = "menu"
    } 
})

function ifClicked(menuText, menuTag, menuType){
    appendingArray.map(shown => {
        if(!shown.text.includes(menuText)){
            shown.item.hidden = true
        }else{
            shown.item.hidden = false
        }
        if(shown.tag == "button"){
            shown.item.hidden = false
        }
    })
    menuItems.map(item => {
        if(item.tag.includes(menuTag)){
            const foodImg = document.createElement('img')
        const foodList = document.createElement("li")
        menuType.append(foodList);
       foodList.textContent = `${item.name} ${item.price}`
       foodList.append(foodImg)
       foodImg.src = item.img
        }
    })
}

function reClick(menuText){
    appendingArray.map(shown => {
        if(!shown.text.includes(menuText)){
            shown.item.hidden = true
        }else{
            shown.item.hidden = false
        }
        if(shown.tag == "button"){
            shown.item.hidden = false
        }
    })
}

displayMenu.addEventListener("click", (e => {
    if(clickedArray[0].allClicked === 0){
        ifClicked("Full Menu", "all", allMenu)
        clickedArray[0].allClicked = 1;
    }
    if(clickedArray[0].allClicked === 1){
        reClick("Full Menu")
    }
}))

displayEntreeMenu.addEventListener("click", (e => {
    if(clickedArray[1].entreeClicked === 0){
      ifClicked("Entree Menu", "Entree", entreeMenu)
        clickedArray[1].entreeClicked = 1;
    }
    if(clickedArray[1].entreeClicked === 1){
        reClick("Entree Menu")
    }
}))

displayBreakfastMenu.addEventListener("click", e => {
    if(clickedArray[3].breakfastClicked === 0){
        ifClicked("Breakfast Menu", "Breakfast", breakfastMenu)
        clickedArray[3].breakfastClicked = 1;
    }
    if(clickedArray[3].breakfastClicked === 1){
        reClick("Breakfast Menu")
    }
})

displayLunchMenu.addEventListener("click", (e => {
    if(clickedArray[4].lunchClicked === 0){
        ifClicked("Lunch Menu", "Lunch", lunchMenu)
        clickedArray[4].lunchClicked = 1;
    }
    if(clickedArray[4].lunchClicked === 1){
        reClick("Lunch Menu")
    }
}))

displayDinnerMenu.addEventListener("click", (e => {
    if(clickedArray[2].dinnerClicked === 0){
        ifClicked("Dinner Menu", "Dinner", dinnerMenu)
        clickedArray[2].dinnerClicked = 1;
    }
    if(clickedArray[2].dinnerClicked === 1){
        reClick("Dinner Menu")
    }
}))

displayChildMenu.addEventListener("click", (e => {
    if(clickedArray[5].childClicked === 0){
        ifClicked("Children's Menu", "Children", childMenu)
        clickedArray[5].childClicked = 1;
    }
    if(clickedArray[5].childClicked === 1){
        reClick("Children's Menu")
    }
}))

displayAllEatMenu.addEventListener("click", (e => {
    if(clickedArray[6].allEatClicked === 0){
        ifClicked("All You Can Eat Menu", "All You Can Eat", allYouCanEatMenu)
        clickedArray[6].allEatClicked = 1;
    }
    if(clickedArray[6].allEatClicked === 1){
        reClick("All You Can Eat Menu")
    }
}))

displayMealMenu.addEventListener("click", (e => {
    if(clickedArray[7].fullMealsClicked === 0){
        ifClicked("Full Meals Menu", "Meal", mealMenu)
        clickedArray[7].fullMealsClicked = 1;
    } if(clickedArray[7].fullMealsClicked === 1){
        reClick("Full Meals Menu")
    }
   
}))