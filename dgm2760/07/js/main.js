// JavaScript Document
/*jslint browser:true */
"use strict()";

var pizza = {
  crust: "",
  topping: "",
  size: "",

  buildPizza: function() {
    if (pizza.crust == "" | pizza.topping == "" | pizza.size == "") {
      document.getElementById("message").innerHTML = "Oops. It looks like you didn't select enough options. Be sure to pick a crust, topping, and size and try again.";
    }
    else {
      document.getElementById("message").innerHTML = "Baking a " + pizza.size + " pizza on a " + pizza.crust + " crust with " + pizza.topping + " and cheese just for you.";
    }
  },

  shoppingList: function() {
    var flour = 1;
    var meat;
    if (pizza.crust == "" | pizza.topping == "" | pizza.size == "") {
      document.getElementById("message").innerHTML = "Oops. It looks like you didn't select enough options. Be sure to pick a crust, topping, and size and try again.";
      return;
    }
    else {
      if (pizza.crust == "thin") {
        flour *= 1;
      }
      if (pizza.crust == "thick") {
        flour *= 2;
      }
      if (pizza.size == "small") {
        flour *= 1;
      }
      if (pizza.size == "large") {
        flour *= 2;
      }
      if (pizza.topping == "sausage") {
        meat = "sausage";
      }
      if (pizza.topping == "pepperoni") {
        meat = "pepperoni";
      }
      document.getElementById("message").innerHTML = "You will need to purchase " + flour + " cups of flour and 1 lb of " + meat + ".";
    }
  }
};
