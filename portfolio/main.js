"use strict";

function displayModal(id) {
  var modal = document.getElementById(id + 'Modal');

  modal.style.display = 'flex';
  modal.style['justify-content'] =  'center';

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function closeModal(id) {
  var modal = document.getElementById(id + 'Modal');
  modal.style.display = "none";
}

var submit = document.getElementById('submitRequest');
var requestForm = document.getElementById('requestForm');
submit.onclick = function() {
  const mailto = "mailto:heatherahyer@gmail.com";
  const subject = "?subject=Request%20For%20References";
  const rname = document.getElementById('rname').value;
  const rcompany = document.getElementById('rcompany').value;
  const remail = document.getElementById('remail').value;
  const rcomment = document.getElementById('rcomment').value;
  var body = "&body=" + "Requested by " + rname + "%0A%0A" + "Send to: " + remail;
  if (rcompany != "" || rcomment != "") {
    body = "&body=" + "Requested by " + rname + " from " + rcompany + "%0A%0A" + "Send to: " + remail + "%0A%0A" + "Comments:" + "%0A" + rcomment;
  }
  else if (rcompany != "") {
    body = "&body=" + "Requested by " + rname + " from " + rcompany + "%0A%0A" + "Send to: " + remail;
  }
  else if (rcomment != "") {
    body = "&body=" + "Requested by " + rname + "%0A%0A" + "Send to: " + remail + "%0A%0A" + "Comments:" + "%0A" + rcomment;
  }
  const content = mailto + subject + body
  requestForm.action = content;
}
