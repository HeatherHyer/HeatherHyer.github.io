/*jslint browser:true*/
"use strict()";

var company = "Joe's Bed and Breakfast";
document.getElementById("company").innerHTML = company;

var slogan = "Document Writing";
document.getElementById("slogan").innerHTML = slogan;

var person = prompt("Please enter your first name:", "Your name here...");
person = " " + person;
document.getElementById("welcome").innerHTML = "Hi" + person + ". Welcome to Joe's";

var date = new Date();
document.getElementById("date").innerHTML = "Today is " + date;
