// JavaScript Document
/*jslint browser:true */
"use strict";

function randomInt(high) {
  return Math.floor((Math.random() * high) + 1);
}

funtion randomMonth() {
  var month = randomInt(12);
  switch(month) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
   }

}

funtion randomDay() {
  var day = randomInt(30);
}

function randomFortune() {
  var fortune = randomInt(5);
  switch(fortune) {
    case 1:
      return "you will win the lottery.";
      break;
    case 2:
      return "you will meet an annoting woman. Give her coffee and she'll go away.";
      break;
    case 3:
      return "you will go bankrupt from buying too many elephants.";
      break;
    case 4:
      return "you will meet Dylan O/'Brien.";
      break;
    case 5:
      return "you will develop psychic powers.";
      break;
  }
}

var randMonth = randMonth();
var randDay = randomDay();
var randFortune = randomFortune();
var fortuneAll = "On " + randMonth + " " + randDay + " , " + randFortune;
document.getElementById("fortune").innerHTML = fortuneAll;