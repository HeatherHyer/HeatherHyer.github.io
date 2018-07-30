// JavaScript Document
/*jslint browser:true */
"use strict";

var trees = ["Oak", "Apple", "Pine"];

var displayTrees = function() {
  for (var i = 0; i < trees.length; i++) {
    document.getElementById("treeList").innerHTML += trees[i] + "<br>";
  }
  document.getElementById("treeLength").innerHTML += "~The tree list is " + trees.length + " elements long~";
};

var showThird = function() {
  if (trees.length < 3) {
    document.getElementById("error").innerHTML = "There isn't a third tree in your list to display. Try adding more first.";
  }
  else {
    document.getElementById("error").innerHTML = trees[2];
    displayTrees;
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
    displayTrees;
  }
};

var showFourthBtn = document.getElementById("showFourth");
showFourthBtn.onclick = showFourth;
