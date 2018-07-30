// JavaScript Document
/*jslint browser:true */
"use strict";

var trees = ["Oak", "Apple", "Pine"];
displayTrees();

function displayTrees() {
  for (var i = 0; i < trees.length; i++) {
    document.getElementById("treeList").innerHTML += trees[i] + "<br>";
  }
  document.getElementById("treeLength").innerHTML += "~The tree list is " + trees.length + " elements long~";
}
