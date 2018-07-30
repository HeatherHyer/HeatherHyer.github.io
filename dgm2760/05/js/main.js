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
  document.getElementById("error").innerHTML = "";
}
var addBirchBtn = document.getElementById("addBirch");
addBirchBtn.onclick = addBirch;

var addPeach  = function() {
  trees.unshift("Peach");
  displayTrees();
  document.getElementById("error").innerHTML = "";
};
var addPeachBtn = document.getElementById("addPeach");
addPeachBtn.onclick = addPeach;

var removeFirst = function() {
  if (trees.length < 1) {
    document.getElementById("error").innerHTML = "There aren't any trees in the list to remove. Try adding some.";
  }
  else {
    trees.shift();
    displayTrees();
    document.getElementById("error").innerHTML = "";
  }
};
var removeFirstBtn = document.getElementById("removeFirst");
removeFirstBtn.onclick = removeFirst;

var removeSecond = function() {
  if (trees.length < 2) {
    document.getElementById("error").innerHTML = "There isn't a second tree in the list to remove. Try adding some.";
  }
  else {
    trees.splice(1, 1);
    displayTrees();
    document.getElementById("error").innerHTML = "";
  }
};
var removeSecondBtn = document.getElementById("removeSecond");
removeSecondBtn.onclick = removeSecond;

var removeLast = function() {
  if (trees.length < 1) {
    document.getElementById("error").innerHTML = "There aren't any trees in the list to remove. Try adding some.";
  }
  else {
    trees.pop();
    displayTrees();
    document.getElementById("error").innerHTML = "";
  }
};
var removeLastBtn = document.getElementById("removeLast");
removeLastBtn.onclick = removeLast;

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
