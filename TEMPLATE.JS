function standings() {
    document.getElementById('standings').style.display = 'block';
    document.getElementById('fixtures').style.display = 'none';
    document.getElementById('standingsClicked').setAttribute('style', 'display: flex; flex-direction: row; align-items: center; background-color: #E2E8F0; color: black; width: 83.333333%; margin: 0.25rem auto; height: 2.5rem; border-radius: 0.375rem; cursor: pointer;')
    document.getElementById('fixturesClicked').setAttribute('style', 'display: flex; flex-direction: row; align-items: center; background-color: #CBD5E0; color: black; width: 83.333333%; margin: 0.25rem auto; height: 2.5rem; border-radius: 0.375rem; cursor: pointer;')
    //document.getElementById('standingsClicked').style.background = '#CBD5E0';
    //document.getElementById('fixturesClicked').style.background = '#E2E8F00';
}

function fixtures() {
    document.getElementById('standings').style.display = 'none';
    document.getElementById('fixtures').style.display = 'block';
    //document.getElementById('standingsClicked').style.background = '#E2E8F00';
    //document.getElementById('fixturesClicked').style.background = '#CBD5E0';
    document.getElementById('standingsClicked').setAttribute('style', 'display: flex; flex-direction: row; align-items: center; background-color: #CBD5E0; color: black; width: 83.333333%; margin: 0.25rem auto; height: 2.5rem; border-radius: 0.375rem; cursor: pointer;')
    document.getElementById('fixturesClicked').setAttribute('style', 'display: flex; flex-direction: row; align-items: center; background-color: #E2E8F0; color: black; width: 83.333333%; margin: 0.25rem auto; height: 2.5rem; border-radius: 0.375rem; cursor: pointer;')
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