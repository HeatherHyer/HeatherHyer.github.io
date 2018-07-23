// JavaScript Document
/*jslint browser:true */
"use strict";

function getRandomNum(low, high) {
  return Math.floor((Math.random() * high) + low);
}

var correct = getRandomNum(1, 15);
var guess;
var count = 0;

function checkGuess(num) {
  count++;
  if (num < correct) {return "Your guess was too low.";}
  else if (num > correct) {return "Your guess was too high.";}
  else if (num === correct) {return "You are correct!";}
  else {return "Your guess was out of range. Remember to pick a number between 1 and 15."}
}
