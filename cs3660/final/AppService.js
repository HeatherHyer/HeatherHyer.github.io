class AppService {
    constructor(playerView, restStorageService, localStorageService, listContainerId, formContainerId)
    {
        this.playerView = playerView;
        this.restStorageService = restStorageService;
        this.localStorageService = localStorageService
        this.listContainerId = listContainerId;
        this.formContainerId = formContainerId;
    }

    RenderTeamListView() {
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
      const head = $("thead");
      head.empty();
      head.append('<tr><th scope="col" style="display: none;">#</th><th scope="col" class="name">Name <span class="icon"><i class="fas fa-caret-down"></i></span></th><th scope="col" class="league">League <span class="icon"></span></th><th scope="col" class="coach">Coach <span class="icon"></span></th><th scope="col" class="admin">Admin <span class="icon"></span></th><th scope="col" class="phone">Phone <span class="icon"></span></th><th scope="col" class="players">Players <span class="icon"></span></th><th scope="col" class="actions">Actions <span class="icon"></span></th></tr>')
      const body = $("tbody");
      body.empty();
      league.teams.forEach(function(team) {
        const id = team.id;
        const name = team.name;
        const league = team.league;
        const coach = team.coach;
        const admin = team.admin;
        const phone = team.phone;
        const players = team.players;
        const row = '<tr data-toggle="tooltip" data-placement="bottom" title="More information on the ' + name + ' team" id="' + name + '"><th scope="row" style="display: none;">' + id + '</th><td>' + name + '</td><td>' + league + '</td><td>' + coach + '</td><td>' + admin + '</td><td>' + phone + '</td><td>' + players + '</td><td style="color: #3b4e94;"><i class="fas fa-edit"></i><i class="fas fa-trash-alt" data-toggle="modal" data-target="#deleteModal"></i><a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="' + name + ' Team" data-content="Some basic information about the team" data-html="true"><i class="fas fa-question-circle"></i></a></td></tr>';
        body.append(row);
      })
    }

    RenderPlayerListView() {
      this.playerView.RenderPlayerList();
    }
};
