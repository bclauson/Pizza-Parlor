function Topping(toppingName, toppingPrice) {
  this.name = toppingName;
  this.price = toppingPrice;
}

function Pizza(toppings) {
  this.price = 0;
  this.toppings = toppings;
}

Pizza.prototype.toppingGenerate = function() {
  this.toppingsList = 
  (
    [new Topping("pepperoni", 2.25),
    new Topping("sausage", 2.00),
    new Topping("chicken", 1.75),
    new Topping("olives", 1.00),
    new Topping("jalapenos", 0.75),
    new Topping("mushrooms", 0.50),
    ]
  )
}

Pizza.prototype.checkPrice = function() {
  let pizzaToppings = this.toppings;
  let addPrice = 0;
  console.log(this.toppings)
  this.toppingsList.forEach(function(element) {
    console.log(this.toppings);
    if (pizzaToppings.includes(element.name)) {
      console.log(element);
      addPrice += element.price;
    }
  });
  return this.price += addPrice;
}

test = new Pizza(["pepperoni", "olives"]);
test.toppingGenerate();