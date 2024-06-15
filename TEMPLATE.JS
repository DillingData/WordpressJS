function standings() {
    document.getElementById('standings').style.display = 'block';
    document.getElementById('fixtures').style.display = 'none';
}

function fixtures() {
    document.getElementById('standings').style.display = 'none';
    document.getElementById('fixtures').style.display = 'block';
}

function ShowStandings(country) {
    let element = document.getElementsByClassName('standingsCountry');

    for (let counter = 0; counter < element.length; counter++) {
        element[counter].style.display = 'none';
    }

    document.getElementById(country).style.display = 'block';
}

function ShowFixtures(country) {
    let element = document.getElementsByClassName('fixturesCountry');

    for (let counter = 0; counter < element.length; counter++) {
        element[counter].style.display = 'none';
    }

    document.getElementById(country).style.display = 'block';
}