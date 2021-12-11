function Topping(toppingName, toppingPrice) {
  this.name = toppingName;
  this.price = toppingPrice;
}

function Pizza(toppings) {
  this.price = 0;
  this.toppings = toppings;
}