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

  this.toppingsList.forEach(function(element) {
    if (pizzaToppings.includes(element.name)) {
      addPrice += element.price;
    }
  });
  this.price += addPrice;
}

test = new Pizza(["pepperoni", "olives"]);
test.toppingGenerate();

$(document).ready(function(){
  $("form#submit").submit(function(event){
    event.preventDefault();
    let toppingsSubmitted = [];
    $.each($("input[name='toppings']:checked"), function(element) {
      toppingsSubmitted.push($(this).val());
    });
    myPizza = new Pizza(toppingsSubmitted);
    myPizza.toppingGenerate();
    myPizza.checkPrice();

    $(".result").html("Your total is $" + myPizza.price + " thank you!");
  });

});