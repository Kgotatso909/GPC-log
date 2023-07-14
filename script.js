document.addEventListener("DOMContentLoaded", function() {
  // Sample data for the league table
  var teams = [
    { name: "Team 1", played: 10, won: 2, drawn: 3, lost: 5 },
    { name: "Team 2", played: 10, won: 4, drawn: 4, lost: 2 },
       { name: "Team 3", played: 10, won: 8, drawn: 0, lost: 2 },
    { name: "Team 4", played: 10, won: 7, drawn: 1, lost: 2 },
       { name: "Team 5", played: 10, won: 5, drawn: 3, lost: 2 },
    { name: "Team 6", played: 10, won: 9, drawn: 1, lost: 0 },
       { name: "Team 7", played: 10, won: 4, drawn: 4, lost: 2 },
    { name: "Team 8", played: 10, won: 3, drawn: 5, lost: 2 },
        { name: "Team 9", played: 10, won: 2, drawn: 8, lost: 0},
       { name: "Team 10", played: 10, won: 0, drawn: 3, lost: 7},
    { name: "Team 11", played: 10, won: 0, drawn: 4, lost: 6 },
       { name: "Team 12", played: 10, won: 8, drawn: 0, lost: 2 },
    { name: "Team 13", played: 10, won: 10, drawn: 0, lost: 0},
       { name: "Team 14", played: 10, won: 7, drawn: 2, lost: 1 },
    { name: "Team 15", played: 10, won: 1, drawn: 1, lost: 8 },
       { name: "Team 16", played: 10, won: 5, drawn: 3, lost: 2 },
           { name: "Team 17", played: 10, won: 4, drawn: 4, lost: 2 },
    { name: "Team 18", played: 10, won: 0, drawn: 3, lost: 7 },
       { name: "Team 19", played: 10, won: 5, drawn: 3, lost: 2 },
    { name: "Team 20", played: 10, won: 1, drawn: 4, lost: 5 }
  ];

  // Calculate points and add a rank property to each team
  teams.forEach(function(team) {
    team.points = team.won * 3 + team.drawn * 1;
  });
  
  // Sort teams based on points (descending order)
  teams.sort(function(a, b) {
    return b.points - a.points;
  });

  var tableBody = document.getElementById("table-body");

  // Loop through the teams and create table rows dynamically
  for (var i = 0; i < teams.length; i++) {
    var team = teams[i];

    var row = document.createElement("tr");

    var rankCell = document.createElement("td");
    rankCell.textContent = i + 1;
    row.appendChild(rankCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = team.name;
    row.appendChild(nameCell);

    var playedCell = document.createElement("td");
    playedCell.textContent = team.played;
    row.appendChild(playedCell);

    var wonCell = document.createElement("td");
    wonCell.textContent = team.won;
    row.appendChild(wonCell);

    var drawnCell = document.createElement("td");
    drawnCell.textContent = team.drawn;
    row.appendChild(drawnCell);

    var lostCell = document.createElement("td");
    lostCell.textContent = team.lost;
    row.appendChild(lostCell);

    var pointsCell = document.createElement("td");
    pointsCell.textContent = team.points;
    row.appendChild(pointsCell);

    tableBody.appendChild(row);
  }
});
