// JavaScript Document
/*jslint browser:true */
"use strict()";

function randomInt(high) {
  return Math.floor((Math.random() * high) + 1);
}

function randomMonth() {
  var month = randomInt(12);
  switch(month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Error generating random month";
   }

}

function randomDay() {
  var day = randomInt(30);
  return day;
}

function randomFortune() {
  var fortune = randomInt(5);
  switch(fortune) {
    case 1:
      return "you will win the lottery.";
    case 2:
      return "you will meet an annoying woman. Give her coffee and she'll go away.";
    case 3:
      return "you will go bankrupt from buying too many elephants.";
    case 4:
      return "you will meet Dylan O'Brien.";
    case 5:
      return "you will develop psychic powers.";
    default:
      return "Error generating random fortune";
  }
}

var randMonth = randomMonth();
var randDay = randomDay();
var randFortune = randomFortune();
var fortuneAll = "On " + randMonth + " " + randDay + " , " + randFortune;
document.getElementById("fortune").innerHTML = fortuneAll;
