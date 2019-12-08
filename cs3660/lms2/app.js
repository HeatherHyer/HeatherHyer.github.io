$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();
$('.popover-dismiss').popover({
 trigger: 'focus'
})
var league = {
 name: "My Baseball League",
 teams: [
   {
     id: 1,
     name: "Goldfish",
     league: "Girls 5-10",
     coach: "Nelson Mandela",
     admin: "Grant Feldman",
     phone: "(801) 555-1245",
     players: "15"
   },
   {
     id: 2,
     name: "Starlings",
     league: "Boys 8-12",
     coach: "George Kastanza",
     admin: "Nathan Alvarez",
     phone: "(224) 124-7998",
     players: "12"
   },
   {
     id: 3,
     name: "Jaguars",
     league: "Boys 12-16",
     coach: "Jose Martinez",
     admin: "Mary Johnson",
     phone: "(122) 333-4444",
     players: "17"
   },
   {
     id: 4,
     name: "Bruins",
     league: "Boys 5-10",
     coach: "Nelson Mandela",
     admin: "Grant Feldman",
     phone: "(801) 555-1245",
     players: "14"
   },
   {
     id: 5,
     name: "Bullfrogs",
     league: "Girls 8-12",
     coach: "George Kastanza",
     admin: "Nathan Alvarez",
     phone: "(224) 124-7998",
     players: "17"
   },
   {
     id: 6,
     name: "Mustangs",
     league: "Boys 12-16",
     coach: "Jose Martinez",
     admin: "Mary Johnson",
     phone: "(122) 333-4444",
     players: "13"
   }
 ]
}

function deleteRow(id) {
  id = id.id;
  let results = _.remove(league.teams, {'name': id});
  const container = document.getElementById(id);
  const teamName = container.childNodes[3].textContent;
  const teamId = container.childNodes[1].textContent;
  const modalBody = document.getElementById('deleteModalBody');
  const modalYesBtn = document.getElementById('deleteModalYesBtn');
  modalBody.textContent = teamName + ", (" + teamId + ")";
  modalYesBtn.addEventListener("click", function() {
    container.classList.add('animated');
    container.classList.add('fadeOut');
    renderTable(league.teams);
  });
}

function renderTable(json) {
  const body = $("tbody");
  body.empty();
  json.forEach(function(team) {
    const id = team.id;
    const name = team.name;
    const league = team.league;
    const coach = team.coach;
    const admin = team.admin;
    const phone = team.phone;
    const players = team.players;
    const row = '<tr data-toggle="tooltip" data-placement="bottom" title="More information on the ' + name + ' team" id="' + name + '"><th scope="row" style="display: none;">' + id + '</th><td>' + name + '</td><td>' + league + '</td><td>' + coach + '</td><td>' + admin + '</td><td>' + phone + '</td><td>' + players + '</td><td style="color: #3b4e94;"><i class="fas fa-edit"></i><i class="fas fa-trash-alt" data-toggle="modal" data-target="#deleteModal" onclick="deleteRow(' + name + ')"></i><a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="' + name + ' Team" data-content="Some basic information about the team" data-html="true"><i class="fas fa-question-circle"></i></a></td></tr>';
    body.append(row);
  })
  body.classList.add('fadeIn');
}

$( document ).ready(function() {
  renderTable(_.sortBy(league.teams, ['name']));
});

let up = false;

$('th').click(function() {
  const cn = event.target.className;
  if (cn !== 'actions') {
    if (up) {
      renderTable(_.sortBy(league.teams, [cn]).reverse());
      up = false;
      $('.icon').empty();
      $('.' + cn + ' span').append('<i class="fas fa-caret-up"></i>');
    }
    else {
      renderTable(_.sortBy(league.teams, [cn]));
      up = true;
      $('.icon').empty();
      $('.' + cn + ' span').append('<i class="fas fa-caret-down"></i>');
    }
  }
});

$('input').keyup(function(event) {
  const value = $(event.target).val();
  let results = _.filter(league.teams, function(item) {
    return _.includes(item.name, value) || _.includes(item.league, value) || _.includes(item.coach, value) || _.includes(item.admin, value) || _.includes(item.phone, value) || _.includes(item.players, value);
  });
  renderTable(results);
});

$( document ).ready(function() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://teams-7ffa.restdb.io/rest/team",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "df2949d941741ae2618c9fd47d077a63fcd32	",
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
