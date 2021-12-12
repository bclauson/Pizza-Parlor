
//Buisness logic
function Topping(toppingName, toppingPrice) {
  this.name = toppingName;
  this.price = toppingPrice;
}

function Pizza(toppings, size) {
  this.price = 0.00;
  this.toppings = toppings;
  this.size = size;
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
  if (this.size === "large") {
    addPrice += 20.00;
  } else if (this.size === "medium") {
    addPrice += 15.00;
  } else if (this.size === "small") {
    addPrice += 10.00;
  }
  this.toppingsList.forEach(function(element) {
    if (pizzaToppings.includes(element.name)) {
      addPrice += element.price;
    }
  });
  this.price += addPrice;
  this.price = this.price.toFixed(2);
}

//UI Logic
$(document).ready(function(){
  $("form#submit").submit(function(event){
    event.preventDefault();
    let toppingsSubmitted = [];
    const size = $("input:radio[name=size]:checked").val();
    $.each($("input[name='toppings']:checked"), function(element) {
      toppingsSubmitted.push($(this).val());
    });
    myPizza = new Pizza(toppingsSubmitted, size);
    myPizza.toppingGenerate();
    myPizza.checkPrice();

    $(".result").html("Your total is $" + myPizza.price + " thank you!");
  });

});