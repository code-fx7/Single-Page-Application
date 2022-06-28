// Daten laden
fetch("https://raw.githubusercontent.com/fbw-d05/data/main/team")
  // 1. Promise: Download wird beginnen
  .then((response) => {
    // Download hat begonnen
    // 2. Promise: Download wird beendet werden und Antwort wird als Text zurückgegeben werden
    return response.text();
  })
  .then(renderTeam);

function renderTeam(team) {
  // Beide Promises sind eingelöst
  const teamMates = team.split(",");
  const list = document.createElement("ul");
  teamMates.forEach((firstName) => {
    const li = document.createElement("li");
    li.textContent = firstName;
    list.appendChild(li);
  });
  document.body.appendChild(list);
}
