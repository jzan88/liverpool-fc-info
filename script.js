
function displayMatches(data) {
    const matchesList = document.getElementById('matches-list');
    data.matches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = `${match.date} - ${match.team1} vs ${match.team2}`;
        matchesList.appendChild(li);
    });
}

fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json')
.then(response => response.json())
.then(data => {
    displayMatches(data);
})
.catch(error => {
    console.error('Error fetching data: ', error);
});
