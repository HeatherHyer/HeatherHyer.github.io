// JavaScript Document
/*jslint browser:true */
"use strict";

function getRandomNum(low, high) {
  return Math.floor((Math.random() * high) + low);
}

var correct = getRandomNum(1, 15);
var count = 0;
var score;

function checkGuess(Number(num)) {
  count++;
  if (num < correct) {return "Your guess was too low.";}
  else if (num > correct) {return "Your guess was too high.";}
  else if (num === correct) {
    score = count;
    return "You are correct!";
  }
  else {return "Your guess was out of range. Remember to pick a number between 1 and 15."}
}

var awardImg = document.createElement("IMG");

awardImg.setAttribute('src', pathToBlue);

document.getElementById('award').appendChild(awardImg);

var pathToImg;

switch (score) {
  case 1:
  case 2:
  case 3:
    pathToImg = "../images/blueRibbon.png";
    break;
  case 4:
  case 5:
  case 6:
    pathToRed = "../images/redRibbon.png";
    break;
  default:
    pathToYellow = "../images/yellowRibbon.png";
}
