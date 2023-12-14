'use strict';

const formElem = document.querySelector('#norris');

const hakuElem = document.querySelector('input[name=q]');

const resultsElem = document.querySelector('#results');

let hakuLause = "https://api.chucknorris.io/jokes/search?query=";

formElem.addEventListener('submit', async function(evt) {

    evt.preventDefault();

    const hakuArvo = hakuElem.value;

    hakuLause += hakuArvo;
    console.log("-- nettiin lähtee: " + hakuLause);

    haeData(hakuLause);

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

    for (let vitsi of jsonData.result) {
        let htmlkoodi =
            `<article>
                <p>${vitsi.value}<p>
             </article>`;

        resultsElem.innerHTML += htmlkoodi;
    }

}