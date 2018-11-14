function toggleSection(id){
  $(id).toggleClass('hidden');
}

function displayFromJson(resume) {
  $('#email').text(resume.email);
  $('#phone').text(resume.phone);
  $('#profile').html(resume.profile);
  $('#school').text(resume.education.school.name);
  var contentEdu = '';
  for (var info of resume.education.school.info) {
    contentEdu += '<li>' + info + '</li>';
    $('#schoolInfo').html(contentEdu);
  }
  var contentCom = '';
  for (var info of resume.communityInvolvement) {
    contentCom += '<li>' + info + '</li>';
    $('#communityInfo').html(contentCom);
  }
  var contentSki = '';
  for (var skill of resume.skills) {
    contentSki += '<li>' + skill + '</li>';
    $('#skills').html(contentSki);
  }
  var jobTitles = $('.jobTitle');
  var companies = $('.company');
  var dates = $('.dates');
  var jobDescriptions = $('.jobDescription');
  for (i = 0; i < resume.jobs.length; i++) {
      jobTitles[i].innerHTML = resume.jobs[i].position;
      companies[i].innerHTML = resume.jobs[i].company;
      dates[i].innerHTML = resume.jobs[i].dates;
      jobDescriptions[i].innerHTML = resume.jobs[i].duties.join('<br>');
  }
}

var resume;
var greekedResume = 0;

$(document).ready(function() {
  $.getJSON('resume.json', function(data) {
    resume =  data;
    displayFromJson(resume);
  });
  $('#egg').click(function() {
    if ($('#egg').attr('class') == 'english') {
      if (greekedResume === 0) {
        $.getJSON('greekedResume.json', function(data) {
          greekedResume =  data;
          displayFromJson(greekedResume);
        });
      }
      else {
        displayFromJson(greekedResume);
      }
      $('#egg').toggleClass('english');
    }
    else {
      displayFromJson(resume);
      $('#egg').toggleClass('english');
    }
  });
  $('#educationHeader').click(function() {toggleSection('#educationSection')});
  $('#communityHeader').click(function() {toggleSection('#communitySection')});
  $('#skillsHeader').click(function() {toggleSection('#skillsSection')});
  $('#workHeader').click(function() {toggleSection('#workSection')});
});
