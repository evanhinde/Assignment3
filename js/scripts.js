// get ids from dom
const studentCreds = document.getElementById("studentCreds");
const baseSelections = document.getElementById("baseSelect");
const sauceSelections = document.getElementById("sauceSelect");
const extraCheeseCheckBox = document.getElementById("extraCheeseCheckBox");
const pepperoniCheckBox = document.getElementById("pepperoniCheckBox");
const sausageCheckBox = document.getElementById("sausageCheckBox");
const hamCheckBox = document.getElementById("hamCheckBox");
const greenPepperCheckBox = document.getElementById("greenPepperCheckBox");
const oliveCheckBox = document.getElementById("oliveCheckBox");
const mushroomCheckBox = document.getElementById("mushroomCheckBox");
const pizzaDescription = document.getElementById("pizzaDescription");
const orderButton = document.getElementById("orderButton");

// empty selection boxes
baseSelections.value = '';
sauceSelections.value = '';

// add student credentials
studentCreds.textContent = "Evan Hinde 200529232";

// Event listener for order button
orderButton.addEventListener('click', createPizza);

// create pizza class
class Pizza {
    base;
    sauce;
    extraCheese;
    meats;
    veggies;

    // constructor
    constructor(base, sauce, extraCheese, meats, veggies) {
        this.base = base;
        this.sauce = sauce;
        this.extraCheese = extraCheese;
        this.meats = meats;
        this.veggies = veggies;
    }
}

// create pizza function for when order is clicked
function createPizza() {
    // variables for selections and x cheese box
    var base = baseSelections.value;
    var sauce = sauceSelections.value;
    var extraCheese = extraCheeseCheckBox.checked ? "with extra cheese" : "without extra cheese";
    
    // empty arrays for checkbox selection to be pushed into 
    var meats = [];
    if (pepperoniCheckBox.checked) meats.push("Pepperoni");
    if (sausageCheckBox.checked) meats.push("Sausage");
    if (hamCheckBox.checked) meats.push("Ham");

    var veggies = [];
    if (greenPepperCheckBox.checked) veggies.push("Green Pepper");
    if (oliveCheckBox.checked) veggies.push("Olive");
    if (mushroomCheckBox.checked) veggies.push("Mushroom");

    // validation to make user select base and sauce
    if (!base || !sauce) {
        pizzaDescription.textContent = 'Must select base and sauce';
    } else { 
        // create instance of pizza onject within pizza class and output to order sentence
        const newPizza = new Pizza(base, sauce, extraCheese, meats, veggies);
        var sentence = `You selected a pizza with ${newPizza.base} base, ${newPizza.sauce} sauce, ${newPizza.extraCheese}, Meats: ${newPizza.meats.join(', ')}, and Veggies: ${newPizza.veggies.join(', ')}.`;
        pizzaDescription.textContent = sentence;
    }
}