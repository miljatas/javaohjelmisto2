'use strict';

const hakuKysely = "https://api.chucknorris.io/jokes/random";

haeData();

async function haeData() {
    try {

    const response = await fetch(hakuKysely);

    const jsonData = await response.json();

    kasitteData(jsonData);

    } catch (error) {
        console.log(error.message);
    }
}

function kasitteData(jsonData) {
    console.log(jsonData.value);
}