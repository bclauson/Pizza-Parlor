
# Branden Clauson Pizza Parlor

### ***By Branden Clauson***
### The best way to order pizza

<p>&nbsp<p>

## **Technologies used**

* HTML
* CSS
* JavaScript
* JQuery

<p>&nbsp<p>

## **Description**

#### This webpage takes the inputs for what toppings and size the user would like thier pizza and returns the price of their pizza given their selections.



<p>&nbsp<p>

## **Setup/Installation Requirements**
* Clone to folder
* Navagate to directory
* Open index.html in prefered browser (tested in chrome)

<p>&nbsp<p>

## **Known Bugs**

#### No current known bugs

## **License**

[MIT](LICENSE.txt)

Copyright (c) 2021 Branden Clauson

<p>&nbsp<p>

## **Tests**


**Describe: Pizza(toppings);**
<br>
Test: it should create a pizza object with property for toppings
<br>
Code: myPizza = new Pizza(["pepperoni", "olives"])
<br>
Expect: myPizza = Pizza {toppings: ["pepperoni", "olives"]}
<br>
<br>
Test: prototype toppingGenerate should create a property containing list of available toppings
<br>
Code: myPizza.toppingGenerate()
<br>
Expect: myPizza = Pizza {toppings:[],toppingsList: [available toppings]}
<br>
<br>
Test: checkPrice method should now add up the prices of all the toppings and add them together
<br>
Code: myPizza.checkPrice()
<br>
Expect: myPizza = Pizza {price: (total),toppings:[], toppingsList: [available]}
<br>
<br>
Test: Pizza constructor should now include size 
<br>
Code: myPizza(toppings, size)
<br>
Expect: myPizza = Pizza {toppings:[],size: "size"}

<br>
<br>
<br>

**Describe: Topping(toppingName, toppingPrice);** 
<br>
Test: it should create a topping object with property for name and price.
<br>
Code: Topping = new Topping("pepperoni",2.00)
<br>
Expect: Topping = Topping {toppingName: "pepperoni", toppingPrice = 2.00}