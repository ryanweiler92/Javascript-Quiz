//var scoreLoadButton = document.getElementById('score-load-button');

//scoreLoadButton.addEventListener('click', postHighScores);


function postHighScores(e) {

    console.log('test');
    var retrieveScore = localStorage.getItem('Score');
    var retrieveInitial = localStorage.getItem("initials");

    var tableVar = document.getElementById("high-score-table");

    var tableRow = document.createElement('tr');
    tableVar.appendChild(tableRow);

    var tableDataInitial = document.createElement('td');
    tableRow.appendChild(tableDataInitial);
    tableDataInitial.textContent = retrieveInitial;

    var tableDataScore = document.createElement('td')
    tableRow.appendChild(tableDataScore);
    tableDataScore.textContent = retrieveScore;

    
}




