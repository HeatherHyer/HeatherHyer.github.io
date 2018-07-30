// JavaScript Document
/*jslint browser:true */
"use strict";

var trees = ["Oak", "Apple", "Pine"];

function displayTrees() {
  document.getElementById("treeList").innerHTML = trees.join("<br>");
  document.getElementById("treeLength").innerHTML = "~The tree list is " + trees.length + " elements long~";
}

var addBirch = function() {
  trees.push("Birch");
  displayTrees();
}
var addBirchBtn = document.getElementById("addBirch");
addBirchBtn.onclick = addBirch;

var addPeach  = function() {
  trees.unshift("Peach");
  displayTrees();
};
var addPeachBtn = document.getElementById("addPeach");
addPeachBtn.onclick = addPeach;

/*
var  = function() {

  displayTrees();
};
var Btn = document.getElementById("");
Btn.onclick = ;
*/

var showThird = function() {
  if (trees.length < 3) {
    document.getElementById("error").innerHTML = "There isn't a third tree in your list to display. Try adding more first.";
  }
  else {
    document.getElementById("error").innerHTML = trees[2];
    displayTrees();
  }
};
var showThirdBtn = document.getElementById("showThird");
showThirdBtn.onclick = showThird;

var showFourth = function() {
  if (trees.length < 4) {
    document.getElementById("error").innerHTML = "There isn't a fourth tree in your list to display. Try adding more first.";
  }
  else {
    document.getElementById("error").innerHTML = trees[3];
    displayTrees();
  }
};
var showFourthBtn = document.getElementById("showFourth");
showFourthBtn.onclick = showFourth;
