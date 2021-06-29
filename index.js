let menuItems = [
    {name: "Eggs & Rice", tag: ["children"], img: "./food_Items/Breakfast/Child-Eggs-Rice.jpg", price: "7.99"},
    {name: "Grilled Fish", tag: ["Breakfast"], img: "./food_Items/Breakfast/Grilled-Fish.jpg", price: "9.99"},
    {name: "Grilled Fish Meal", tag: ["Breakfast, Meal"], img: "./food_Items/Breakfast/Grilled-Fish-Meal.jpg", price: "17.99"},
    {name: "Eggs & Rice", tag: ["Breakfast"], img: "./food_Items/Breakfast/Tamago-Kake.jpg", price: "2.00"},
    {name: "Chicken Katsu", tag: ["Dinner"], img: "./food_Items/Dinner/Chicken-Katsu.jpg", price: "10.00"},
    {name: "Grilled Eel", tag: ["Breakfast, Lunch, Dinner"], img: "./food_Items/Dinner/Grilled-Eel.jpg", price: "8.99"},
    {name: "Katsu Curry", tag: ["Lunch, Dinner"], img: "./food_Items/Dinner/Katsu-Curry.jpg", price: "12.99"},
    {name: "Vegetable Curry", tag: ["Children"], img: "./food_Items/Dinner/Kid-Curry.jpg", price: "8.99"},
    {name: "Pork Ramen", tag: ["Dinner"], img: "./food_Items/Dinner/Ramen-Pork.jpg", price: "8.99"},
    {name: "All you Can Eat Shabu Shabu", tag:["Dinner", "All You Can Eat"], img: "./food_Items/Dinner/Shabu-Shabu-All-You-Can-Eat.jpg", price: "60"},
    {name: "Wagyu Beef", tag:["Dinner"], img: "./food_Items/Dinner/Wagyu-Beef.jpg", price: "20.00"},
    {name: "Asahi", tag:["Drinks", "Alcoholic"], img: "./food_Items/Drinks/Asahi.jpg", price: "3.99"},
    {name: "Gekkeikan Sake", tag:["Drinks", "Alcoholic"], img: "./food_Items/Drinks/Gekkeikan-Sake.jpg", price: "5.99"},
    {name: "Hello Kitty Sake", tag:["Drinks", "Alcoholic", "Special"], img: "./food_Items/Drinks/Hello-Kitty-Sake-Special.jpg", price: "9.99"},
    {name: "Oolong Tea", tag:["Drinks", "Tea"], img: "./food_Items/Drinks/Oolong-Tea.jpg", price: "2.99"},
    {name: "Sapporo Premium", tag: ["Drinks, Alcoholic"], img: "./food_Items/Drinks/Sapporo-Premium.jpg", price: "3.99"},
    {name: "Sprite", tag: ["Drinks", "Soda"], img: "./food_Items/Drinks/Sprite.jpg", price: "2.99"},
    {name: "Karagee", tag: ["Entree"], img: "./food_Items/Entrees/Karaage.jpg", price: "5.99"},
    {name: "Miso Soup", tag:["Entree"], img: "./food_Items/Entrees/miso-soup.jpg", price: "2.99"},
    {name: "Onigiri", tag: ["Entree"], img: "./food_Items/Entrees/Onigiri.jpg", price: "3.99"},
    {name: "Sushi", tag: ["Entree"], img: "./food_Items/Entrees/Sushi.jpg", price: "2.99"},
    {name: "Taokyaki", tag: ["Entree"], img: "./food_Items/Entrees/Takoyaki.jpg", price: "5.99"},
    {name: "Pork Bowl", tag: ["Lunch"], img: "./food_Items/Lunch/Pork-Bowl.jpg", price: "8.99"},
    {name: "Sushi Lunch Package", tag: ["Lunch", "Meal"], img: "./food_Items/Lunch/Sushi-Lunch-Package.jpg", price: "12.99"},
    {name: "Tonkatsu Bento", tag: ["Lunch", "Meal"], img: "./food_Items/Lunch/Tonkatsu-Bento.jpg", price: "10.99"}
]

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

let clickedArray = [{allClicked: 0},
{entreeClicked: 0},
{DinnerClicked: 0},
{breakfastClicked: 0},
{lunchClicked: 0},
{childClicked:  0},
{allEatClicked: 0}]

const appendingArray = [{tag: "ul", item: allMenu, text: ["Full Menu"], visibility: "hidden"}, {tag: "ul", item: entreeMenu, text: ["Entree Menu"], visibility: "hidden"}, {tag: "ul", item: lunchMenu, text: "Lunch Menu", visibility: "hidden"}, {tag: "ul", item: dinnerMenu, text: "Dinner Menu", visibility: "hidden"}, {tag: "ul", item: breakfastMenu, text: "Breakfast Menu", visibility: "hidden"}, 
{tag: "ul", item: childMenu, text: "Children's Menu", visibility: "hidden"}, {tag: "ul", item: allYouCanEatMenu, text: "All You Can Eat Menu", visibility: "hidden"}, {tag: "ul", item: mealMenu, text: "Full Meals Menu", visibility: "hidden"},
{tag: "button", item: displayMenu, text: "Display Menu"},
{tag: "button", item: displayEntreeMenu, text: "Display Entree Menu"},
{tag: "button", item: displayDinnerMenu, text: "Display Dinner Menu"},
{tag: "button", item: displayBreakfastMenu, text: "Display Breakfast Menu"},
{tag: "button", item: displayLunchMenu, text: "Display Lunch Menu"},
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


displayMenu.addEventListener("click", (e => {
    if(clickedArray[0].allClicked === 0){
        appendingArray.map(shown => {
            if(!shown.text.includes("Full Menu")){
                shown.item.hidden = true
            }else{
                shown.item.hidden = false
            }
            if(shown.tag == "button"){
                shown.item.hidden = false
            }
        })
        
        menuItems.map(item => {
            const foodImg = document.createElement('img')
            const foodList = document.createElement("li")
            allMenu.append(foodList);
           foodList.textContent = `${item.name} ${item.price}`
           foodList.append(foodImg)
           foodImg.src = item.img
        })
        clickedArray[0].allClicked = 1;
    }
    
   
    
}))

displayEntreeMenu.addEventListener("click", (e => {
    if(clickedArray[1].entreeClicked === 0){
        appendingArray.map(shown => {
            if(!shown.text.includes("Entree Menu")){
                shown.item.hidden = true
            }else{
                shown.item.hidden = false
            }
            if(shown.tag == "button"){
                shown.item.hidden = false
            }
        })
        menuItems.map(item => {
            if(item.tag.includes("Entree")){
                const foodImg = document.createElement('img')
            const foodList = document.createElement("li")
            entreeMenu.append(foodList);
           foodList.textContent = `${item.name} ${item.price}`
           foodList.append(foodImg)
           foodImg.src = item.img
            }
        })
        clickedArray[1].entreeClicked = 1;
    }
    
}))