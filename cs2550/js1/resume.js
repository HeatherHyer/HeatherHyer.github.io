let resume = {
  "name": "Heather Hyer",
  "email": "heatherahyer@gmail.com",
  "phone": "(385)254-4874",

  "profile": "I am an independent, driven student and a diligent worker.<br>I am personable and attentive to the needs of others.<br>I am a creative individual with the ability to learn skills quickly.",

  "education": {
    "school": {
      "name": "Utah Valley University",
      "info": [
        "Junior, majoring in Software Engineering with a specialization in Web and App Development, minoring in Computer Science and in Digital Media",
        "Member of the UVU Honors Program",
        "Member of the Society of Women Engineers (SWE)"
      ]
    }
  },

  "communityInvolvement": [
    "Volunteer at Orem Family Support and Treatment Center",
    "Previous THS Community Council Student Delegate",
    "Previous National Honors Society (NHS) Member",
    "Previous Special Needs Mutual Councilor"
  ],

  "skills": [
    "Experience with C++, C#, Python, JavaScript, HTML/HTML5, and CSS",
    "Experience with Quality Assurance testing, including automated test scripting",
    "Familiar with Agile software development practices",
    "Knowledge of data structures",
    "Familiar with Adobe Creative Cloud Suite, including Photoshop and Illustrator",
    "Web Design Experience",
    "Fluent in Spanish"
  ],

  "jobs": [
    {
      "position": "Quality Assurance Engineer Intern",
      "company": "Family Search",
      "dates":" May 2018 — Present",
      "duties": [
        "Test front-end web pages throughout the process of development and ensure the release of a quality product.",
        "Write automated test code (protractor).",
        "Collaborate with developers and others in a team environment.",
        "Adhere to Agile software development practices."
      ]
    },
    {
      "position": "Math Tutor/Teacher's Aide",
      "company": "Lumen Scholar Institute",
      "dates": "March 2017 — April 2018",
      "duties": [
        "Assist students with online technology, tutor K-12 students in math, assist teachers.",
        "Organize curriculum on Canvas, facilitate live-interactive classroom learning.",
        "Teach basic coding skills to elementary school students."
      ]
    },
    {
      "position": "Math Tutor",
      "company": "Utah Valley University",
      "dates": "August 2014 — April 2015",
      "duties": [
        "Tutor UVU students in college-level math courses ranging from College Algebra to Calculus and Statistics.",
        "CRLA Level 2 Certified."
      ]
    }
  ]
}

function displayFromJson() {
  document.getElementById('name').innerText = resume.name;
  document.getElementById('email').innerText = resume.email;
  document.getElementById('phone').innerText = resume.phone;
  document.getElementById('profile').innerHTML = resume.profile;
  document.getElementById('school').innerText = resume.education.school.name;
  for (let info of resume.education.school.info) {
    document.getElementById('schoolInfo').innerHTML += '<li>' + info + '</li>';
  }
  for (let info of resume.communityInvolvement) {
    document.getElementById('communityInfo').innerHTML += '<li>' + info + '</li>';
  }
  for (let skill of resume.skills) {
    document.getElementById('skills').innerHTML += '<li>' + skill + '</li>';
  }
  let jobTitles = document.getElementsByClassName('jobTitle');
  let companies = document.getElementsByClassName('company');
  let dates = document.getElementsByClassName('dates');
  let jobDescriptions = document.getElementsByClassName('jobDescription');
  for (i = 0; i < resume.jobs.length; i++) {
      jobTitles[i].innerHTML = resume.jobs[i].position;
      companies[i].innerHTML = resume.jobs[i].company;
      dates[i].innerHTML = resume.jobs[i].dates;
      jobDescriptions[i].innerHTML = resume.jobs[i].duties.join('<br>');
  }
}

var showEducation = true;
var showCommunity = true;
var showSkills = true;
var showWork = true;
function toggle(section) {
  //collapse or expand section
  if (section == 'education') {
    const section = document.getElementById('educationSection');
    if (showEducation === true) {
      section.style.display='none';
      showEducation = false;
    }
    else if (showEducation === false) {
      section.style.display='inherit';
      showEducation = true;
    }
  }
  else if (section == 'community') {
    const section = document.getElementById('communityInvolvementSection');
    if (showCommunity === true) {
      section.style.display='none';
      showCommunity = false;
    }
    else if (showCommunity === false) {
      section.style.display='inherit';
      showCommunity = true;
    }
  }
  else if (section == 'skills') {
    const section = document.getElementById('skillsSection');
    if (showSkills === true) {
      section.style.display='none';
      showSkills = false;
    }
    else if (showSkills === false) {
      section.style.display='inherit';
      showSkills = true;
    }
  }
  else if (section == 'work') {
    const section = document.getElementById('workExperienceSection');
    if (showWork === true) {
      section.style.display='none';
      showWork = false;
    }
    else if (showWork === false) {
      section.style.display='inherit';
      showWork = true;
    }
  }
}
