let menuItems = [{
    name: "Shrimp",
    tags: ["Dinner", "Lunch"],
    img: ""
},
{
    name: "Pasta",
    tags: ["Lunch"],
    img: ""
}
]

menuItems.map(food => {
    if(food.tags.includes("Dinner")){
        console.log(true)
    }else{
        console.log(false)
    }
    
})

// console.log(menuItems[0].tags)