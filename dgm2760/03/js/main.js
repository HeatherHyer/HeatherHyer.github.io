// JavaScript Document
/*jslint browser:true */
"use strict";

var count = 0;
var score;
var pathToImg;
var awardImg = document.createElement("IMG");
var correct = Math.floor((Math.random() * 15) + 1);

function checkGuess() {
  count++;
  document.getElementById("tries").innerHTML = count;
  var num = document.getElementById("guess").value;
  if (num < correct) {document.getElementById("feedback").innerHTML = "Your guess was too low.";}
  else if (num > correct) {document.getElementById("feedback").innerHTML = "Your guess was too high.";}
  else if (num == correct) {
    score = count;
    document.getElementById("feedback").innerHTML = "You are correct!";
  }
  else {document.getElementById("feedback").innerHTML = "Your guess was out of range. Remember to pick a number between 1 and 15."}
}

switch (score) {
  case 1:
  case 2:
  case 3:
    pathToImg = "images/blueRibbon.png";
    break;
  case 4:
  case 5:
  case 6:
    pathToImg = "images/redRibbon.png";
    break;
  default:
    pathToImg = "images/yellowRibbon.png";
}

awardImg.setAttribute('src', pathToImg);
document.getElementById('award').appendChild(awardImg);
