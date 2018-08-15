// JavaScript Document
/*jslint browser:true */
"use strict()";

function validateForm() {
  var status = true;

  //reset
  var requiredFields = ["fullName", "phoneNumber", "payMethod", "ccNumber", "vehicle"];
  for (i = 0; i < requiredFields.length; i++) {
    document.getElementById(requiredFields[i]).className = "normal";
  }

  //fullName validation
  var fullName = document.forms.myForm.fullName.value;
  if (fullName === null || fullName === "") {
    status = false;
    document.getElementById('fullName').className = "error";
  }

  //phoneNumber validation
  var phoneNumber = document.forms.myForm.phoneNumber.value;
  phoneNumber = phoneNumber.replace(/-/g, '');
  if (phoneNumber.length < 10 || phoneNumber.length > 15) {
    status = false;
    document.getElementById('phoneNumber').className = "error";
  }

  //payMethod validation
  var payMethod = document.getElementsByName('payMethod');
  var foundCheckedButton = false;
  for (i = 0; i < payMethod.length; i++) {
    if (payMethod[i].checked) {
      foundCheckedButton = true;
      break;
    }
  }
  if (foundCheckedButton === false) {
    status = false;
    document.getElementById('payMethod').className = "error";
  }

  //ccNumber validation
  var ccNumber = document.forms.myForm.ccNumber.value;
  ccNumber = ccNumber.replace(/ /g, '');
  if (ccNumber.length !== 15) {
    status = false;
    document.getElementById('ccNumber').className = "error";
  }

  //vehicle validation
  var vehicle = document.forms.myForm.vehicle.selectedIndex;
  if (vehicle === 0) {
    status = false;
    document.getElementById('vehicle').className = "error";
  }

  if (status === false) {
    document.getElementById('formProblems').className = "showErrorMsg";
    return false;
  }
  else {
    return true;
  }


}
