/*jslint browser:true */
"use strict()";

var menuItems = document.querySelectorAll('ul#primaryNavigation li a');
var list = document.createElement("UL");
document.getElementById('smallNavArea').appendChild(list);

function switchToSmallNav() {
  for (var i = 0; i < menuItems.length; i++) {
    var href = menuItems[i].getAttribute("href");
    var text = menuItems[i].text;

    var listElement = document.createElement("LI");
    list.appendChild(listElement);
    var anchor = document.createElement("A");
    anchor.setAttribute('href', href);
    anchor.innerHTML = text;
    listElement.appendChild(anchor);
  }
}

switchToSmallNav();
