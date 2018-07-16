// JavaScript Document
/*jslint browser:true */
"use strict";

function getWindowSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var text = "Window size is " + width + " wide by " + height + " tall";
  document.getElementById("windowSize").innerHTML = text;
}

getWindowSize();
