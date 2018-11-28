// JavaScript Document
/*jslint browser:true */
"use strict()";

var answer = {
  question: "Who is buried in Grant's tomb?",
  answerOne: "Tom",
  answerTwo: "Grant",
  answerThree: "Sally",
  answerFour: "Jordan",
  correct: this.answerTwo,

  display: function() {
    document.getElementById("question").innerHTML = this.question;
    document.getElementById("answerOne").innerHTML = this.answerOne;
    document.getElementById("answerTwo").innerHTML = this.answerTwo;
    document.getElementById("answerThree").innerHTML = this.answerThree;
    document.getElementById("answerFour").innerHTML = this.answerFour;
  },

  check: function(a) {
    if (a == this.correct) {document.getElementById("message").innerHTML = "Correct!";}
    else {document.getElementById("message").innerHTML = "Try Again";}
  }
};
