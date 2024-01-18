// Placeholder-funktioner för att visa matcher och truppen. 
// Dessa bör uppdateras med riktiga API-anrop.

function displayMatches() {
    const matchesList = document.getElementById('matches-list');
    // Ersätt detta med API-anrop och bearbetning av svar
    matchesList.innerHTML = '<li>Match 1</li><li>Match 2</li>';
}

function displaySquad() {
    const squadList = document.getElementById('squad-list');
    // Ersätt detta med API-anrop och bearbetning av svar
    squadList.innerHTML = '<li>Spelare 1</li><li>Spelare 2</li>';
}

document.addEventListener('DOMContentLoaded', function () {
    displayMatches();
    displaySquad();
});
