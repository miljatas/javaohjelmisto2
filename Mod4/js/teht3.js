'use strict';

const formElem = document.querySelector('form');
const resultsElem = document.querySelector('#results');

formElem.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const hakuArvo = document.querySelector('input[name=q]').value;

    const hakuKysely = `https://api.tvmaze.com/search/shows?q=${hakuArvo}`;
    console.log("-- nettiin lähtee: " + hakuKysely);

    haeData(hakuKysely);

});


async function haeData(nettikysely) {
    try {

        const response = await fetch(nettikysely);

        const jsonData = await response.json();

        kasitteData(jsonData);

    } catch (error) {
        console.log(error.message);
    }
}


function kasitteData(jsonData) {

    resultsElem.innerHTML = '';

    for (const tvSarja of jsonData) {
        const articleElem = document.createElement('article');

        const h2Elem = document.createElement('h2');
        h2Elem.innerText = tvSarja.show.name;

        const imgElem = document.createElement('img');
        imgElem.src = tvSarja.show.image?.medium;   // tämä data voi puuttua
        imgElem.alt = tvSarja.show.name;

        const aElem = document.createElement('a');
        aElem.href = tvSarja.show.url;
        aElem.innerText = 'Go to TV Show';
        aElem.target = "_blank";

        const divElem = document.createElement('div');
        divElem.innerHTML = tvSarja.show.summary;

        articleElem.append(h2Elem, imgElem, aElem, divElem);

        resultsElem.append(articleElem);

    }




}