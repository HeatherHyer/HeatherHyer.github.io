// JavaScript Document
/*jslint browser:true */
"use strict";

var curUrl = location.href;
var pound = curUrl.split('#')[pound.length-1];
var qmark = curUrl.split('?')[qmark.length-1];

//part 3
var test = document.querySelectorAll("ul#mainmenu li a");
console.log(test);

var truck = "drill.php";

for (var i = 0; i < test.length; i++) {
  var myPage = test[i].getAttribute("href");
  console.log(myPage);

  if (truck === myPage) {
    test[i].parentNode.parentNode.parentNode.className = "parent";
    test[i].parentNode.className = "active";
  }
}
