// JavaScript Document
/*jslint browser:true */
"use strict";

function getWindowSize() { //windowSize
  var width = window.innerWidth;
  var height = window.innerHeight;
  var text = "Window size is " + width + " wide by " + height + " tall.";
  document.getElementById("windowSize").innerHTML = text;
}
getWindowSize();

function getOffset() { //windowOffset
  var left = window.screenLeft;
  var top = window.screenTop;
  var text = "Window offset is " + left + " from the left edge and " + top + " from the top of the display."
  document.getElementById("windowOffset").innerHTML = text;
}
getOffset();

document.getElementById("pageURL").innerHTML = "The page URL is " + window.location.href; //pageURL
var title = document.getElementById("title").innerHTML;
document.getElementById("docTitle").innerHTML = "Document title is " + title;
document.getElementById("docUpdate").innerHTML = "This document was last updated on " + document.lastModified;
