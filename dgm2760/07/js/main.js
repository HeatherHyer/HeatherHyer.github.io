// JavaScript Document
/*jslint browser:true */
"use strict";

function tellStory() {
  var verbs = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/);
  var nouns = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/);
  var adjs = document.getElementById('adjs').value.toLowerCase().split(/\s+|\n/);

  var adj1 = '<span class="changed">' + adjs[0] + '</span>';
  var adj2 = '<span class="changed">' + adjs[1] + '</span>';
  var adj3 = '<span class="changed">' + adjs[2] + '</span>';
  var adj4 = '<span class="changed">' + adjs[3] + '</span>';
  var adj5 = '<span class="changed">' + adjs[4] + '</span>';
  var noun1 = '<span class="changed">' + nouns[0] + '</span>';
  var noun2 = '<span class="changed">' + nouns[1] + '</span>';
  var noun3 = '<span class="changed">' + nouns[2] + 's' +  '</span>';
  var noun4 = '<span class="changed">' + nouns[3] + '</span>';
  var verb1 = '<span class="changed">' + verbs[0] + '</span>';
  var verb2 = '<span class="changed">' + verbs[1] + '</span>';
  var verb3 = '<span class="changed">' + verbs[2] + '</span>';

  var p1 = 'Once upon a time there lived a ' + adj1 + ' widow and her son Jack. One day, Jack’s mother told him to ' + verb1 + ' their only ' + noun1 + '. Jack went to the market and on the way he met a ' + noun2 + ' who wanted to ' + verb2 + ' his ' + noun1 + '. Jack asked, “What will you give me in return for my ' + noun1 + '?” The ' + noun2 + ' answered, “I will give you five ' + adj2 + ' ' + noun3 + '!”';

  var p2 = 'Jack took the ' + adj2 + ' ' + noun3 + ' and gave the ' + noun2 + ' the ' + noun1 + '. He was so pleased that he started to ' + verb3 + ' on his way to tell his mother. But when he reached home, Jack’s mother was very ' + adj3 + '. She said, “You ' + adj4 + ' boy! He took away your ' + noun1 + ' and gave you some ' + noun3 + '! She threw the ' + noun3 + ' out of the window. Jack was very ' + adj5 + ' and went to sleep without his ' + noun4 + '.';

  var storyText = p1 + "<br><br>" + p2;
  document.getElementById("story").innerHTML = storyText;
}
