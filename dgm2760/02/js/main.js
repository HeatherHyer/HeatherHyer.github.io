// JavaScript Document
/*jslint browser:true */
"use strict";

function getWindowSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var text = "Window size is " + width + " wide by " + height + " tall.";
  document.getElementById("windowSize").innerHTML = text;
}
getWindowSize();

function getOffset() {
  var left = window.pageXOffset;
  var top = window.pageYOffset;
  var text = "Window offset is " + left + " from the left edge and " + top + " from the top of the display."
  document.getElementById("windowOffset").innerHTML = text;
}
getOffset();
